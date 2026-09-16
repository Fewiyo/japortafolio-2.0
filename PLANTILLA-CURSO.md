# Plantilla de curso

Copia el bloque de abajo **una vez por curso** (siete veces) y rellénalo. Cuando lo tengas, me lo pasas —completo o de a uno— y yo lo convierto a `js/data.js`.

No te preocupes por el formato: escribe en lenguaje normal. Si un campo no aplica, déjalo vacío y esa fila simplemente no aparece en la ficha.

---

## Dónde va cada dato

**En la tarjeta del listado** (lo que se ve en `cursos.html`):

```
┌─────────────────────────────────┐
│                                 │
│         FOTO DE PORTADA         │
│                                 │
│  [Tipo] [Año] [Nivel]           │ ← etiquetas, aparecen al pasar el cursor
├─────────────────────────────────┤
│ Nombre del curso        Cargo   │
│                   Institución   │
└─────────────────────────────────┘
```

**En la ficha del curso** (al pinchar la tarjeta):

1. Nombre del curso en grande
2. Resumen de una línea
3. Fila de datos: Año · Institución · Cargo · Nivel · Duración
4. Foto de portada a ancho completo
5. Descripción
6. Temario
7. Registro (fotos y videos)
8. Enlace al siguiente curso

---

## Bloque a rellenar

```
═══════════════════════════════════
CURSO 1
═══════════════════════════════════

Nombre del curso:
Tipo:                              (Curso / Taller / Electivo / Seminario)
Año:
Cargo:                             (Profesor, Profesor a cargo, Ayudante…)
Institución:                       PENTA UC
Nivel:                             (a quiénes: 7º y 8º básico, I y II medio…)
Duración:                          (opcional: 12 sesiones, un semestre…)

RESUMEN — una sola línea, es el gancho:


DESCRIPCIÓN — uno a tres párrafos.
Qué pregunta abría el curso, por qué le importaba a esos estudiantes,
y cómo lo trabajaban en clase:


TEMARIO — una línea por clase.
Si quieres, agrega una frase de detalle después de un guion:

  1.
  2.
  3.
  4.

REGISTRO — fotos y videos, con un pie breve cada uno.
Indica el tipo al principio: [foto], [video] o [youtube]

  1. [foto] archivo:                    pie:
  2. [foto] archivo:                    pie:
  3. [video] archivo:                   pie:
  4. [youtube] id:                      pie:

═══════════════════════════════════
```

---

## Sobre los archivos

**Fotos.** Guárdalas en `assets/img/cursos/`. Nombre sin tildes ni espacios: `robotica-2023-01.jpg`. Formato horizontal (4:3), alrededor de 1600×1200 px.

**Videos propios.** En `assets/video/`. Ojo con el peso: GitHub no acepta archivos sobre 100 MB, y un video pesado hace lenta la página. Si supera unos 20 MB, conviene subirlo a YouTube y enlazarlo.

**YouTube.** Necesito solo el ID, no la URL completa. De `https://youtu.be/dQw4w9WgXcQ` el ID es `dQw4w9WgXcQ`.

Mientras no haya archivo, se dibuja un marcador gris con el nombre del curso, así que puedes mandarme los textos primero y las fotos después.

---

## Ejemplo relleno

Para que se vea cómo queda:

```
═══════════════════════════════════
CURSO 1
═══════════════════════════════════

Nombre del curso:  Robótica educativa con Arduino
Tipo:              Curso
Año:               2023
Cargo:             Profesor a cargo
Institución:       PENTA UC
Nivel:             I y II medio
Duración:          12 sesiones

RESUMEN:
Programar y construir robots que resuelvan un problema del propio colegio.

DESCRIPCIÓN:
La mayoría de los cursos de robótica escolar terminan con un robot que
sigue una línea negra y nada más. Quise que estos estudiantes salieran
con algo que alguien usara de verdad.

Cada grupo eligió un problema real de su colegio y tuvo doce sesiones
para llegar a un prototipo funcional. Trabajamos con Arduino, impresión
3D y corte láser, siempre partiendo del problema y no de la tecnología.

TEMARIO:
  1. Qué es un sistema — entradas, proceso y salidas
  2. Primeros circuitos: LED, resistencias y protoboard
  3. Programar en Arduino: estructura básica y variables
  4. Sensores: leer el mundo físico — luz, distancia y temperatura

REGISTRO:
  1. [foto] archivo: robotica-2023-01.jpg    pie: Primera sesión de armado en el laboratorio.
  2. [foto] archivo: robotica-2023-02.jpg    pie: Prototipo de riego automático para el invernadero del colegio.
  3. [youtube] id: dQw4w9WgXcQ               pie: Presentación final de los seis grupos.

═══════════════════════════════════
```
