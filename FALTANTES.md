# Faltantes

Todo lo que el sitio **no** dice porque todavía no lo sabemos. Antes esto vivía como texto
`PLACEHOLDER` dentro de las propias páginas, a la vista de cualquiera que entrara. Ahora vive acá.

Ninguna de estas líneas se publica. Cuando tengas el dato, se escribe en `js/data.js` y se borra
de esta lista.

Última revisión: 26 de septiembre de 2026.

---

## 1. Servicios

Resuelto el 26 de septiembre de 2026: se sumaron aplicaciones y plataformas web, diseño editorial y de información, y fotografía. Son siete servicios.

---

## 2. Archivos que no existen todavía

Desde el 25 de septiembre de 2026 el sitio tiene tres CV (completo, profesional y académico),
generados desde `cv/*.html` y publicados en `assets/files/`, sin RUT, dirección, fecha de
nacimiento ni teléfono. El CV antiguo de 2025 se borró del servidor el 26 de septiembre de 2026.

| Qué | Estado |
|---|---|
| Portafolio en PDF | Falta. Déjalo en `assets/files/portafolio-vicente-caceres.pdf` y pégalo en `descargas` |

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

**Sala Maker STEAM.** Ya dice dónde: dos liceos, en Baquedano y en Sierra Gorda, región de
Antofagasta, y cuál fue tu rol. Falta el mes y qué quedó operando después. Hay documentos que
resumen el proyecto; si los pasas, salen más detalles.

**Plan Nacional RAM. Resuelto el 26 de septiembre de 2026:** para el Ministerio de Salud, con Converso como equipo externo; se imprimieron 500 copias. **Falta:** una foto real del librillo impreso, si Vicente encuentra alguna.

**Kits educativos Bicho-bot.** La ficha ya cuenta la historia completa, del robot de cartón de
2022 al kit de MDF de 2023. El montaje de la caja se reemplazó el 24 de septiembre por la foto
real, que apareció en la unidad compartida de Ideo Maker. Hay muchas más fotos del robot, y una selección
lista en `Ideo Maker/kits-educativos/seleccion/`. El nivel apareció en un cartel de Ideo Maker:
niñas y niños de 6 a 12 años, creado para la Corporación Cultural de Lo Barnechea. Falta
confirmarlo y la electrónica que lleva.

**Eloísa. RESUELTO el 26 de septiembre de 2026: primer semestre de 2018.** El año, 2019, está deducido de la fecha de publicación en Behance (enero de 2020).
Falta confirmarlo, saber en qué CESFAM se probó, si fue en equipo y con quiénes, y si el
material quedó en uso.

**Al tablero y Robots (curso 7). RESUELTO el 26 de septiembre de 2026: IV medio, 12 sesiones, segundo semestre de 2025.** A qué nivel se impartió. El campo está vacío, así que la ficha
simplemente no muestra esa fila. Faltan también las sesiones del temario y los resultados, porque
el curso está en marcha.

**SKU.** Se queda oculto por decisión de Vicente (26 de septiembre de 2026). No hace falta completar sus datos.

**HAALUR. Falta el equipo (pedido el 30 de septiembre de 2026).** La ficha no nombra a nadie del Equipo Solar UDP. Faltan los nombres, y si se puede, el rol de cada uno, para sumar una lista "Equipo" como en los proyectos de Ideo Maker. El proyecto es de la FAAD.

**Textos de las organizaciones del catálogo (publicados el 30 de septiembre de 2026 como borrador).** El de Ideo Maker lo entregó Vicente (pasado a tercera persona). Faltan por revisar y corregir, en `organizaciones` de `js/data.js`:
- **PENTA UC:** texto armado con noticias de uc.cl. Faltan sus redes (Instagram, LinkedIn); el sitio academiadetalentos.uc.cl bloqueó la lectura.
- **FAAD UDP:** texto tomado de faad.udp.cl. No tiene LinkedIn enlazado.
- **Converso:** no aparece en internet. Texto mínimo y sin enlaces; confirmar si tiene sitio o LinkedIn.
- **Proyectos propios:** texto propio, revisar el tono.
- **Cargos y fechas** de cada una (sobre todo "Profesor titular y creador de siete cursos", 2022 – 2025).

**Equipos de Ideo Maker que faltan.** Escuela Caracoles, Escuela Estación Baquedano, Congreso Futuro en tu comuna, Bicho-bot y MK-BOT todavía no tienen la lista "Equipo Ideo Maker".

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

**Bicho-bot.** Las fotos del sitio son prototipos. Falta la versión final del kit, con su caja final.

**CV. RESUELTO el 26 de septiembre de 2026:** la UDD fue IIT114A Taller de Exploración Tecnológica y Prototipado, como profesional de apoyo.

**Vista previa en WhatsApp. RESUELTO el 25 de septiembre de 2026** con `assets/img/compartir.jpg` (1200 × 630). Si se cambia el retrato, hay que rehacer esta imagen. Al compartir japortafolio.com, la foto se ve muy cerca (25 de septiembre de 2026). Es la imagen para compartir del inicio, que hoy usa `assets/img/retrato.jpg`. Hay que hacer una imagen propia de 1200 × 630, con el retrato más lejos o con la marca y el nombre.

**Aula Impulsa Taltal.** El fotógrafo oficial no sacó fotos de la sala terminada ni del equipo de Ideo Maker. Hay que buscar fotos propias del aula (y del equipo) para sumarlas a la ficha `aula-impulsa-taltal`. La portada es provisoria (la foto oficial "En el aula, durante la inauguración"): cambiarla por una foto del aula terminada cuando la haya.

**Canal Proyecto Ja (fase G, plan en `documentacion/canal-youtube.md`).**
- Crear el canal con proyectoja.edu@gmail.com, confirmar el usuario `@japortafolio` en YouTube y reservarlo en Instagram y LinkedIn.
- Confirmar el modelo de iPhone: el Boya BY-V2 es Lightning y no enchufa directo a un iPhone 15 o posterior.
- Construir la sección de blog en el sitio (`SITE.blog.url` sigue vacía; el blog vive dentro del sitio).
- Ajustar los temas de los videos del magíster al programa real y confirmar qué se puede mostrar.
