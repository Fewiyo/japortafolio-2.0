# Portafolio de Vicente Cáceres Farías

Documento de traspaso. Está escrito para que otra IA, u otra persona, o el propio Vicente
dentro de seis meses, pueda retomar este proyecto sin leer el historial de conversaciones.

**Actualizado al 20 de septiembre de 2026.**

---

## 1. Lo mínimo para empezar

| | |
|---|---|
| Qué es | Portafolio personal de un diseñador industrial chileno: docencia STEAM, creación de FabLabs, diseño de servicios y aplicaciones hechas con IA |
| Dueño | Vicente Cáceres Farías · vicentecfarias@gmail.com · GitHub `Fewiyo` |
| En línea | https://fewiyo.github.io/japortafolio-2.0/ |
| Repositorio | https://github.com/Fewiyo/japortafolio-2.0 (público) |
| En el disco | `C:\Users\vicen\Documents\Ia\portafolio` |
| Dominio futuro | japortafolio.com, comprado, con hosting en Hostinger. **Todavía no migrado** |
| Stack | HTML + CSS + JS puro en el navegador. Python solo para construir |
| Dependencias | Ninguna en el navegador. Python con Pillow para procesar imágenes |
| Despliegue | `git push` a `main`. GitHub Pages publica en 40–60 segundos |

Contenido actual: **22 entradas visibles** en el catálogo — 7 proyectos, 7 cursos y 8 de las 10
aplicaciones, porque dos están escondidas a propósito.

---

## 2. Cómo funciona, en una frase

**Todo el contenido vive en `js/data.js`. `tools/construir.py` lo lee y escribe el sitio
completo como HTML en disco. `js/main.js` solo agrega comportamiento.**

```
js/data.js  ──►  tools/construir.py  ──►  index.html
 (contenido)      (se ejecuta en el         historia.html
                   pre-commit)              proyectos/<id>/index.html
                                            cursos/<id>/index.html
                                            apps/<id>/index.html
                                            sitemap.xml + robots.txt
```

### Por qué se construye en vez de dibujar en el navegador

Hasta el 20 de septiembre de 2026 cada página era un `<div id="app">` vacío que `main.js`
llenaba al cargar. El archivo servido no tenía **ni una palabra de texto**. Eso dejaba fuera a
tres públicos que no ejecutan JavaScript:

- Los previsualizadores de enlaces: WhatsApp, LinkedIn, Slack. Por eso el link salía en blanco.
- **Los rastreadores de IA.** Vercel analizó más de 500 millones de peticiones de GPTBot y no
  encontró una sola ejecución de JavaScript. ClaudeBot y PerplexityBot tampoco renderizan: piden
  el HTML crudo, leen lo que hay y se van sin reintentar. La excepción es Gemini.
- Google sí lo ejecuta, pero en una segunda pasada, con retraso y sin garantías.

Si alguna vez se plantea volver a dibujar en el cliente, o migrar a un framework que renderice
en el navegador: **no**. Esta es la decisión de arquitectura más importante del proyecto y la
razón por la que existe `construir.py`.

---

## 3. Mapa de archivos

```
├── js/data.js            TODO el contenido. Es el único archivo que hay que
│                         tocar para cambiar textos, proyectos o la trayectoria
├── js/main.js            137 líneas. Tema, filtro del catálogo y animación.
│                         No dibuja nada
├── css/style.css         Tokens de diseño arriba, componentes abajo
├── tools/construir.py    El constructor. Genera las 26 páginas + sitemap + robots
├── tools/leer_data.py    Parser propio del objeto literal de data.js
│                         (no es JSON: claves sin comillas y comentarios)
├── tools/version.py      Obsoleto desde la Fase A. Lo reemplazó construir.py
├── .githooks/pre-commit  Ejecuta construir.py y suma lo generado al commit
├── FALTANTES.md          La lista de todo lo que falta. Leerla antes de
│                         preguntarle nada a Vicente sobre contenido
├── index.html            Generados. NO editar a mano: se sobrescriben
├── historia.html         en cada commit
├── proyectos/<id>/       26 páginas generadas en total
├── cursos/<id>/
├── apps/<id>/
├── sitemap.xml
├── robots.txt
└── assets/
    ├── img/marca/        La marca Jã: favicon y barra, en claro y oscuro
    ├── img/retrato.jpg   Foto de Historia. Cuadrada, 1200×1200
    ├── img/proyectos/    Imágenes publicadas, ya optimizadas
    ├── img/cursos/
    ├── img/ia/
    └── files/            El CV en PDF
```

### Carpetas que NO se publican

Están en `.gitignore` y son material de archivo local:

| Carpeta | Qué tiene | Por qué no se publica |
|---|---|---|
| `Otras pegas/` | Material del sitio antiguo japortafolio.com, por proyecto | Fotos con menores y logos de terceros |
| `proyectos IA/` | Fichas fuente de las 10 apps | Nombran direcciones internas de proyectos sin login |
| `Penta UC/` | 4,2 GB de fotos y videos en bruto de los cursos | Es el archivo de trabajo |
| `Prompt etapas/` | Briefs de trabajo y un proyecto personal | Vicente pidió que no se publique |
| `/CV_*.pdf` | El CV con datos personales completos | RUT, dirección, fecha de nacimiento y teléfono |

---

## 4. Cómo hacer las cosas

### Cambiar cualquier texto

Se edita `js/data.js` y se comitea. El hook reconstruye. **Nunca editar los `.html`**: se
regeneran y el cambio se pierde.

### Agregar un proyecto

En el array `proyectos` de `data.js`:

```js
{
  id: "identificador-en-minusculas",   // define la url: /proyectos/<id>/
  titulo: "Nombre",
  cliente: "Para quién",
  anio: "2024",                        // o "2022 — 2024"; ordena por el año final
  tags: ["Etiqueta", "Otra"],          // alimentan el filtro del catálogo
  resumen: "Una o dos frases.",
  img: "assets/img/proyectos/<id>/01-portada.jpg",
  bloques: [
    { tipo: "texto",  valor: "Un párrafo." },
    { tipo: "texto",  titulo: "Con subtítulo", valor: "..." },
    { tipo: "imagen", valor: "assets/img/...", pie: "Pie de foto." },
    { tipo: "cita",   valor: "Una cita destacada." },
    { tipo: "lista",  titulo: "Mi rol", valor: ["Uno", "Dos"] }
  ]
}
```

Cursos y apps tienen su propia forma; el ejemplo más cercano está siempre en el mismo array.

### Esconder algo sin borrarlo

`oculto: true` en una app. Sale del catálogo, del filtro y del enlace "siguiente proyecto",
pero su página sigue existiendo y se puede abrir directo. Se usó con SKU y Proyecto IoT 01,
que no tienen imágenes propias.

### Procesar imágenes antes de publicarlas

Nunca se copia una foto tal cual. Siempre: redimensionar a 1600px de lado mayor, **repintar
sobre un lienzo nuevo para borrar los metadatos** (las fotos de teléfono traen GPS), y guardar
como JPEG de calidad 82 progresivo.

```python
from PIL import Image, ImageOps
im = ImageOps.exif_transpose(Image.open(origen))
im.thumbnail((1600, 1600), Image.LANCZOS)
limpia = Image.new("RGB", im.size, "white")   # el repintado borra el EXIF
limpia.paste(im)
limpia.save(destino, "JPEG", quality=82, optimize=True, progressive=True)
```

### Construir a mano

```bash
python tools/construir.py
```

### Migrar a japortafolio.com

Cambiar **una sola línea**: `BASE` arriba de `tools/construir.py`. De ahí salen las URLs
canónicas, las de compartir y el sitemap entero.

---

## 5. Reglas que no se negocian

### Privacidad de las personas en las fotos

- **Caras de menores de edad: no se publican.** Ninguna. Tampoco nombres escritos a mano de
  estudiantes en sus trabajos. Vicente lo pidió explícitamente para los cursos PENTA UC y
  después lo extendió al resto del sitio.
- **Caras de personas adultas: sí se publican.** Lo pidió para el material de `Otras pegas`.
  Ya entraron el equipo de HAALUR, la matrona de Eloísa y su propio retrato.

Ante una foto con gente, la pregunta no es "¿hay una cara?" sino "¿hay un menor?". Si lo hay,
no se publica y se le avisa. **No recortar para esconder una cara sin decírselo.**

Quedan dos casos esperando que él confirme, explicados en `Otras pegas/LEEME.md`: las notas de
prensa de Congreso Futuro, donde todas las fotos traen niños del hospital, y cuatro fotos de
Eloísa donde aparece el bebé de una paciente.

### Datos personales de Vicente

Nunca al sitio ni a ningún archivo versionado: **RUT, dirección, fecha de nacimiento y
teléfono**. El CV publicado es una copia redactada; el original está en el disco y cubierto por
`.gitignore`. Si él manda un archivo nuevo, hay que revisarlo antes de subirlo.

### Nada de marcadores publicados

El sitio no muestra texto tipo "PLACEHOLDER", ni imágenes de relleno, ni notas dirigidas a
Vicente. Cuando falta un dato se saca del sitio y se anota en `FALTANTES.md`. Esa es la regla
y hay que sostenerla.

---

## 6. Cosas que van a morder

- **`node` no está instalado** en esa máquina y fue una decisión, no un olvido. Vicente pidió
  no tener cadena de herramientas. Si algún día se justifica 11ty o Astro, migrar desde
  Markdown será fácil; pero no se introduce npm sin pedírselo. Como consecuencia, `docx-js` y
  cualquier herramienta de npm **no están disponibles**: para generar documentos Word se usa
  `python-docx`.
- **Sí está LibreOffice**, instalado el 20 de septiembre de 2026 justamente para poder mirar los
  documentos antes de entregarlos. Con eso se revisa un `.docx` de verdad en vez de a ciegas:

  ```bash
  "/c/Program Files/LibreOffice/program/soffice.exe" --headless --convert-to pdf --outdir . archivo.docx
  python -c "import pymupdf; d=pymupdf.open('archivo.pdf'); [p.get_pixmap(dpi=105).save('pg-%d.png'%i) for i,p in enumerate(d,1)]"
  ```

  No hay pandoc ni poppler, así que el PDF se rasteriza con `pymupdf`, que sí está.
- **En `python-docx`, fijar `cell.width` no basta.** Word y LibreOffice respetan la rejilla de la
  tabla, no el ancho de cada celda: sin escribir el `w:tblGrid` todas las columnas salen iguales.
  Y restar dos `Length` devuelve un `int` en EMU, que ya no tiene `.twips`.
- **El hash de caché solo cambia en el commit.** Durante el desarrollo local el navegador sirve
  el CSS viejo. Para ver cambios hay que forzar la recarga del `<link>`.
- **Los heredocs de bash fallan con contenido largo** en ese entorno. Usar la herramienta de
  escritura de archivos, o escribir a un archivo y pasarlo con `git commit -F`.
- **`data.js` no es JSON.** Tiene claves sin comillas y comentarios. Para leerlo desde Python
  está `tools/leer_data.py`.
- **Los cortes de texto largos en `data.js` son frágiles.** Una vez un reemplazo por marcadores
  borró el array `cursos` entero porque estaba entre los dos marcadores. Hacer copia antes y
  verificar los conteos después.
- **La consola de Windows es cp1252** y rompe al imprimir acentos. Escribir a archivo con
  `encoding="utf-8"` en vez de depender de `print`.

---

## 7. Dónde está lo que falta

**`FALTANTES.md`, en la raíz.** Es la lista única de todo lo que el sitio todavía no dice:
datos que faltan por proyecto, archivos que no existen, repositorios privados y decisiones
esperando respuesta de Vicente.

Leerla antes de preguntarle nada sobre contenido faltante, porque probablemente ya está
anotado ahí.

---

## 8. Hacia dónde va

El plan completo, con los hallazgos de investigación que lo sostienen, está en
`documentacion/Proyecto-portafolio.docx`, en esta misma carpeta.

En resumen: el sitio es la base de un sistema más grande —blog, cursos documentados,
eventualmente venta— y el destino comercial es **institucional, no de consumo**. Toda la
trayectoria de Vicente es B2B: colegios, municipalidades, programas públicos. En Chile, vender
capacitación a un colegio subvencionado con fondos SEP exige estar inscrito como ATE en el
Mineduc, y para inscribirse como persona natural hace falta magíster o doctorado. Vicente está
estudiando uno.

Eso cambia el objetivo del portafolio: no es convertir un pago con tarjeta, es ganar una
conversación con un sostenedor o con una empresa del rubro.
