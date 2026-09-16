# Portafolio — Vicente Cáceres Farías


## Sistema visual

Las medidas del referente están anotadas como tokens al inicio de [css/style.css](css/style.css), así que ajustar el ritmo del sitio es cambiar una variable:

| Token | Valor | Qué controla |
|---|---|---|
| `--maxw` / `--pad` | 1200 / 24 px | Contenedor → columna útil de 1152 px |
| `--measure-hero` | 950 px | Ancho del titular de portada |
| `--measure-head` | 800 px | Ancho de los títulos de sección |
| `--measure-text` | 400 px | Columnas de texto de servicios |
| `--air-hero` | 340 px | Aire sobre el titular |
| `--air-section` | 200 px | Aire sobre cada título de sección |
| `--gap-card` | 12 px | Separación entre tarjetas |

**Fondo:** color plano, blanco en modo claro y `#0b0b0b` en oscuro. Sin texturas ni patrones.

**Rejilla del catálogo:** todas las tarjetas del mismo porte, tres columnas en escritorio y proporción 4:3. No hay ninguna regla `nth-child`: ninguna posición del array vuelve a un proyecto más llamativo que otro.

**Tipografía:** EB Garamond para titulares (64 px / 72 px, tracking −0.02em) y subtítulos (30 px / 40 px); Inter para interfaz y textos de servicio (16 px / 26 px).

## Cómo verlo

Abrir `index.html` directamente funciona, pero para que las rutas relativas se comporten igual que en producción conviene levantar un servidor:

```bash
python -m http.server 5173
```

Luego entra a `http://localhost:5173`.

## Estructura

```
index.html          Inicio: titular, catálogo, servicios, contacto
proyecto.html       Caso de estudio (recibe ?id=... del proyecto)
curso.html          Ficha de un curso (recibe ?id=... del curso)
proyecto-ia.html    Ficha de una app o plataforma (recibe ?id=...)
cursos.html         Redirección al catálogo, para no romper enlaces antiguos
historia.html       Sobre mí, trayectoria e instituciones
css/style.css       Todo el estilo (tokens de color, tipografía, layout)
js/data.js          ← TODO EL CONTENIDO. Es el único archivo que editas.
js/main.js          Motor que arma las páginas desde data.js
assets/img/         Tus fotos de proyecto
assets/img/cursos/  Fotos de los cursos
assets/img/ia/      Capturas de las apps y plataformas
proyectos IA/       Fichas fuente de las apps (no se publica)
assets/video/       Videos propios de los cursos
assets/files/       Tu CV en PDF
```

## Cómo editar el contenido

Todo vive en [js/data.js](js/data.js). Los textos marcados con `PLACEHOLDER —` son los que tienes que reemplazar.

### Pestaña de Blog

Apunta a la plataforma externa. Mientras `url` esté vacía, la pestaña aparece en el menú pero atenuada y sin navegar a ninguna parte. Al pegar la URL se activa sola y se abre en una pestaña nueva:

```js
blog: {
  texto: "Blog",
  url: "https://tu-plataforma.com"
}
```

### El catálogo

La pestaña **Catálogo** reúne en una sola grilla los `proyectos` y los `cursos`, ordenados del año más reciente al más antiguo. No hay que mantener ese orden a mano: `main.js` lo calcula del campo `anio` y, si dice `"2022 — 2024"`, usa el año final.

Cada tipo conserva sus propios campos en `data.js`; el catálogo los normaliza al dibujar la tarjeta. Para que algo aparezca ahí basta con agregarlo a `proyectos`, `cursos` o `apps`.

### Apps y plataformas hechas con IA

El array `apps` guarda las aplicaciones y plataformas web construidas con IA. **No se edita a mano:** el texto vive en `proyectos IA/<id>/proyecto.md` y el bloque de `data.js` se genera desde ahí. Si cambia una ficha, se regenera el bloque.

Cada app lleva `tipo` (`Aplicación`, `Plataforma web` o `Hardware`), `herramienta` (con qué IA se construyó), `estado`, `link` al proyecto en vivo, una `bitacora` de avances con fecha y un array `etiquetas` con vocabulario cerrado, pensado para un buscador futuro. En la tarjeta del catálogo se muestran `tipo`, `anio` y `herramienta`.

### Títulos de sección

El objeto `secciones` controla el encabezado de cada bloque del inicio. Si dejas `intro: ""` esa línea no se muestra.

```js
catalogo: {
  eyebrow: "01 / Catálogo",
  titulo: "Todo lo que he hecho, de lo más reciente a lo más antiguo.",
  intro: ""
}
```

### Cursos

Los cursos viven en el array `cursos` y tienen ficha propia en `curso.html?id=`. En el catálogo aparecen mezclados con los proyectos, ordenados por año.

Los siete cursos de PENTA UC ya están cargados con su contenido real, extraído de los programas oficiales de cada curso.

```js
{
  id: "robots-makers-en-accion",   // aparece en la URL, sin espacios ni tildes
  nombre: "Robots Makers en Acción",
  subtitulo: "Crea tu primer robot explorador",
  etiqueta: "Curso semestral",     // Curso semestral / Curso de verano / Taller…
  anio: "2024",
  periodo: "Segundo semestre 2024",
  cargo: "Profesor titular y creador del curso",
  institucion: "PENTA UC",
  nivel: "1º y 2º medio",
  duracion: "14 sesiones",
  equipo: "Ayudante: Elvis Andrade Torres",   // opcional
  resumen: "Una línea de gancho.",
  portada: "assets/img/cursos/robots-makers-01.jpg",
  descripcion: ["Párrafo uno.", "Párrafo dos."],
  destacados: [                    // recuadros bajo la descripción
    { titulo: "Curso de creación propia", texto: "…" }
  ],
  temario: [
    { titulo: "Presentación y formación de equipos", detalle: "Programa y reglas." }
  ],
  galeria: [
    { tipo: "imagen",  src: "assets/img/cursos/robots-makers-02.jpg", pie: "Pie de foto." },
    { tipo: "youtube", src: "dQw4w9WgXcQ",                            pie: "Video del curso." }
  ]
}
```

En la tarjeta del catálogo se muestran `etiqueta`, `anio` y `nivel` como etiquetas sobre la foto, y `nombre` con `cargo` e `institucion` debajo. Los campos vacíos no aparecen: si dejas `equipo: ""`, esa fila desaparece de la ficha.

**Destacados.** Son los recuadros que aparecen bajo la descripción. Se usan para dejar constancia de la autoría de cada curso y, en los cursos 4, 5 y 6, del robot educativo desarrollado con Elvis Andrade.

**Fotos.** Las del sitio viven en `assets/img/cursos/`, ya redimensionadas a 1600 px y **sin metadatos EXIF** — los JPG de teléfono guardan coordenadas GPS, y estas fotos son de colegios con menores de edad.

**Regla de anonimato.** Ninguna foto publicada muestra la cara de un estudiante, ni nombres escritos en papelógrafos, pizarras o pantallas. Al agregar fotos nuevas hay que revisar las dos cosas: varias del archivo quedaron fuera por nombres manuscritos, no por caras. Cuando una foto vale la pena pero tiene una cara o un nombre en un borde, se recorta antes de publicarla.

**Videos.** No se suben al repositorio: GitHub rechaza archivos sobre 100 MB y varios de los originales pasan los 200 MB. `.gitignore` los excluye. Para incluir uno, súbelo a YouTube y agrégalo como `{ tipo: "youtube", src: "ID" }`.

**Material original.** La carpeta `Penta UC/` tiene 4,2 GB de fotos y videos en bruto más los programas de cada curso. Está excluida del repositorio a propósito: es el archivo de trabajo, no se publica.

### Cambiar un proyecto

Cada proyecto es un objeto dentro de `proyectos`:

```js
{
  id: "salas-maker",           // aparece en la URL: proyecto.html?id=salas-maker
  titulo: "Salas Maker",
  cliente: "Ideo Maker",
  anio: "2022 — 2024",
  tags: ["Diseño de servicios", "FabLab"],
  resumen: "Una línea que describe el proyecto.",
  img: "assets/img/salas-maker.jpg",   // vacío "" = marcador gris
  bloques: [ ... ]
}
```

### Bloques de un caso de estudio

`bloques` es la secuencia del caso, de arriba a abajo. Hay cuatro tipos:

| tipo | uso |
|---|---|
| `texto` | Un párrafo. Con `titulo` agrega un subtítulo encima. |
| `imagen` | `valor` es la ruta de la imagen, `pie` el texto bajo ella. |
| `lista` | `valor` es un array de strings. Ideal para "Mi rol". |
| `cita` | Frase destacada del cliente o dato de impacto. |

### Agregar un proyecto nuevo

Copia un objeto completo de `proyectos`, cámbiale el `id` (sin espacios ni tildes) y pégalo en la posición que quieras. El enlace "Siguiente proyecto" se encadena solo. El orden dentro del catálogo no depende del array: lo define el año.

## Imágenes

Mientras `img` esté vacío se dibuja un marcador gris rayado con el nombre del proyecto. Para reemplazarlo:

1. Guarda la foto en `assets/img/` (formato 4:3, alrededor de 1600×1200 px, JPG o WebP).
2. Pon la ruta en `img: "assets/img/nombre.jpg"`.

El CV va en `assets/files/cv-vicente-caceres.pdf` — la ruta ya está enlazada en el footer.

## Tema claro / oscuro

Por defecto sigue la preferencia del sistema. El botón "Tema" de la barra superior la invierte y guarda la elección en `localStorage`.

## Publicar

Al ser estático, sirve cualquier hosting:

- **Netlify / Vercel** — arrastra la carpeta a su interfaz, listo.
- **GitHub Pages** — sube la carpeta a un repo y activa Pages sobre la rama `main`.
- **Tu dominio actual** (japortafolio.com) — sube todos los archivos por FTP a la raíz del hosting.

No hay paso de compilación: lo que está en la carpeta es lo que se publica.
