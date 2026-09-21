# -*- coding: utf-8 -*-
"""
Genera documentacion/Ideo-Maker-posicionamiento.docx

Documento dirigido a Ideo Maker SPA. Todo lo que afirma sale de la
medicion del 20 de septiembre de 2026 y del diagnostico de su propio
sitio, no de opiniones. Regenerable con:

    python tools/doc_ideomaker.py
"""
import os
from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALIDA = os.path.join(RAIZ, "documentacion", "Ideo-Maker-posicionamiento.docx")

TINTA = RGBColor(0x11, 0x11, 0x11)
SUAVE = RGBColor(0x5A, 0x5A, 0x5A)
ACENTO = RGBColor(0x1F, 0x4E, 0x5F)
ALERTA = RGBColor(0x9B, 0x2C, 0x1F)
ACENTO_HEX = "1F4E5F"
FONDO_HEX = "F2F1EF"
LINEA_HEX = "D8D6D2"
FUENTE = "Segoe UI"
FECHA = "21 de septiembre de 2026"


# ---------------- utilidades de formato ----------------

def sombrear(celda, hexc):
    tc = celda._tc.get_or_add_tcPr()
    e = OxmlElement("w:shd")
    e.set(qn("w:val"), "clear"); e.set(qn("w:color"), "auto"); e.set(qn("w:fill"), hexc)
    tc.append(e)


def bordes_celda(celda, arriba=None, abajo=None, izq=None, der=None):
    tc = celda._tc.get_or_add_tcPr()
    marco = OxmlElement("w:tcBorders")
    for nombre, spec in (("top", arriba), ("bottom", abajo), ("left", izq), ("right", der)):
        b = OxmlElement("w:" + nombre)
        if spec:
            b.set(qn("w:val"), "single"); b.set(qn("w:sz"), str(spec[0])); b.set(qn("w:color"), spec[1])
        else:
            b.set(qn("w:val"), "nil")
        marco.append(b)
    tc.append(marco)


def borde_inferior(par, grosor, color):
    pPr = par._p.get_or_add_pPr()
    marco = OxmlElement("w:pBdr")
    b = OxmlElement("w:bottom")
    b.set(qn("w:val"), "single"); b.set(qn("w:sz"), str(grosor))
    b.set(qn("w:space"), "6"); b.set(qn("w:color"), color)
    marco.append(b); pPr.append(marco)


def tracking(run, v):
    rPr = run._element.get_or_add_rPr()
    e = OxmlElement("w:spacing"); e.set(qn("w:val"), str(v)); rPr.append(e)


def margenes_celda(celda, a=70, b=70, i=120, d=120):
    tc = celda._tc.get_or_add_tcPr()
    m = OxmlElement("w:tcMar")
    for nombre, valor in (("top", a), ("bottom", b), ("left", i), ("right", d)):
        el = OxmlElement("w:" + nombre); el.set(qn("w:w"), str(valor)); el.set(qn("w:type"), "dxa")
        m.append(el)
    tc.append(m)


def fijar_anchos(t, anchos):
    """Word usa la rejilla de la tabla, no el ancho de celda."""
    tbl = t._tbl
    lay = OxmlElement("w:tblLayout"); lay.set(qn("w:type"), "fixed")
    tbl.tblPr.append(lay)
    vieja = tbl.find(qn("w:tblGrid"))
    if vieja is not None:
        tbl.remove(vieja)
    grid = OxmlElement("w:tblGrid")
    for a in anchos:
        gc = OxmlElement("w:gridCol")
        tw = a.twips if hasattr(a, "twips") else int(a) // 635
        gc.set(qn("w:w"), str(int(tw))); grid.append(gc)
    tbl.tblPr.addnext(grid)
    for fila in t.rows:
        for c, a in zip(fila.cells, anchos):
            c.width = a


# ---------------- documento ----------------

doc = Document()
doc.core_properties.title = "Ideo Maker — posicionamiento"
doc.core_properties.author = "Vicente Cáceres Farías"

sec = doc.sections[0]
for lado in ("top_margin", "bottom_margin", "left_margin", "right_margin"):
    setattr(sec, lado, Cm(1.9))
ANCHO = sec.page_width - sec.left_margin - sec.right_margin

normal = doc.styles["Normal"]
normal.font.name = FUENTE
normal.font.size = Pt(10)
normal.font.color.rgb = TINTA
normal._element.rPr.rFonts.set(qn("w:eastAsia"), FUENTE)
normal.paragraph_format.space_after = Pt(6)
normal.paragraph_format.line_spacing = 1.20


def p(texto="", size=10, color=TINTA, bold=False, antes=0, despues=6,
      align=None, caps=False, track=None):
    par = doc.add_paragraph()
    par.paragraph_format.space_before = Pt(antes)
    par.paragraph_format.space_after = Pt(despues)
    if align is not None:
        par.alignment = align
    r = par.add_run(texto)
    r.font.name = FUENTE; r.font.size = Pt(size); r.font.color.rgb = color
    r.bold = bold; r.font.all_caps = caps
    if track:
        tracking(r, track)
    return par


def pm(texto, antes=0, despues=6):
    """Como p(), pero los tramos entre ** van en negrita en vez de salir
    con los asteriscos a la vista."""
    par = doc.add_paragraph()
    par.paragraph_format.space_before = Pt(antes)
    par.paragraph_format.space_after = Pt(despues)
    for i, trozo in enumerate(texto.split("**")):
        if not trozo:
            continue
        r = par.add_run(trozo)
        r.font.name = FUENTE; r.font.size = Pt(10); r.font.color.rgb = TINTA
        r.bold = (i % 2 == 1)
    return par


def h1(texto):
    par = p(texto, size=15, bold=True, antes=20, despues=3)
    borde_inferior(par, 12, ACENTO_HEX)
    return par


def h2(texto):
    return p(texto, size=11.5, bold=True, color=ACENTO, antes=13, despues=4)


def vinieta(texto, negrita=None, color=TINTA):
    par = doc.add_paragraph()
    par.paragraph_format.left_indent = Cm(0.62)
    par.paragraph_format.first_line_indent = Cm(-0.38)
    par.paragraph_format.space_after = Pt(3.5)
    g = par.add_run("—  ")
    g.font.name = FUENTE; g.font.size = Pt(10); g.font.color.rgb = ACENTO
    if negrita:
        rb = par.add_run(negrita)
        rb.font.name = FUENTE; rb.font.size = Pt(10); rb.bold = True; rb.font.color.rgb = TINTA
    r = par.add_run(texto)
    r.font.name = FUENTE; r.font.size = Pt(10); r.font.color.rgb = color
    return par


def paso(n, titulo, texto):
    par = doc.add_paragraph()
    par.paragraph_format.left_indent = Cm(0.95)
    par.paragraph_format.first_line_indent = Cm(-0.95)
    par.paragraph_format.space_before = Pt(8)
    par.paragraph_format.space_after = Pt(2)
    rn = par.add_run("%d.  " % n)
    rn.font.name = FUENTE; rn.font.size = Pt(11); rn.bold = True; rn.font.color.rgb = ACENTO
    rt = par.add_run(titulo)
    rt.font.name = FUENTE; rt.font.size = Pt(11); rt.bold = True; rt.font.color.rgb = TINTA
    par2 = doc.add_paragraph()
    par2.paragraph_format.left_indent = Cm(0.95)
    par2.paragraph_format.space_after = Pt(6)
    r2 = par2.add_run(texto)
    r2.font.name = FUENTE; r2.font.size = Pt(10); r2.font.color.rgb = TINTA


def tabla(filas, anchos, encabezado=True, alerta_col=None):
    t = doc.add_table(rows=0, cols=len(anchos))
    t.alignment = WD_TABLE_ALIGNMENT.LEFT
    t.autofit = False
    for i, fila in enumerate(filas):
        celdas = t.add_row().cells
        for j, texto in enumerate(fila):
            c = celdas[j]
            margenes_celda(c)
            bordes_celda(c, arriba=(4, LINEA_HEX), abajo=(4, LINEA_HEX))
            if encabezado and i == 0:
                sombrear(c, FONDO_HEX)
            par = c.paragraphs[0]
            par.paragraph_format.space_after = Pt(0)
            par.paragraph_format.space_before = Pt(0)
            par.paragraph_format.line_spacing = 1.12
            r = par.add_run(texto)
            r.font.name = FUENTE; r.font.size = Pt(9)
            es_tit = encabezado and i == 0
            r.bold = es_tit
            if alerta_col is not None and j == alerta_col and i > 0 and texto.strip().lower().startswith("no"):
                r.font.color.rgb = ALERTA; r.bold = True
            else:
                r.font.color.rgb = TINTA if (es_tit or j == 0) else SUAVE
    fijar_anchos(t, anchos)
    p(despues=4)
    return t


def recuadro(titulo, texto, color_barra=ACENTO_HEX):
    t = doc.add_table(rows=1, cols=1)
    t.autofit = False
    c = t.rows[0].cells[0]
    sombrear(c, FONDO_HEX)
    margenes_celda(c, 160, 160, 200, 200)
    bordes_celda(c, izq=(18, color_barra))
    par = c.paragraphs[0]; par.paragraph_format.space_after = Pt(3)
    r = par.add_run(titulo)
    r.font.name = FUENTE; r.font.size = Pt(10); r.bold = True; r.font.color.rgb = TINTA
    par2 = c.add_paragraph(); par2.paragraph_format.space_after = Pt(0)
    par2.paragraph_format.line_spacing = 1.18
    r2 = par2.add_run(texto)
    r2.font.name = FUENTE; r2.font.size = Pt(9.5); r2.font.color.rgb = SUAVE
    fijar_anchos(t, [ANCHO])
    p(despues=6)
    return t


def salto():
    doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)


C = Cm


# ================================ PORTADA ================================
p("NOTA INTERNA · IDEO MAKER SPA", size=8, bold=True, color=SUAVE, caps=True, track=120, despues=2)

par = doc.add_paragraph(); par.paragraph_format.space_after = Pt(2)
r = par.add_run("Cómo dejar de ser invisible")
r.font.name = FUENTE; r.font.size = Pt(26); r.bold = True; r.font.color.rgb = TINTA

par = doc.add_paragraph(); par.paragraph_format.space_after = Pt(9)
r = par.add_run("Diagnóstico medido y pasos concretos para aparecer en las búsquedas de su propio mercado")
r.font.name = FUENTE; r.font.size = Pt(13); r.font.color.rgb = SUAVE
borde_inferior(par, 18, ACENTO_HEX)

p("Preparado por Vicente Cáceres Farías  ·  " + FECHA, size=10, bold=True,
  color=ACENTO, antes=8, despues=14)

recuadro(
    "Qué es esto",
    "El 20 de septiembre le hice a ChatGPT, Gemini y Perplexity las preguntas que haría un "
    "sostenedor antes de contratarnos. Sin cuenta, en incógnito, seis preguntas por herramienta. "
    "Lo que sigue no es una opinión sobre marketing: es lo que esas herramientas respondieron, "
    "más el diagnóstico técnico de nuestro propio sitio. Lo levanto porque el resultado me "
    "sorprendió, porque tiene arreglo y porque no cuesta plata, solo trabajo.")

# ================================ LA MEDICIÓN ================================
h1("1. El resultado")

p("Se preguntó, palabra por palabra, lo que preguntaría alguien buscando un proveedor:")
vinieta("¿Quién implementa salas maker o FabLabs en colegios en Chile?")
vinieta("¿Quién hace robótica educativa para colegios en Chile?")

p("Las respuestas nombraron a decenas de actores. Ideo Maker apareció así:", antes=8)

tabla([
    ["Pregunta", "ChatGPT", "Gemini", "Perplexity"],
    ["Salas maker y FabLabs en colegios", "No", "Sí", "No"],
    ["Robótica educativa para colegios", "No", "No", "No"],
], [C(8.2), C(3.0), C(3.0), C(3.0)], alerta_col=None)

recuadro(
    "El dato que duele",
    "En la pregunta por robótica educativa, Ideo Maker no aparece en ninguna de las tres. "
    "La empresa se define a sí misma como «Ideo Maker SPA / Robótica Educativa»: es "
    "literalmente su rubro declarado, y en su propio rubro no la nombra nadie.",
    color_barra="9B2C1F")

p("Para dimensionarlo: en esa misma pregunta las tres herramientas nombraron, entre todas, "
  "unas 25 organizaciones distintas. Zenner, REBOT, EDU21, Healthy Education, MankeBots, "
  "CEDETEC, Arquimed, RoboLab, Prodelab, Fedusteam, Neoeduca, ERYPC, Positrónica, Makeblock "
  "Chile, Knight Robotics, TodoToner, School of Makers y más.", antes=8)

p("No es que el mercado sea difícil de entrar. Es que Ideo Maker es de los pocos que no está.",
  bold=True)

# ================================ DIAGNÓSTICO ================================
h1("2. Por qué pasa esto")

p("Revisé ideomaker.cl el 20 de septiembre. La buena noticia es que el sitio es WordPress, "
  "así que se lee sin problemas: entrega texto plano a los rastreadores, tiene sitemap y "
  "robots.txt. La infraestructura está. El problema es lo que hay adentro.")

h2("El blog tiene una sola entrada, y es «Hello world!»")

p("La publicación de ejemplo que WordPress crea al instalarse, nunca borrada, con fecha de "
  "marzo de 2023. Es la única entrada del blog en tres años.")

h2("No hay ni un proyecto documentado")

p("Ideo Maker ha instalado salas maker y programas en colegios de Atacama, Antofagasta, Taltal "
  "y Calama. En el sitio no hay una sola página que cuente ninguno de esos trabajos: ni qué "
  "colegio, ni qué se instaló, ni qué quedó funcionando después.")

p("Las páginas que sí existen son el catálogo de kits y la tienda.")

h2("El mapa del sitio manda a indexar el carro de compras")

p("De las 17 páginas declaradas en el sitemap, la mayoría no son contenido:")

tabla([
    ["En el sitemap hoy", "Qué es"],
    ["/cart/, /checkout/, /my-account/, /my-orders/", "Plomería de la tienda. No debería indexarse"],
    ["/dashboard/, /store-listing/", "Paneles internos"],
    ["/sample-page/", "Página de ejemplo de WordPress, nunca borrada"],
    ["/elementor-3037/, /elementor-2980/", "Borradores del editor que quedaron publicados"],
    ["/, /about/, /kits/, /kit-domotica/, /bibliografia-maker/, /contact/", "Contenido real. Seis páginas"],
], [C(8.6), C(8.6)])

p("Seis páginas de contenido real, y la mitad del mapa apuntando a formularios de compra.",
  antes=4)

h2("La portada dice muy poco")

p("Sin contar el menú, la portada entrega alrededor de 1.500 caracteres, y buena parte es la "
  "navegación repetida dos veces. Para comparar: una ficha de proyecto bien escrita entrega "
  "entre 2.500 y 4.000 caracteres ella sola.")

salto()

# ================================ LO QUE SÍ FUNCIONA ================================
h1("3. Lo único que sí está funcionando, y es la prueba")

p("Gemini fue la única que nombró a Ideo Maker. Y no citó el sitio: citó un PDF.")

recuadro(
    "Sala-MAKER-STEAM-Final.pdf",
    "Ese documento es la única pieza de Ideo Maker que una IA encontró y consideró digna de "
    "citar. Un solo archivo, subido una vez, explicando un trabajo real. Eso bastó para ser el "
    "único de los tres resultados donde la empresa aparece.")

pm("La lección está completa ahí adentro. **No hace falta más publicidad ni más catálogo: hace "
  "falta más documentación.** Un PDF suelto ya rinde. Diez páginas contando diez "
  "implementaciones rendirían mucho más, y a diferencia de un PDF se pueden actualizar, "
  "enlazar y medir.", antes=8)

h2("Y hay un hueco que nadie está llenando")

p("En dos de las tres preguntas, Perplexity terminó armando por su cuenta una guía para el "
  "comprador: qué debe incluir una implementación seria, y qué debe pedir un colegio en una "
  "propuesta. Mencionó diagnóstico curricular, protocolos de seguridad y ventilación, "
  "capacitación docente, reposición de piezas y costo anual de operación.")

pm("Tuvo que inventar esa estructura porque **no existe la página que la explique**. Ni de Ideo "
  "Maker ni de ninguno de los otros 24 proveedores.")

p("Quien la escriba se queda con la consulta que hace un sostenedor justo antes de firmar. Y "
  "el que mejor puede escribirla es quien ha estado en los dos lados: vendiendo la "
  "implementación y estando en la sala cuando se usa.", bold=True)

# ================================ PASOS ================================
h1("4. Qué hacer, en orden")

p("Ordenado por esfuerzo contra resultado. Los tres primeros son de una tarde.", color=SUAVE,
  despues=8)

paso(1, "Limpiar el mapa del sitio",
     "Sacar /cart/, /checkout/, /my-account/, /my-orders/, /dashboard/, /store-listing/, "
     "/sample-page/ y las dos páginas /elementor-XXXX/. Se hace desde el plugin All in One SEO, "
     "que ya está instalado. Hoy le están diciendo a Google y a las IA que lo importante del "
     "sitio es el carro de compras.")

paso(2, "Borrar «Hello world!»",
     "Es la única entrada del blog. Mientras esté, el blog comunica abandono.")

paso(3, "Convertir el PDF de la Sala Maker en una página web",
     "Es el activo que ya funciona, atrapado en el peor formato posible. Un PDF no se "
     "actualiza, no se enlaza por dentro, no se mide y se cita peor que una página. El mismo "
     "contenido como página rinde más desde el primer día.")

paso(4, "Publicar los proyectos, uno por página",
     "Atacama, Antofagasta, Taltal, Calama y los demás. Cada página con: qué establecimiento, "
     "en qué región, qué se instaló, cómo se capacitó a los docentes y qué quedó operando "
     "después. Con fotos. Si hay confidencialidad, se publica sin nombrar al colegio: la región "
     "y el alcance ya valen. Esto es lo que más mueve la aguja y es donde Ideo Maker tiene "
     "material que casi nadie tiene.")

paso(5, "Escribir la guía del comprador",
     "Cómo evaluar y contratar una sala maker o un programa de robótica sin que le vendan humo. "
     "Presupuesto realista, qué preguntar, qué exigir en seguridad, qué cuesta mantenerla al "
     "segundo año. Es la página que la IA tuvo que inventar dos veces por no encontrarla, y "
     "posiciona a quien la escribe como el que sabe, no como el que vende.")

paso(6, "Poner datos estructurados",
     "Marcar la organización, su ubicación y sus proyectos con schema.org. Es lo que las IA "
     "leen con más confianza y hoy el sitio no lo tiene. Se agrega con el mismo plugin de SEO.")

h2("Lo que NO hay que hacer")

vinieta("ya existe en el sitio, generado por el plugin, y no sirve solo. Es una señal más entre "
        "muchas, no un atajo: sin contenido detrás no hace nada.", "Confiar en el llms.txt: ")
vinieta("el problema no es que falten kits en la tienda. Es que no hay nada que leer.",
        "Sumar más productos: ")
vinieta("las respuestas de IA no se compran, se ganan siendo citable.", "Pagar publicidad: ")

salto()

# ================================ MEDICIÓN ================================
h1("5. Cómo saber si funcionó")

p("La medición del 20 de septiembre de 2026 queda como punto de partida. En tres meses se "
  "repite igual y se comparan los resultados.")

tabla([
    ["Regla", "Por qué"],
    ["ChatGPT, Gemini y Perplexity", "Usan índices distintos. Gemini es la única que ejecuta JavaScript"],
    ["Versión gratuita", "Es la que usa quien busca un proveedor"],
    ["Sin iniciar sesión, en incógnito", "Si no, se mide la memoria de la propia cuenta"],
    ["Cada pregunta en conversación nueva", "Si no, la IA recuerda lo anterior y contamina la respuesta"],
    ["Nunca los modos de investigación profunda", "Encuentran cualquier cosa. Dan un falso positivo"],
], [C(6.6), C(10.6)])

pm("La pregunta que importa es simple: **en la consulta por robótica educativa para colegios en "
  "Chile, ¿cuántas de las tres nombran a Ideo Maker?** Hoy: cero de tres.", antes=6)

# ================================ CIERRE ================================
h1("6. Por qué levanto esto")

p("Escribo esto desde adentro, como Director de Investigación, Desarrollo e Innovación. Buena "
  "parte de los proyectos que este documento propone publicar son trabajos en los que "
  "participé, así que también me toca a mí escribirlos: no estoy pidiendo que otro haga la pega.")

pm("Y digo de frente que tengo un interés paralelo: **estoy haciendo exactamente lo mismo con "
   "mi propio portafolio.** En esa misma medición yo aparezco cero de doce, igual que la "
   "empresa. No compiten: se refuerzan. La empresa demuestra que el trabajo existe y a qué "
   "escala; las personas demuestran quién lo hizo y cómo. Un sostenedor que busca proveedor "
   "quiere ver las dos cosas, y hoy no encuentra ninguna.")

pm("Hay un dato de la medición que lo ilustra mejor que cualquier argumento: **Patricia Ramírez, "
  "cofundadora de Ideo Maker, sí aparece nombrada como referente del movimiento maker chileno.** "
  "La empresa, en su propio rubro, no. La diferencia entre estar y no estar no es el trabajo "
  "realizado: es si alguien puede leerlo.")

recuadro(
    "En una frase",
    "Ideo Maker tiene el trabajo hecho y no tiene dónde leerlo. Los competidores que aparecen "
    "no necesariamente hacen mejores salas maker: simplemente las cuentan. Arreglar eso cuesta "
    "unas semanas de escritura y cero inversión en publicidad.")

par = doc.add_paragraph()
par.paragraph_format.space_before = Pt(16)
par.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = par.add_run("Medición del 20 de septiembre de 2026  ·  Diagnóstico de ideomaker.cl del mismo día  ·  "
                "Tengo los datos completos y el detalle por pregunta, por si alguien los quiere revisar")
r.font.name = FUENTE; r.font.size = Pt(8); r.font.color.rgb = SUAVE

doc.save(SALIDA)
print("escrito:", SALIDA)
