# Documentación del proyecto

Qué hay en esta carpeta y para qué sirve cada cosa.

**Actualizado al 21 de septiembre de 2026.**

| Archivo | Para qué | Para quién |
|---|---|---|
| [`PROYECTO.md`](PROYECTO.md) | Traspaso técnico completo. Arquitectura y por qué es así, mapa de archivos, cómo agregar contenido, reglas de privacidad, qué hay instalado, y las trampas conocidas | Otra IA, otra persona, o Vicente en seis meses |
| [`Proyecto-portafolio.docx`](Proyecto-portafolio.docx) | Estado del proyecto, hallazgos de la investigación, referentes, plan por fases y objetivos | Para leer o mandar. Tiene espacio para anotar la próxima actualización |
| [`linea-base-2026-09-20.md`](linea-base-2026-09-20.md) | La medición del día en que el sitio empezó a entregar HTML de verdad. Búsqueda web y respuestas de tres IA, con el montaje para repetirla | Se compara contra la próxima medición |
| [`Ideo-Maker-posicionamiento.docx`](Ideo-Maker-posicionamiento.docx) | Diagnóstico y pasos para Ideo Maker SPA, a partir de la misma medición | Para mandar a Ideo Maker |

Los pendientes vivos no están acá: están en [`../FALTANTES.md`](../FALTANTES.md), en la raíz.

---

## Cómo regenerar los documentos Word

Los `.docx` se generan con Python, no se editan a mano, para que se puedan rehacer con datos
nuevos sin perder el formato.

```bash
python tools/doc_ideomaker.py
```

*(El generador del documento de proyecto todavía vive fuera del repositorio. Cuando haya que
actualizarlo, conviene traerlo a `tools/` como este.)*

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
cliente: **Vicente aparece 0 de 12. Ideo Maker, 1 de 9.** El sitio nuevo no lo leyó ninguna.

El detalle y las conclusiones están en el archivo de línea base.
