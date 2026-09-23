# Faltantes

Todo lo que el sitio **no** dice porque todavía no lo sabemos. Antes esto vivía como texto
`PLACEHOLDER` dentro de las propias páginas, a la vista de cualquiera que entrara. Ahora vive acá.

Ninguna de estas líneas se publica. Cuando tengas el dato, se escribe en `js/data.js` y se borra
de esta lista.

Última revisión: 22 de septiembre de 2026 (noche).

---

## 1. Servicios

Quedaste de mandarme la lista. Hoy el sitio ofrece cuatro: diseño de servicios, creación de
FabLabs, docencia y STEAM, y fabricación digital.

Mirando tu propio catálogo, hay tres cosas que haces y que no aparecen como servicio: el
desarrollo de aplicaciones y plataformas web (diez proyectos, lo que más peso tiene hoy), la
fotografía (OPS y HAALUR) y el diseño editorial y de información (Plan Nacional RAM, Eloísa).
Dime cuáles van y con qué palabras, o pásame las tuyas.

---

## 2. Archivos que no existen todavía

Los dos botones de descarga están programados pero no se dibujan mientras no haya archivo, así
que por ahora no hay ningún enlace roto. Para activarlos: deja el PDF en `assets/files/` y pega
el nombre en `descargas` dentro de `js/data.js`.

| Qué | Estado |
|---|---|
| CV en PDF | Listo. `assets/files/cv-vicente-caceres-2025.pdf` |
| Portafolio en PDF | Falta. Déjalo en `assets/files/portafolio-vicente-caceres.pdf` |

El CV publicado **no es el mismo archivo** que tienes en el escritorio. Al original se le
borraron cuatro datos que no pueden quedar a descarga libre: RUT, dirección, fecha de nacimiento
y WhatsApp. Es redacción de verdad, no un rectángulo encima: el texto no se puede copiar ni
extraer. Quedan huecos visibles donde estaban esas líneas, y también se fue la etiqueta
"Portafolio:" porque compartía renglón con el RUT.

Cuando reexportes el CV desde Illustrator sin esas líneas, el reemplazo queda sin huecos.
**Al hacerlo, revisa que el archivo nuevo tampoco traiga esos datos antes de subirlo.**

El CV con los datos completos está en la raíz del proyecto y lo cubre la regla `/CV_*.pdf` del
`.gitignore`, para que no se suba por accidente.

---

## 3. Repositorios: los diez son privados

Cada proyecto web ya tiene su enlace a GitHub escrito en `js/data.js`, y la ficha sabe mostrarlo.
Pero los diez repositorios son privados: comprobado uno por uno, todos responden 404 a quien no
sea tú. Un enlace así no sirve de nada en un portafolio, así que el enlace está apagado con
`repoPublico: false`.

Cuando hagas público un repositorio, cambia ese `false` por `true` y el botón aparece solo.

| Proyecto | Repositorio |
|---|---|
| SKU | `Fewiyo/sku` |
| AnsioSOS | `Fewiyo/ansiosos` |
| App Escalada | `Fewiyo/escalada` |
| Granada | `Fewiyo/granada` |
| Maker Lab | `Fewiyo/maker-lab` |
| esdiseño | `Fewiyo/esdiseno` |
| Mercado Público | `Fewiyo/mercado-publico` |
| Estudiar Futuro | `Fewiyo/estudiar-futuro` |
| Reporte Web Diseño | `Fewiyo/reporte-web-diseno` |
| Proyecto IoT 01 | `Fewiyo/proyecto-iot-01` |

---

## 4. Datos que faltan, proyecto por proyecto

**Sala Maker STEAM.** En qué establecimiento se implementó y en qué fecha. Qué quedó operando
después. La página hoy muestra los renders y la foto de la sala construida, sin decir dónde es.

**Plan Nacional RAM.** Para qué institución se hizo y qué más componía el encargo además del
documento.

**Kits educativos Bicho-bot.** Para qué nivel se diseñó, qué electrónica lleva, si llegó a
producirse y en cuántos colegios se usó. Del proyecto solo se conserva el packaging, y eso es lo
único que la ficha afirma hoy.

**Eloísa.** El año, 2019, está deducido de la fecha de publicación en Behance (enero de 2020).
Falta confirmarlo, saber en qué CESFAM se probó, si fue en equipo y con quiénes, y si el
material quedó en uso.

**Al tablero y Robots (curso 7).** A qué nivel se impartió. El campo está vacío, así que la ficha
simplemente no muestra esa fila. Faltan también las sesiones del temario y los resultados, porque
el curso está en marcha.

**SKU.** Para qué inventario se hizo, si está en uso y si llegó a desplegarse.

---

## 5. Proyectos escondidos hasta que tengan imagen

**SKU** y **Proyecto IoT 01** están fuera del catálogo, con `oculto: true` en `js/data.js`.
Tenían tres imágenes cada uno, pero no eran del proyecto: eran marcadores grises con una nota
escrita encima pidiéndote la captura. Se borraron, y las fichas quedaron sin nada que mostrar.

Sacarlas del catálogo no las borra. La ficha sigue viva y se puede abrir directo
(`proyecto-ia.html?id=sku`), para que puedas revisarla mientras tanto. Lo que no hace es aparecer
en la grilla, en el filtro ni en el enlace de "siguiente proyecto".

Para que vuelvan: borra la línea `oculto: true` del proyecto, o ponla en `false`.

SKU necesita login y base de datos para mostrar algo, así que la captura tiene que salir de ti.

**Registro fotográfico (OPS).** Salió del catálogo: no tenía ni una imagen ni un texto propio, solo
marcadores. El dato no se perdió, sigue en tu trayectoria de la página Historia como
"2023 · Fotógrafo · Organización Panamericana de la Salud". Si aparecen las fotos, vuelve a
entrar como proyecto.

---

## 6. El retrato quedó, pero en baja resolución

**Vicente dijo el 21 de septiembre de 2026 que iba a cambiar la foto, en el sitio y en
LinkedIn.** Ya lo hizo en los dos lados, con la misma foto: primer plano en el taller, con el
panel perforado y las herramientas atrás. Se cambió a mano en LinkedIn (foto de perfil subida
ahí el 20 de septiembre) y `assets/img/retrato.jpg` se reemplazó el 21 con esa misma foto,
descargada desde `Foto perfil/1751401741553.jpg`. Los tres lugares muestran ahora la misma cara:

1. **La página Historia**, que es donde alguien decide si te escribe.
2. **La vista previa al compartir el enlace** (`og:image`). Al pegar japortafolio.com en WhatsApp
   o LinkedIn, esa foto es la miniatura.
3. **La tarjeta de "Destacado" en LinkedIn**, creada el 21 de septiembre y modificada ese mismo
   día para que tome la foto nueva. Es lo primero que ve quien entra a tu perfil, y toma la
   imagen del `og:image` del sitio.

Queda un pendiente de calidad, no de identidad. El archivo que se instaló es la copia que
LinkedIn sirve de tu foto de perfil, y esa copia mide **400×400**, no 1200×1200 como la que
reemplazó. En la página Historia se nota poco, porque se dibuja a 300 px. En el `og:image` sí
importa: LinkedIn suele mostrar la tarjeta de Destacado en formato chico cuando la imagen de
origen no llega a 1200 px.

**Para cerrar esto del todo:** consigue el archivo grande que subiste a LinkedIn (Configuración,
Privacidad de los datos, Obtener una copia de tus datos) y reemplaza `assets/img/retrato.jpg`
por esa versión, cuadrada, 1200×1200, sin metadatos. La ruta no cambia, así que no hace falta
tocar `js/data.js` ni volver a construir el sitio: basta con pisar el archivo. Si para entonces
la tarjeta de Destacado no toma la imagen nueva sola, se repite lo que ya funcionó el 21: se
borra y se vuelve a crear.

---

## 7. La página Historia

Los tres párrafos de la bio eran instrucciones para ti mismo, no texto publicable. Los escribí a
partir de lo que el propio sitio ya afirma: tu carrera en la UDP, Ideo Maker entre 2022 y 2024,
los siete cursos de PENTA UC, Converso, la OPS y los proyectos web.

**Léelos y corrígelos.** Son datos verificables, pero la voz es una propuesta mía y esa página
habla de ti en primera persona. Es lo único del sitio que escribí poniéndote palabras en la boca.

---

## 8. Pendiente de otra conversación

- **La URL del blog.** La pestaña existe, atenuada, hasta que pegues la dirección en
  `SITE.blog.url`.
- **Las fotos con menores** de Congreso Futuro y Eloísa, esperando que confirmes si tu
  instrucción de usar las fotos con personas las incluye. Está explicado en
  `Otras pegas/LEEME.md`.
- **Revisar el sitemap en Search Console.** Se envió el 21 de septiembre y quedó en "No se ha
  podido obtener", que es el estado normal recién enviado. El archivo está bien: responde 200,
  es XML válido y trae las 24 URLs. Si en un par de días sigue igual, ahí sí hay algo que mirar.
