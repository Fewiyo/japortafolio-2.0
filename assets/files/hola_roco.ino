/*
 * "Hola Roco" -> mueve el servo y lo muestra en la OLED
 * ESP-WROOM-32 + INMP441 + modelo de Edge Impulse + servo SG90 + SSD1306
 *
 * ANTES DE COMPILAR:
 *  1) Edge Impulse: Deployment > Arduino library > Quantized (int8) > Build
 *  2) Arduino IDE: Programa > Incluir Libreria > Anadir biblioteca .ZIP
 *  3) Cambia el #include y ETIQUETA_CLAVE de abajo.
 *  4) Herramientas > Partition Scheme > "Huge APP (3MB No OTA)"
 *
 * Librerias: ESP32Servo, Adafruit SSD1306, Adafruit GFX
 *
 * CONEXIONES
 *   INMP441:  VDD 3.3V | GND GND | L/R GND | WS 25 | SD 33 | SCK 32
 *   Servo:    GND comun | V+ 5V externos | senal GPIO13
 *   OLED:     VCC 3.3V | GND GND | SDA GPIO21 | SCL GPIO22
 */

/* ====== 1. CAMBIA ESTO ====== */
#include <Fewiyo-project-1_inferencing.h>
#define ETIQUETA_CLAVE "Hola Roco"   // nombre exacto de la clase en Edge Impulse
#define UMBRAL          0.80f        // confianza minima (0.0 - 1.0)
#define GANANCIA        16           // MISMO valor que en grabador_ei.ino
/* ============================ */

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include <driver/i2s.h>
#include <ESP32Servo.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

/* Pines */
#define I2S_WS     25
#define I2S_SD     33
#define I2S_SCK    32
#define I2S_PORT   I2S_NUM_0
#define PIN_SERVO  13
#define PIN_SDA    21
#define PIN_SCL    22

/* Pantalla */
#define ANCHO_OLED 128
#define ALTO_OLED  64
#define DIR_OLED   0x3C

/* Tiempo minimo entre activaciones del servo (ms) */
#define ESPERA_ENTRE_ACTIVACIONES 3000
/* Cuanto se queda la pantalla mostrando la deteccion (ms) */
#define DURACION_MENSAJE 2000

Servo servo;
Adafruit_SSD1306 oled(ANCHO_OLED, ALTO_OLED, &Wire, -1);

static unsigned long ultima_activacion = 0;
static unsigned long fin_mensaje = 0;
static uint32_t contador_detecciones = 0;
static bool hay_oled = false;

/* ---------- Buffers de audio ---------- */
typedef struct {
  int16_t *buffer;
  uint8_t  buf_ready;
  uint32_t buf_count;
  uint32_t n_samples;
} inference_t;

static inference_t inference;
static const uint32_t sample_buffer_size = 2048;
static signed short sampleBuffer[sample_buffer_size];
static bool debug_nn = false;
static bool record_status = true;

/* ---------- Prototipos ---------- */
static int  i2s_init(uint32_t sampling_rate);
static bool microphone_inference_start(uint32_t n_samples);
static bool microphone_inference_record(void);
static int  microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr);
static void mover_servo(void);
static void pantallaEscuchando(const char *clase, float confianza);
static void pantallaDetectado(void);

void setup() {
  Serial.begin(115200);
  while (!Serial && millis() < 3000);

  /* --- Pantalla --- */
  Wire.begin(PIN_SDA, PIN_SCL);
  hay_oled = oled.begin(SSD1306_SWITCHCAPVCC, DIR_OLED);
  if (!hay_oled) {
    Serial.println("Aviso: OLED no detectada, sigo sin pantalla.");
  } else {
    oled.clearDisplay();
    oled.setTextColor(SSD1306_WHITE);
    oled.setTextSize(2);
    oled.setCursor(0, 8);
    oled.println("ROCO");
    oled.setTextSize(1);
    oled.setCursor(0, 40);
    oled.println("Iniciando...");
    oled.display();
  }

  /* --- Servo --- */
  servo.setPeriodHertz(50);
  servo.attach(PIN_SERVO, 500, 2400);
  servo.write(0);
  delay(300);
  servo.detach();   // se suelta para que no vibre mientras escucha

  /* --- Audio --- */
  ei_printf("Muestras por ventana: %d\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
  if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
    ei_printf("ERROR: no hay memoria para el buffer de audio\n");
    if (hay_oled) {
      oled.clearDisplay();
      oled.setCursor(0, 0);
      oled.println("ERROR memoria");
      oled.display();
    }
    while (true) delay(1000);
  }

  ei_printf("Escuchando...\n");
  pantallaEscuchando("-", 0.0f);
}

void loop() {
  if (microphone_inference_record() == false) {
    ei_printf("ERROR: fallo la grabacion\n");
    return;
  }

  signal_t signal;
  signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
  signal.get_data = &microphone_audio_signal_get_data;

  ei_impulse_result_t result = { 0 };
  EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
  if (r != EI_IMPULSE_OK) {
    ei_printf("ERROR: run_classifier devolvio %d\n", r);
    return;
  }

  /* Busca la clase con mayor probabilidad y revisa la palabra clave */
  const char *mejor_clase = "-";
  float mejor_valor = 0.0f;
  float valor_clave = 0.0f;

  for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
    ei_printf("  %s: %.3f\n", result.classification[ix].label, result.classification[ix].value);

    if (result.classification[ix].value > mejor_valor) {
      mejor_valor = result.classification[ix].value;
      mejor_clase = result.classification[ix].label;
    }
    if (strcmp(result.classification[ix].label, ETIQUETA_CLAVE) == 0) {
      valor_clave = result.classification[ix].value;
    }
  }

  if (valor_clave > UMBRAL && millis() - ultima_activacion > ESPERA_ENTRE_ACTIVACIONES) {
    ei_printf(">>> DETECTADO\n");
    ultima_activacion = millis();
    contador_detecciones++;
    pantallaDetectado();
    mover_servo();
    fin_mensaje = millis() + DURACION_MENSAJE;
  }

  /* Mientras dure el mensaje de deteccion no se pisa la pantalla */
  if (millis() > fin_mensaje) {
    pantallaEscuchando(mejor_clase, valor_clave);
  }

  ei_printf("---\n");
}

/* ---------- Pantalla ---------- */
static void pantallaEscuchando(const char *clase, float confianza) {
  if (!hay_oled) return;

  oled.clearDisplay();
  oled.setTextColor(SSD1306_WHITE);

  oled.setTextSize(1);
  oled.setCursor(0, 0);
  oled.print("Escuchando...");

  oled.setCursor(0, 16);
  oled.print("Clase: ");
  oled.print(clase);

  /* Barra con la confianza de la palabra clave */
  oled.setCursor(0, 30);
  oled.print("Palabra: ");
  oled.print((int)(confianza * 100));
  oled.print("%");

  oled.drawRect(0, 42, 128, 10, SSD1306_WHITE);
  int ancho = (int)(confianza * 124.0f);
  if (ancho > 0) oled.fillRect(2, 44, ancho, 6, SSD1306_WHITE);

  /* Marca del umbral sobre la barra */
  int x_umbral = 2 + (int)(UMBRAL * 124.0f);
  oled.drawFastVLine(x_umbral, 40, 14, SSD1306_WHITE);

  oled.setCursor(0, 56);
  oled.print("Detecciones: ");
  oled.print(contador_detecciones);

  oled.display();
}

static void pantallaDetectado(void) {
  if (!hay_oled) return;

  oled.clearDisplay();
  oled.setTextColor(SSD1306_WHITE);
  oled.setTextSize(2);
  oled.setCursor(8, 14);
  oled.println("HOLA");
  oled.setCursor(8, 34);
  oled.println("ROCO!");
  oled.drawRect(0, 0, 128, 64, SSD1306_WHITE);
  oled.display();
}

/* ---------- Servo ---------- */
static void mover_servo(void) {
  servo.attach(PIN_SERVO, 500, 2400);
  servo.write(180);
  delay(800);
  servo.write(0);
  delay(800);
  servo.detach();
}

/* ---------- Captura de audio (tarea aparte) ---------- */
static void audio_inference_callback(uint32_t n_bytes) {
  for (int i = 0; i < (int)(n_bytes >> 1); i++) {
    inference.buffer[inference.buf_count++] = sampleBuffer[i];
    if (inference.buf_count >= inference.n_samples) {
      inference.buf_count = 0;
      inference.buf_ready = 1;
    }
  }
}

static void capture_samples(void *arg) {
  const int32_t i2s_bytes_to_read = (uint32_t)arg;
  size_t bytes_read = i2s_bytes_to_read;

  while (record_status) {
    i2s_read((i2s_port_t)I2S_PORT, (void *)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

    if (bytes_read <= 0) {
      ei_printf("Error en la lectura I2S: %d\n", bytes_read);
    } else {
      // GANANCIA debe ser IDENTICA a la de grabador_ei.ino
      for (int x = 0; x < i2s_bytes_to_read / 2; x++) {
        int32_t v = (int32_t)sampleBuffer[x] * GANANCIA;
        if (v > 32767)  v = 32767;
        if (v < -32768) v = -32768;
        sampleBuffer[x] = (int16_t)v;
      }
      if (record_status) {
        audio_inference_callback(i2s_bytes_to_read);
      } else {
        break;
      }
    }
  }
  vTaskDelete(NULL);
}

static int i2s_init(uint32_t sampling_rate) {
  i2s_config_t i2s_config = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = sampling_rate,
    .bits_per_sample = (i2s_bits_per_sample_t)16,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_I2S,
    .intr_alloc_flags = 0,
    .dma_buf_count = 8,
    .dma_buf_len = 512,
    .use_apll = false,
    .tx_desc_auto_clear = false,
    .fixed_mclk = -1,
  };

  i2s_pin_config_t pin_config = {
    .bck_io_num   = I2S_SCK,
    .ws_io_num    = I2S_WS,
    .data_out_num = -1,
    .data_in_num  = I2S_SD,
  };

  esp_err_t ret = i2s_driver_install((i2s_port_t)I2S_PORT, &i2s_config, 0, NULL);
  if (ret != ESP_OK) { ei_printf("Error en i2s_driver_install\n"); return ret; }

  ret = i2s_set_pin((i2s_port_t)I2S_PORT, &pin_config);
  if (ret != ESP_OK) { ei_printf("Error en i2s_set_pin\n"); return ret; }

  ret = i2s_zero_dma_buffer((i2s_port_t)I2S_PORT);
  if (ret != ESP_OK) { ei_printf("Error en i2s_zero_dma_buffer\n"); return ret; }

  return int(ret);
}

static bool microphone_inference_start(uint32_t n_samples) {
  inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));
  if (inference.buffer == NULL) return false;

  inference.buf_count = 0;
  inference.n_samples = n_samples;
  inference.buf_ready = 0;

  if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
    ei_printf("Fallo al iniciar I2S\n");
  }
  ei_sleep(100);
  record_status = true;

  xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void *)sample_buffer_size, 10, NULL);
  return true;
}

static bool microphone_inference_record(void) {
  while (inference.buf_ready == 0) {
    delay(10);
  }
  inference.buf_ready = 0;
  return true;
}

static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr) {
  numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);
  return 0;
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "Modelo invalido: este sketch necesita un impulso de tipo audio/microfono"
#endif
