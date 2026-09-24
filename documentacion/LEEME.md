# Documentación del proyecto

Qué hay en esta carpeta y para qué sirve cada cosa.

**Actualizado al 24 de septiembre de 2026.**

| Archivo | Para qué | Para quién |
|---|---|---|
| [`PROYECTO.md`](PROYECTO.md) | Traspaso técnico completo. Arquitectura y por qué es así, mapa de archivos, cómo agregar contenido, reglas de privacidad, qué hay instalado, y las trampas conocidas | Otra IA, otra persona, o Vicente en seis meses |
| [`Proyecto-portafolio.docx`](Proyecto-portafolio.docx) | Estado del proyecto, hallazgos de la investigación, referentes, plan por fases y objetivos | Para leer o mandar. Tiene espacio para anotar la próxima actualización |
| [`linea-base-2026-09-20.md`](linea-base-2026-09-20.md) | La medición del día en que el sitio empezó a entregar HTML de verdad. Búsqueda web y respuestas de tres IA, con el montaje para repetirla | Se compara contra la próxima medición |
| [`Ideo-Maker-posicionamiento.docx`](Ideo-Maker-posicionamiento.docx) | Diagnóstico y pasos para Ideo Maker SPA, a partir de la misma medición | Para mandar a Ideo Maker |
| [`casos-ideo-maker.md`](casos-ideo-maker.md) | El trabajo en Ideo Maker desde 2022, ordenado en candidatos a proyecto, con lo que falta para subir cada uno | Vicente, para decidir qué se publica (Fase C del plan) |
| [`oportunidades-2026.md`](oportunidades-2026.md) | Extra del plan: convocatorias docentes, investigación y cargos públicos y privados, revisadas el 24 de septiembre de 2026, con la meta de postular a tres universidades en octubre | Vicente |

Los pendientes vivos no están acá: están en [`../FALTANTES.md`](../FALTANTES.md), en la raíz.

---

## Cómo regenerar los documentos Word

Los `.docx` se generan con Python, no se editan a mano, para que se puedan rehacer con datos
nuevos sin perder el formato.

```bash
python tools/doc_proyecto.py
python tools/doc_ideomaker.py
```

El formato de los dos vive en [`../tools/formato_docx.py`](../tools/formato_docx.py): colores,
títulos, tablas, recuadros y renglones para escribir a mano. Cada documento pone solo su
contenido. Ahí están resueltas las tres trampas de python-docx que costaron descubrir: la
rejilla de la tabla, los `Length` que al restarse pierden `.twips`, y la negrita a mitad de
párrafo.

## Cómo revisarlos antes de entregarlos

En esta máquina no hay Word. Con LibreOffice, que sí está, se convierte a PDF y se rasteriza
con PyMuPDF para poder mirarlo página por página:

```bash
"/c/Program Files/LibreOffice/program/soffice.exe" --headless --convert-to pdf --outdir . archivo.docx
```

```bash
python -c "import pymupdf; d=pymupdf.open('archivo.pdf'); [p.get_pixmap(dpi=105).save('pg-%d.png'%i) for i,p in enumerate(d,1)]"
```

No saltarse este paso. Los dos documentos de esta carpeta tenían errores que solo se vieron al
mirarlos: anchos de columna que no se aplicaban y asteriscos de markdown a la vista.

---

## La medición, en una línea

Al 20 de septiembre de 2026, preguntando a ChatGPT, Gemini y Perplexity lo que preguntaría un
cliente: **Vicente no aparece en ninguna consulta de mercado.** Sí aparece al preguntar por su
nombre, pero cada herramienta lee una fuente distinta y devuelve un Vicente distinto, y una lo
describe como estudiante de diseño. **Ninguna leyó el sitio nuevo.**

El problema no era la invisibilidad: era información equivocada circulando. El detalle
pregunta por pregunta está en el archivo de línea base.
