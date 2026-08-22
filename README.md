# Portafolio — Vicente Cáceres Farías

Sitio estático (HTML + CSS + JS puro, sin dependencias ni build). Construido sobre las medidas reales de [danielsun.space](https://danielsun.space).

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
| `--grid-op` | 0.06 | Intensidad de la cuadrícula de fondo |

**Cuadrícula de fondo:** papel milimetrado de 8,5 px al 6% de opacidad, dibujado con un SVG en `--grid-img` y repetido sobre toda la altura de la página. En modo oscuro las líneas se invierten a blanco.

**Rejilla de proyectos:** una tarjeta ancha (16:9), luego dos en pareja (8:9), y así sucesivamente. El patrón lo genera `.card:nth-child(3n+1)`, así que se mantiene solo al agregar o quitar proyectos.

**Tipografía:** EB Garamond para titulares (64 px / 72 px, tracking −0.02em) y subtítulos (30 px / 40 px); Inter para interfaz y textos de servicio (16 px / 26 px).

## Cómo verlo

Abrir `index.html` directamente funciona, pero para que las rutas relativas se comporten igual que en producción conviene levantar un servidor:

```bash
python -m http.server 5173
```

Luego entra a `http://localhost:5173`.

## Estructura

```
index.html        Inicio: titular, proyectos, servicios, contacto
proyecto.html     Caso de estudio (recibe ?id=... del proyecto)
historia.html     Sobre mí, trayectoria e instituciones
css/style.css     Todo el estilo (tokens de color, tipografía, layout)
js/data.js        ← TODO EL CONTENIDO. Es el único archivo que editas.
js/main.js        Motor que arma las páginas desde data.js
assets/img/       Tus fotos de proyecto
assets/files/     Tu CV en PDF
```

## Cómo editar el contenido

Todo vive en [js/data.js](js/data.js). Los textos marcados con `PLACEHOLDER —` son los que tienes que reemplazar.

### Títulos de sección

El objeto `secciones` controla el encabezado de cada bloque del inicio. Si dejas `intro: ""` esa línea no se muestra.

```js
proyectos: {
  eyebrow: "01 / Trabajo seleccionado",
  titulo: "Proyectos que siguen funcionando cuando yo ya no estoy.",
  intro: ""
}
```

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

Copia un objeto completo de `proyectos`, cámbiale el `id` (sin espacios ni tildes) y pégalo en la posición que quieras. El orden del array es el orden en la grilla, y el enlace "Siguiente proyecto" se encadena solo.

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
