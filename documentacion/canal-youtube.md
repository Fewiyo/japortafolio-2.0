# Canal de YouTube · Proyecto Ja

Fase G del plan del portafolio. Escrito el 1 de octubre de 2026. Es un proyecto aparte del portafolio, pero se apoya en él:
cada video tiene su entrada en el blog del sitio, y el sitio es el destino de todos los enlaces.

---

## 1. Para qué existe

Documentar en público dos cosas que Vicente ya está haciendo:

1. **El Magíster en Ciencias del Diseño (UAI):** cómo se cursa, cómo se investiga, cómo se escribe.
2. **Innovación e integración de IA:** probar herramientas reales en trabajo real, y contar qué
   funcionó y qué no.

Encaja con la posición que la medición del 20 de septiembre dejó vacía: **el practicante que
documenta**. Nadie la ocupa; Pedro Hepp estudia el fenómeno, Vicente lo hace.

## 2. Nombre y dirección

| | |
|---|---|
| Nombre del canal | **Proyecto Ja** |
| Usuario sugerido | `@japortafolio`, que coincide con el dominio |
| Alternativa | `@proyectoja`, si el primero estuviera tomado |

`youtube.com/@japortafolio` respondió 404 el 1 de octubre, lo que sugiere que está libre, pero
**no es concluyente**: se confirma al crear el canal. Hay que reservar el mismo usuario en
Instagram y LinkedIn (página) el mismo día, aunque no se usen todavía.

Por qué no el nombre propio: hay al menos dos colisiones con "Vicente Cáceres" (un futbolista y
un luchador). La marca Ja ya existe en el sitio y desambigua.

El apellido completo, "Vicente Cáceres Farías", va siempre en la descripción del canal y en cada
video, para que buscadores e IA lo asocien.

## 3. Formato

- **Hablando a cámara**, fondo maker, 5 a 8 minutos. Un tema por video.
- Un video por semana, grabado en tanda un solo día (ver rutina).
- Cada video termina con una sola invitación: la página del blog con el resumen y los enlaces.

## 4. Primeros diez videos

Ordenados para que el canal parta con lo que ya tienes material y suba de a poco.

| # | Video | Pilar |
|---|---|---|
| 1 | Qué es este canal y por qué documento lo que hago | Presentación |
| 2 | Por qué estudio el Magíster en Ciencias del Diseño | Magíster |
| 3 | Cómo es una semana real del magíster | Magíster |
| 4 | Cómo leo papers con IA sin que la IA piense por mí | Magíster + IA |
| 5 | De una idea a un tema de tesis: cómo lo voy acotando | Magíster |
| 6 | Armé mi portafolio completo con IA: qué hizo ella y qué hice yo | IA |
| 7 | Las diez apps que construí con IA, y las que no funcionaron | IA |
| 8 | Mi flujo para documentar un proceso (grabar, resumir, publicar) | Proceso |
| 9 | Qué aprendí en el primer mes de canal | Bitácora |
| 10 | Pregunta de la audiencia | Comunidad |

Los videos 6 y 7 son los más fuertes: el material ya existe y es verificable. Conviene
grabarlos temprano aunque el orden dice 6 y 7.

Los temas del magíster son provisorios. Hay que ajustarlos al programa real, sin adelantar
detalles que la universidad no haya hecho públicos.

## 5. Cada video, una página

El plan del portafolio ya lo decía: el video se hunde en el feed en tres días y la página
queda. Por video:

1. Entrada en el blog con el resumen escrito, las fuentes y los enlaces mencionados.
2. El video incrustado arriba.
3. En la descripción de YouTube, el enlace a esa entrada.

**Falta construir el blog.** La URL de `SITE.blog.url` sigue vacía. Como se decidió que vive
dentro del sitio, hay que sumar una sección de entradas al generador (`tools/construir.py`),
con su página índice y su versión en inglés si se quiere. Es el primer trabajo técnico de esto.

## 6. Equipo y edición

**Micrófonos: Boya BY-V2 (Lightning).** El receptor conecta por Lightning, así que sirve en
iPhones con ese puerto. **Si el celular es un iPhone 15 o posterior (USB-C), el receptor no
enchufa directo** y hace falta un adaptador o un modelo USB-C. Conviene confirmar el modelo
antes del primer día.

Buenas prácticas para el primer video:
- Un transmisor por persona, en el cuello, a unos 15 cm de la boca.
- Prueba de 10 segundos antes de cada tanda y se escucha con audífonos.
- Cámara trasera del celular, no la frontal.
- El audio malo espanta más que la imagen mala.

**Edición: Premiere** para el corte. Es lo correcto para video hablado.

**Higgsfield** ([higgsfield.ai/es](https://higgsfield.ai/es)): es una plataforma de **generación**
de video e imágenes con IA, no un editor. Según su propia página, sirve para crear clips desde
texto, efectos visuales y mejora de resolución; no corta ni monta video grabado. Se revisó solo la
página principal, no sus precios. Sirve para intros, fondos o ilustraciones. Dos precauciones:
- No usarla sobre tu cara ni para simular escenas de trabajo. El canal vale por ser real.
- Si se usa material generado, decirlo en el video.

## 7. Rutina semanal

| Día | Qué |
|---|---|
| Lunes | Elegir el tema y escribir cinco puntos, no un guion |
| Sábado | Grabar uno o dos videos en tanda |
| Domingo | Editar y escribir la entrada del blog |
| Martes siguiente | Publicar |

Si una semana no alcanza, se sigue con la siguiente. La regularidad pesa más que la frecuencia.

## 8. Reglas que se mantienen

- Ninguna cara de menor de edad.
- Caras de adultos solo con su permiso, sobre todo compañeros y profesores del magíster.
- No mostrar material de la universidad ni de Ideo Maker que no sea público.
- Dos clientes de Ideo Maker no se nombran sin confirmar qué se puede publicar.

## 9. Qué sigue, en orden

1. Confirmar el usuario `@japortafolio` y crear el canal, con el mismo nombre en las otras redes.
2. Confirmar el modelo de iPhone y el receptor del micrófono.
3. Grabar los videos 1, 2 y 6.
4. Construir la sección de blog en el sitio antes de publicar el primero.
5. Medir en diciembre, junto con la repetición de la línea base.
