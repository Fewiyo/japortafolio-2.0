# -*- coding: utf-8 -*-
"""
Genera documentacion/Proyecto-portafolio.docx

Estado del proyecto, investigacion, medicion y plan. Regenerable con:

    python tools/doc_proyecto.py
"""
import os, sys
from docx.shared import Cm

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(AQUI)
sys.path.insert(0, AQUI)
from formato_docx import Doc, SUAVE, ACENTO, ALERTA_HEX  # noqa: E402

SALIDA = os.path.join(RAIZ, "documentacion", "Proyecto-portafolio.docx")
FECHA = "21 de septiembre de 2026"
C = Cm

d = Doc("Proyecto Portafolio — estado y plan")
A = d.ancho

# ============================== PORTADA ==============================
d.portada("PORTAFOLIO", "Vicente Cáceres Farías",
          "Estado del proyecto, investigación y plan de trabajo",
          "Actualizado al " + FECHA)

d.recuadro(
    "De qué se trata este documento",
    "El portafolio dejó de ser solo un sitio con proyectos: es la base de un sistema de "
    "documentación que va a sostener también el blog, los cursos y, más adelante, la venta. "
    "Acá está el estado real a la fecha, lo que arrojaron la investigación y la medición, y "
    "hacia dónde va. La documentación técnica, para retomar el trabajo desde cero o desde otra "
    "IA, está en PROYECTO.md, en esta misma carpeta.")

# ============================== ENLACES ==============================
d.h1("Enlaces")
d.tabla([
    ["Sitio en línea", "https://fewiyo.github.io/japortafolio-2.0/"],
    ["Repositorio", "https://github.com/Fewiyo/japortafolio-2.0"],
    ["Dominio propio", "japortafolio.com — hoy sirve el sitio ANTIGUO. Migración pendiente"],
    ["En el disco", "C:\\Users\\vicen\\Documents\\Ia\\portafolio"],
    ["Pendientes vivos", "FALTANTES.md, en la raíz"],
    ["Documentación técnica", "documentacion/PROYECTO.md"],
    ["La medición completa", "documentacion/linea-base-2026-09-20.md"],
], [C(4.6), C(12.6)], encabezado=False)

# ============================== ESTADO ==============================
d.h1("Estado actual")
d.p("El catálogo tiene 22 entradas visibles. Dos fichas están escondidas a propósito porque "
    "todavía no tienen imágenes propias.", color=SUAVE, despues=8)

d.tabla([
    ["Contenido", "Cantidad", "Detalle"],
    ["Proyectos", "7", "HAALUR, Sala Maker STEAM, Plan Nacional RAM, Congreso Futuro, Bicho-bot, AnsioSOS, Eloísa"],
    ["Cursos PENTA UC", "7", "Todos de creación propia: propuesta, programa, metodología y material"],
    ["Apps y plataformas", "8 de 10", "SKU y Proyecto IoT 01 escondidas hasta tener capturas"],
    ["Trayectoria", "12 líneas", "Actualizada con el CV 2025"],
    ["Servicios", "4", "Faltan los que Vicente va a definir"],
], [C(4.3), C(2.4), C(10.5)])

d.etiqueta("Lo que se resolvió el 20 de septiembre")
d.vinieta("cada página entregaba cero caracteres de texto a quien no ejecuta JavaScript. Hoy "
          "entrega entre 2.700 y 4.000.", "El problema de fondo: ")
d.vinieta("26 páginas con dirección propia, sitemap, robots.txt y datos estructurados.")
d.vinieta("la marca Jã en la barra y el favicon, tipografía Libre Franklin, y el CV en PDF sin "
          "datos personales.")

d.salto()

# ============================== LA MEDICIÓN ==============================
d.h1("La medición del 20 de septiembre")
d.p("Se le preguntó a ChatGPT, Gemini y Perplexity lo que preguntaría un cliente. Sin cuenta, "
    "en incógnito. Doce respuestas útiles.", color=SUAVE, despues=8)

d.tabla([
    ["Pregunta", "¿Aparece Vicente?"],
    ["¿Quién implementa salas maker o FabLabs en colegios en Chile?", "0 de 3"],
    ["¿Quién hace robótica educativa para colegios en Chile?", "0 de 3"],
    ["¿Quién es Vicente Cáceres Farías?", "3 de 3, pero mal"],
    ["¿Cuáles son los referentes del movimiento maker en Chile?", "0 de 3"],
], [C(12.2), C(5.0)])

d.h2("1. No es invisibilidad: es información equivocada")
d.p("Las tres lo encuentran. Pero cada una lee una fuente distinta y devuelve un Vicente "
    "distinto, y ninguna leyó el portafolio.")
d.tabla([
    ["Herramienta", "Fuente que usó", "Qué Vicente describe"],
    ["Gemini", "El CV en PDF del sitio antiguo", "Un estudiante de diseño, en presente"],
    ["ChatGPT", "LinkedIn", "Director de I+D, docente UC, Atacama Biomaterials"],
    ["Perplexity", "LinkedIn y el repositorio de GitHub", "Director de I+D, y la línea del portafolio"],
], [C(3.4), C(6.4), C(7.4)])

d.pm("Corregir información equivocada es un problema distinto de llenar un vacío. **El sitio "
     "antiguo es hoy su identidad pública**, y está diciendo cosas falsas.", antes=4)

d.h2("2. LinkedIn es el activo que más rinde, y no estaba en el plan")
d.p("Dos de las tres herramientas lo leen y aciertan. El titular —«Diseñador Industrial / MAKER "
    "/ Docente STEAM / Director de I+D en Ideo Maker»— es lo que ChatGPT convirtió en su "
    "respuesta. Mantenerlo al día es gratis e inmediato.")

d.h2("3. El mercado, medido")
d.tabla([
    ["Consulta", "Cuántos actores nombran", "Coincidencia entre herramientas"],
    ["Robótica educativa para colegios", "~25 organizaciones", "Solo 4 nombres se repiten"],
    ["Referentes maker en Chile", "9 personas", "Solo Tomás Vivanco en las tres"],
], [C(6.0), C(5.6), C(5.6)])

d.pm("Que casi no se repitan significa que **nadie tiene autoridad establecida**: cada IA lista "
     "a quien encontró con sitio web. Ser uno de veinticinco no sirve; la posición que vale es "
     "ser la fuente que explica el campo.", antes=4)

d.h2("4. La posición disponible, con precisión")
d.tabla([
    ["Posición", "Quién la ocupa"],
    ["Referente maker, en general", "Nueve personas, encabezadas por Tomás Vivanco"],
    ["Autoridad académica en educación maker", "Pedro Hepp, ex coordinador nacional de Enlaces"],
    ["El practicante que documenta", "Nadie"],
], [C(7.0), C(10.2)])

d.p("Ninguno de los nueve arma la sala, dicta el curso, construye el robot y cuenta qué pasó "
    "después. Hepp estudia el fenómeno; Vicente lo hace.", antes=4)

d.h2("5. Qué escribir, y por qué esas tres cosas")
d.tabla([
    ["Pieza", "La evidencia de que se citaría"],
    ["La guía del comprador", "Perplexity tuvo que inventarla DOS veces por no encontrarla"],
    ["El mapa del ecosistema maker chileno", "Nueve personas, cero coincidencia: la fuente no existe"],
    ["Los casos de Ideo Maker", "Atacama, Antofagasta, Taltal y Calama son zonas mineras, y la RSE minera financia estos proyectos"],
], [C(5.6), C(11.6)])

d.recuadro(
    "Sobre el mapa del ecosistema: no ponerse en la lista",
    "Escribir «los referentes maker de Chile» e incluirse se nota, y se nota mal. Lo que "
    "funciona es el mapa generoso sobre otras personas: el nombre queda pegado como autor, no "
    "como ítem número tres, y esa posición es mejor. Además es la forma más directa de que "
    "otros enlacen de vuelta, que es lo único que saca la información de la categoría "
    "«autodeclarada» con la que Perplexity marcó todo lo que encontró.")

d.h2("6. Tres canales, no uno")
d.p("Gemini corre sobre el índice de Google y es la única que ejecuta JavaScript. ChatGPT se "
    "apoya en Bing. Perplexity tiene rastreador propio. Ganar uno no gana los otros, y eso "
    "quedó demostrado: Gemini cita a Ideo Maker y las otras dos no.")

d.salto()

# ============================== INVESTIGACIÓN ==============================
d.h1("Los datos que sostienen el plan")

d.h2("El sitio era invisible para la IA")
d.p("Vercel analizó más de 500 millones de peticiones de GPTBot y no encontró una sola "
    "ejecución de JavaScript. ClaudeBot y PerplexityBot tampoco renderizan. Se estima que el "
    "contenido dibujado en el navegador es invisible para cerca del 70% de los rastreadores.")

d.h2("El SEO clásico ya no es la pelea")
d.tabla([
    ["Dato", "Cifra"],
    ["Búsquedas con respuesta de IA arriba", "~30%"],
    ["Caída de clics cuando aparece esa respuesta", "−35%"],
    ["Caída en búsquedas informativas", "−61%"],
    ["Tráfico que Google manda a publicadores, interanual", "−38%"],
    ["Coincidencia entre el top 10 de Google y lo que cita la IA", "de ~70% a menos de 20%"],
    ["Conversión del tráfico que llega desde una IA", "4,4 veces mejor"],
    ["Ganancia por citar fuentes dentro del texto", "+115% de visibilidad"],
], [C(11.0), C(6.2)])
d.p("Pero la documentación técnica resiste: SparkFun Learn, con más de un millón de visitas al "
    "mes, recibe el 57,86% de su tráfico desde búsqueda orgánica.", antes=4)

d.h2("Documentar el proceso rinde menos de lo que parece")
d.p("Andy Bell midió su iniciativa de trabajar en abierto y quedó bajo el 4% del total de "
    "lecturas. El proceso se documenta con poca exigencia de pulido; lo que se promociona es el "
    "material terminado.")

d.h2("Quién paga en Chile")
d.p("Los colegios subvencionados destinan en promedio un 9% de los fondos SEP a asesoría y "
    "capacitación, pero el sostenedor está obligado a contratar a una ATE registrada en el "
    "Mineduc. Para inscribirse como persona natural se exige magíster o doctorado más tres años "
    "asesorando establecimientos. Vicente está estudiando el magíster.")
d.p("Hay además otras tres vías: el FAEP, la Ley de Donaciones con Fines Educacionales, y la "
    "RSE de empresas mineras, forestales y energéticas en sus zonas de influencia.", color=SUAVE)

d.salto()

# ============================== REFERENTES ==============================
d.h1("Referentes")
d.p("Elegidos con señales verificables, no con estimaciones de tráfico.", color=SUAVE, despues=8)
d.tabla([
    ["Referente", "Señal", "Qué enseña"],
    ["Instructables", "~100,4 M visitas/mes", "La documentación por comunidad a escala"],
    ["Adafruit Learn", "~1,6 M visitas/mes", "Regalar la documentación para vender el componente"],
    ["SparkFun Learn", "~1,1 M, 57,86% orgánico", "La búsqueda sigue funcionando en documentación técnica"],
    ["Domestika", "8 M de creativos", "El mercado hispanohablante existe y es grande"],
    ["Tinkering Studio", "Red internacional, Coursera", "Documentar prototipos a medio hacer, no resultados"],
    ["Bartosz Ciechanowski", "#8 histórico en HN, 544 patrons", "Calidad extrema, poca frecuencia, sin publicidad"],
    ["Maggie Appleton", "6 tipos, 3 estados de madurez", "El modelo de jardín en lugar del blog"],
    ["Josh Comeau", "Prevendió su curso en USD 550 mil", "Validar vendiendo antes de construir"],
    ["Piccalilli", "Techo de £249, lectura gratis", "Nunca poner muro de pago a la lectura"],
    ["Teachers Pay Teachers", "De USD 10, el autor recibe 5,20", "El marketplace cobra caro el descubrimiento"],
], [C(4.3), C(4.9), C(8.0)])

d.recuadro(
    "El patrón que comparten todos",
    "Ninguno vende el contenido. Adafruit y SparkFun venden componentes y regalan la "
    "documentación; el Exploratorium es un museo; Instructables es comunidad. La documentación "
    "no es el producto: es lo que hace que exista el producto.")

d.salto()

# ============================== PLAN ==============================
d.h1("El plan, corregido tras la medición")

d.paso("0.", "Limpiar  ·  esta semana  ·  fase nueva",
       "Borrar los dos CV con RUT que siguen públicos en japortafolio.com y pedir la retirada "
       "de cada URL en Search Console. Poner LinkedIn al día y tratarlo como parte del sistema, "
       "no como un perfil abandonado. Instalar la analítica. Nada de esto es construir: es "
       "sacar y ordenar. Es lo más barato y lo más urgente, y no existía en el plan anterior.")

d.paso("A.", "El motor  ·  HECHA el 20 de septiembre",
       "La regla de documentación y la generación de HTML real en cada commit.")

d.paso("B.", "El dominio  ·  sube desde el tercer lugar",
       "Mover japortafolio.com al sitio nuevo. Ya no es cosmético: hoy ese dominio ES la "
       "identidad pública de Vicente para las IA, y está sirviendo una versión equivocada. "
       "Migrar reemplaza información mala por buena en la dirección que ya tiene autoridad. "
       "Del lado del sitio es una línea en construir.py; el resto es DNS.")

d.paso("C.", "Los casos de Ideo Maker",
       "Atacama, Antofagasta, Taltal y Calama. Cambió de naturaleza: ya no es solo contenido "
       "de Vicente, es trabajo compartido con la empresa, y él está adentro para empujarlo. "
       "Requiere resolver antes qué se puede publicar.")

d.paso("D.", "Las tres piezas",
       "La guía del comprador, el mapa del ecosistema maker y los casos. Antes esta fase era "
       "«un jardín de apuntes», sin saber qué escribir. Ahora sabemos las tres, y por qué cada "
       "una se citaría.")

d.paso("E.", "Cursos",
       "La página escrita se publica primero; el video después apunta a ella. El video se hunde "
       "en el feed en tres días; la página queda y es lo que se cita.")

d.paso("F.", "Vender, sin construir",
       "Prevender antes de armar cualquier plataforma. Skool queda anotado como opción a "
       "revisar, no como decisión: la rotación es de 8% a 18% mensual y lo que retiene son las "
       "llamadas en vivo semanales, o sea es un negocio de presencia, lo contrario de esto.")

d.paso("→", "En paralelo  ·  Ideo Maker",
       "El documento con el diagnóstico y los seis pasos ya está listo para levantarlo adentro "
       "de la empresa. Si Ideo Maker documenta y Vicente documenta, se refuerzan: la empresa "
       "demuestra que el trabajo existe y a qué escala, la persona demuestra quién lo hizo.")

d.paso("↻", "Diciembre  ·  volver a medir",
       "Mismo montaje, las mismas seis preguntas, y se compara contra la línea base.")

d.recuadro(
    "La decisión que ordena todo lo demás",
    "El destino comercial es institucional, no de consumo. Toda la trayectoria de Vicente es "
    "B2B: colegios, municipalidades, programas públicos. El portafolio no tiene que convertir "
    "un pago con tarjeta: tiene que ganar una conversación con un sostenedor o con una empresa "
    "del rubro.")

d.salto()

# ============================== OBJETIVOS ==============================
d.h1("Objetivos a corto plazo")
d.p("Los próximos tres meses.", color=SUAVE, despues=6)
d.vinieta("borrar los CV expuestos, actualizar LinkedIn, instalar analítica.", "Limpiar: ")
d.vinieta("mudarse a japortafolio.com para dejar de competir consigo mismo.", "Dominio: ")
d.vinieta("los tres casos de Ideo Maker, previa confirmación de qué se puede publicar.", "Contenido: ")
d.vinieta("escribir la guía del comprador, que es la pieza más fácil y la más citable.", "Primera pieza: ")
d.vinieta("definir la lista de servicios, que hoy no refleja todo lo que realmente hace.")
d.vinieta("cerrar las dos decisiones pendientes: las fotos con menores, y si el blog vive dentro o fuera.")

d.h1("Objetivos a largo plazo")
d.p("De un año en adelante.", color=SUAVE, despues=6)
d.vinieta("ser el practicante que documenta la educación maker en Chile. La posición está "
          "vacía y es la única que su trabajo respalda de verdad.", "Posición: ")
d.vinieta("un archivo público de práctica documentada en español, que hoy no existe.", "Ser la fuente: ")
d.vinieta("que otros lo citen. Es lo único que saca la información de la categoría "
          "«autodeclarada», y el mapa del ecosistema es la vía más directa.", "Salir de lo propio: ")
d.vinieta("completar el magíster y quedar inscrito como ATE, que es lo que habilita vender "
          "directo a colegios con fondos públicos.", "Habilitación: ")
d.vinieta("probar la venta con un solo comprador antes de construir cualquier plataforma.")

# ============================== SUPUESTOS ==============================
d.h1("Lo que sigue siendo supuesto")
d.p("Tres cosas que no se resolvieron y conviene no olvidar.", color=SUAVE, despues=6)
d.vinieta("nunca se midió. Se hace gratis con el Planificador de Palabras Clave de Google.",
          "Volumen de búsqueda en español: ")
d.vinieta("no hay evidencia de que un profesor pague por esto. Toda la evidencia apunta al "
          "comprador institucional.", "Si el público docente paga: ")
d.vinieta("quedaron sin medir las preguntas 4 y 6, aunque Perplexity respondió la 4 de rebote, "
          "dos veces.", "Dos preguntas: ")

# ============================== DECISIONES ==============================
d.h1("Decisiones tomadas")
d.p("Para no volver a discutirlas.", color=SUAVE, despues=8)
d.tabla([
    ["Decisión", "Por qué"],
    ["HTML generado, nunca dibujado en el navegador",
     "Es la diferencia entre existir y no existir para la IA y para los previsualizadores"],
    ["Sin npm ni node en el sitio",
     "Node se instaló para las diez aplicaciones de Vicente, no para el portafolio"],
    ["Todo el contenido en un solo archivo", "Se edita en un lugar y se publica sin herramientas"],
    ["Ninguna cara de menor de edad", "Regla propia de Vicente, sin excepciones"],
    ["Caras de personas adultas sí", "El trabajo se ve hecho por gente y no por objetos"],
    ["Cero marcadores publicados", "Lo que falta se saca del sitio y se anota en FALTANTES.md"],
    ["No construir plataforma de venta", "Se prevende primero; si funciona, se cobra con un servicio externo"],
    ["No ponerse en el mapa del ecosistema", "El nombre pega más como autor que como ítem de la lista"],
], [C(6.0), C(11.2)])

# ============================== PRÓXIMA ==============================
d.h1("Próxima actualización")
d.p("Espacio para anotar qué cambió desde el " + FECHA + ".", color=SUAVE, despues=8)
d.lineas_para_escribir([("Fecha", 1), ("Qué se hizo", 2), ("Qué se aprendió", 2), ("Qué sigue", 2)])

d.pie("Documento generado el " + FECHA + "  ·  Versión técnica en documentacion/PROYECTO.md  ·  "
      "Medición completa en documentacion/linea-base-2026-09-20.md  ·  "
      "Pendientes vivos en FALTANTES.md")

d.guardar(SALIDA)
