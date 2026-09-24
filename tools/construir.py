# -*- coding: utf-8 -*-
"""
construir.py — escribe el sitio completo como HTML de verdad.

Por que existe
--------------
Hasta ahora cada pagina era un <div id="app"> vacio que main.js llenaba
en el navegador. Eso significaba que el archivo servido no tenia ni una
palabra de texto, y hay tres publicos que no ejecutan JavaScript:

  - los previsualizadores de enlaces (WhatsApp, LinkedIn, Slack)
  - los rastreadores de IA: GPTBot, ClaudeBot y PerplexityBot piden el
    HTML crudo, leen lo que hay y se van. No reintentan.
  - Google lo ejecuta, pero en una segunda pasada y sin garantias

Este script recorre js/data.js y deja el HTML escrito en disco, con todo
el texto adentro. main.js queda solo para lo que de verdad necesita al
navegador: el tema, el filtro y la animacion de entrada.

Se ejecuta solo, en cada commit, desde .githooks/pre-commit.
"""
import io
import os
import re
import sys
import html
import hashlib
import datetime

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.dirname(AQUI)
sys.path.insert(0, AQUI)
from leer_data import cargar  # noqa: E402

# La direccion publica del sitio. Al migrar a Hostinger se cambia SOLO
# esta linea: de aca salen las urls canonicas, las de compartir y el
# sitemap completo.
BASE = "https://japortafolio.com"

ANIO = datetime.date.today().year
HOY = datetime.date.today().isoformat()


# ---------------------------------------------------------------- utilidades

def esc(v):
    """Mismo escapado que hacia main.js: & < > y comillas dobles."""
    return (str(v).replace("&", "&amp;").replace("<", "&lt;")
            .replace(">", "&gt;").replace('"', "&quot;"))


def sin_html(v):
    """Texto plano, para los meta. Quita etiquetas y normaliza espacios."""
    t = re.sub(r"<[^>]+>", "", str(v))
    return html.unescape(re.sub(r"\s+", " ", t)).strip()


def recortar(t, n=155):
    t = sin_html(t)
    if len(t) <= n:
        return t
    return t[:n].rsplit(" ", 1)[0].rstrip(" ,.;:") + "…"


def hash_de(rel):
    ruta = os.path.join(RAIZ, rel)
    with open(ruta, "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()[:8]


def absoluta(rel):
    if not rel:
        return ""
    if rel.startswith("http"):
        return rel
    return BASE.rstrip("/") + "/" + rel.lstrip("/")


def mayus(s):
    return s[0].upper() + s[1:] if s else ""


def ultimo_anio(a):
    nums = re.findall(r"\d{4}", str(a or ""))
    return max(int(n) for n in nums) if nums else 0


# ---------------------------------------------------------------- piezas

def portada_lisa(label, i):
    """Portada sin imagen. Los colores salen del tema, no van fijos."""
    return (
        '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="portada-lisa" '
        'role="img" aria-label="%s">'
        '<defs><pattern id="p%d" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
        '<line x1="0" y1="0" x2="0" y2="26" stroke="var(--line)" stroke-width="9"/></pattern></defs>'
        '<rect width="800" height="600" fill="var(--card)"/>'
        '<rect width="800" height="600" fill="url(#p%d)"/>'
        "</svg>" % (esc(label), i, i)
    )


def portada(src, label, i, pre=""):
    """La foto grande del encabezado de una ficha. Tambien se abre al pincharla."""
    if not src:
        return media(src, label, i, pre)
    return '<a class="ampliar" href="%s%s">%s</a>' % (pre, esc(src), media(src, label, i, pre))


def media(src, label, i, pre=""):
    if not src:
        return portada_lisa(label, i)
    return '<img src="%s%s" alt="%s" loading="lazy">' % (pre, esc(src), esc(label))


def nav(activa, pre, sitio):
    inicio = pre + "index.html"
    enlaces = [
        ("Catálogo", "#catalogo" if activa == "home" else inicio + "#catalogo", "catalogo", False),
        ("Servicios", "#servicios" if activa == "home" else inicio + "#servicios", "servicios", False),
        ("Historia", pre + "historia.html", "historia", False),
        (sitio["blog"]["texto"], sitio["blog"]["url"], "blog", True),
    ]
    partes = sitio["nombre"].split(" ")
    pila, apellidos = partes[0], " ".join(partes[1:])

    trozos = []
    for texto, href, clave, externo in enlaces:
        if externo and not href:
            trozos.append('<a href="#" aria-disabled="true" title="Proximamente">%s</a>' % esc(texto))
            continue
        attrs = ' target="_blank" rel="noopener"' if externo else ""
        if activa == clave:
            attrs += ' aria-current="page"'
        trozos.append('<a href="%s"%s>%s</a>' % (esc(href), attrs, esc(texto)))

    return (
        '<nav class="nav" id="nav"><div class="nav__in">'
        '<a class="nav__name" href="%s">'
        '<span class="nav__marca" aria-hidden="true"></span>%s'
        '<span class="nav__name-resto"> %s</span>'
        '<span class="nav__name-rol"> — %s</span></a>'
        '<div class="nav__links">%s'
        '<button class="theme-btn" id="theme" type="button" aria-label="Cambiar tema">'
        '<span class="theme-btn__txt">Tema</span>'
        '<span class="theme-btn__ico" aria-hidden="true">◐</span>'
        "</button>"
        "</div></div></nav>"
        % (esc(inicio), esc(pila), esc(apellidos), esc(sitio["rol"]), "".join(trozos))
    )


def pie(pre, sitio):
    descargas = [d for d in sitio.get("descargas", []) if d.get("url")]
    bloque_desc = ""
    if descargas:
        bloque_desc = (
            '<div class="footer__descargas rise">'
            + "".join(
                '<a class="btn btn--linea" href="%s%s" download>%s</a>'
                % (pre if not d["url"].startswith("http") else "", esc(d["url"]), esc(d["nombre"]))
                for d in descargas
            )
            + "</div>"
        )
    redes = "".join(
        '<a href="%s%s">%s</a>'
        % (esc(r["url"]), ' target="_blank" rel="noopener"' if r["url"].startswith("http") else "", esc(r["nombre"]))
        for r in sitio["redes"]
    )
    return (
        '<footer class="footer" id="contacto"><div class="wrap">'
        '<p class="eyebrow">%s</p>'
        '<h2 class="rise">Escríbeme a <a href="mailto:%s">%s</a></h2>'
        "%s"
        '<div class="footer__bottom">'
        '<div class="footer__social">%s</div>'
        "<div>© %d %s</div>"
        "</div></div></footer>"
        % (esc(sitio["footer"]), esc(sitio["email"]), esc(sitio["email"]),
           bloque_desc, redes, ANIO, esc(sitio["nombre"]))
    )


def encabezado_seccion(s):
    intro = '<p class="intro">%s</p>' % esc(s["intro"]) if s.get("intro") else ""
    return ('<div class="section-head rise"><p class="eyebrow">%s</p><h2>%s</h2>%s</div>'
            % (esc(s["eyebrow"]), esc(s["titulo"]), intro))


def pieza(g, label, i, pre=""):
    if g.get("tipo") == "youtube" and g.get("src"):
        cuerpo = ('<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/%s" '
                  'title="%s" loading="lazy" allowfullscreen></iframe></div>' % (esc(g["src"]), esc(label)))
    elif g.get("tipo") == "video" and g.get("src"):
        cuerpo = '<video src="%s%s" controls preload="metadata" playsinline></video>' % (pre, esc(g["src"]))
    elif g.get("src"):
        return foto_ampliable(g["src"], g.get("pie"), label, pre, g.get("credito"))
    else:
        cuerpo = media(g.get("src"), label, i, pre)
    pie_txt = "<figcaption>%s</figcaption>" % esc(g["pie"]) if g.get("pie") else ""
    return '<figure class="rise">%s%s</figure>' % (cuerpo, pie_txt)


# ---------------------------------------------------------------- catalogo

def catalogo(sitio, pre=""):
    items = []
    for p in sitio.get("proyectos", []):
        items.append({
            "href": pre + "proyectos/%s/" % p["id"], "img": p.get("img"), "titulo": p["titulo"],
            "etiquetas": p.get("tags", []), "meta": [p.get("cliente"), p.get("anio")], "anio": p.get("anio"),
        })
    for c in sitio.get("cursos", []):
        items.append({
            "href": pre + "cursos/%s/" % c["id"], "img": c.get("portada"), "titulo": c["nombre"],
            "etiquetas": [v for v in (c.get("etiqueta"), c.get("anio"), c.get("nivel")) if v],
            "meta": [c.get("cargo"), c.get("institucion")], "anio": c.get("anio"),
        })
    for a in sitio.get("apps", []):
        if a.get("oculto"):
            continue
        items.append({
            "href": pre + "apps/%s/" % a["id"], "img": a.get("portada"), "titulo": a["titulo"],
            "etiquetas": [v for v in (a.get("tipo"), a.get("anio"), a.get("herramienta")) if v],
            "meta": [mayus(a.get("estado")), a.get("dominio")], "anio": a.get("anio"),
        })
    items.sort(key=lambda x: -ultimo_anio(x["anio"]))
    return items


def tarjeta(it, i, pre=""):
    etiquetas = ""
    if it["etiquetas"]:
        etiquetas = ('<div class="card__tags">'
                     + "".join('<span class="tag">%s</span>' % esc(t) for t in it["etiquetas"])
                     + "</div>")
    meta = "<br>".join(esc(m) for m in it["meta"] if m)
    return (
        '<a class="card rise" href="%s" data-tags="%s">'
        '<div class="card__media">%s</div>'
        '<div class="card__info">'
        '<div class="card__bar"><span class="card__title">%s</span>'
        '<span class="card__meta">%s</span></div>'
        "%s</div></a>"
        % (esc(it["href"]), esc("|".join(it["etiquetas"])),
           media(it["img"], it["titulo"], i, pre), esc(it["titulo"]), meta, etiquetas)
    )


def barra_filtros(items):
    cuenta = {}
    for it in items:
        for t in it["etiquetas"]:
            cuenta[t] = cuenta.get(t, 0) + 1
    tags = sorted(cuenta, key=lambda t: (-cuenta[t], t.lower()))
    repetidas = [t for t in tags if cuenta[t] > 1]
    unicas = [t for t in tags if cuenta[t] == 1]

    def chip(t, extra):
        return ('<button class="filtro%s" type="button" aria-pressed="false" data-tag="%s">%s'
                '<span class="filtro__n">%d</span></button>'
                % (" filtro--extra" if extra else "", esc(t), esc(t), cuenta[t]))

    mas = ""
    if unicas:
        mas = ('<button class="filtro filtro--mas" type="button" id="filtros-mas" aria-expanded="false">'
               "Ver las otras %d</button>" % len(unicas))
    return (
        '<div class="filtros rise" id="filtros">'
        '<button class="filtro is-on" type="button" aria-pressed="true" data-tag="">Todo'
        '<span class="filtro__n">%d</span></button>'
        "%s%s%s</div>"
        '<p class="filtros__estado" id="filtros-estado" role="status"></p>'
        % (len(items), "".join(chip(t, False) for t in repetidas),
           "".join(chip(t, True) for t in unicas), mas)
    )


def bloque_analitica(sitio):
    """GoatCounter: sin cookies, no bloquea el render (async), y no manda
    nada mientras SITE.analitica.codigo este vacio."""
    codigo = sitio.get("analitica", {}).get("codigo")
    if not codigo:
        return ""
    return (
        '<script data-goatcounter="https://%s.goatcounter.com/count" '
        'async src="//gc.zgo.at/count.js"></script>\n' % esc(codigo)
    )


# ---------------------------------------------------------------- envoltura

def documento(sitio, pre, titulo, descripcion, ruta, imagen, cuerpo, hashes, jsonld=None, tipo_og="website"):
    """El <head> completo y el <body> ya lleno. `ruta` es la url relativa
    limpia de esta pagina, sin barra inicial: "" para el inicio."""
    canonica = BASE.rstrip("/") + "/" + ruta
    og_img = absoluta(imagen) if imagen else absoluta("assets/img/marca/ja-oscuro.png")
    bloque_jsonld = ""
    if jsonld:
        bloque_jsonld = '<script type="application/ld+json">%s</script>\n' % jsonld
    return """<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%(titulo)s</title>
<meta name="description" content="%(desc)s">
<link rel="canonical" href="%(canonica)s">
<meta property="og:site_name" content="%(nombre)s">
<meta property="og:title" content="%(titulo)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:type" content="%(tipo_og)s">
<meta property="og:url" content="%(canonica)s">
<meta property="og:image" content="%(ogimg)s">
<meta property="og:locale" content="es_CL">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="%(pre)sassets/img/marca/favicon-32-claro.png" sizes="32x32" media="(prefers-color-scheme: dark)">
<link rel="icon" href="%(pre)sassets/img/marca/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="%(pre)sassets/img/marca/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="%(pre)scss/style.css?v=%(hcss)s">
%(jsonld)s<script>document.documentElement.classList.add("js");try{var t=localStorage.getItem("tema");if(t)document.documentElement.dataset.theme=t;}catch(e){}</script>
</head>
<body>
<div id="app">%(cuerpo)s</div>
<script src="%(pre)sjs/main.js?v=%(hjs)s"></script>
%(analitica)s</body>
</html>
""" % {
        "titulo": esc(titulo), "desc": esc(descripcion), "canonica": esc(canonica),
        "ogimg": esc(og_img), "pre": pre, "cuerpo": cuerpo, "jsonld": bloque_jsonld,
        "tipo_og": tipo_og, "nombre": esc("Vicente Cáceres Farías"),
        "hcss": hashes["css"], "hjs": hashes["js"],
        "analitica": bloque_analitica(sitio),
    }


def escribir(ruta_rel, contenido):
    destino = os.path.join(RAIZ, ruta_rel)
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    io.open(destino, "w", encoding="utf-8", newline="\n").write(contenido)
    return ruta_rel


# ---------------------------------------------------------------- paginas

def pagina_inicio(sitio, hashes):
    items = catalogo(sitio)
    tarjetas = "".join(tarjeta(it, i) for i, it in enumerate(items))
    servicios = "".join(
        '<div class="service rise"><h3>%s</h3><p>%s</p></div>' % (esc(s["titulo"]), esc(s["texto"]))
        for s in sitio["servicios"]
    )
    cuerpo = (
        nav("home", "", sitio)
        + '<header class="hero"><div class="wrap">'
        + '<h1 class="rise">%s</h1>' % sitio["titular"]          # trae <em>, no se escapa
        + '<div class="hero__row rise">'
        + '<a class="btn" href="#contacto"><span class="dot"></span>%s</a>' % esc(sitio["cta"])
        + '<p class="hero__note">%s</p>' % esc(sitio["bajada"])
        + "</div></div></header>"
        + '<section class="section" id="catalogo"><div class="wrap">'
        + encabezado_seccion(sitio["secciones"]["catalogo"])
        + barra_filtros(items)
        + '<div class="projects" id="projects">%s</div>' % tarjetas
        + "</div></section>"
        + '<section class="section" id="servicios"><div class="wrap">'
        + encabezado_seccion(sitio["secciones"]["servicios"])
        + '<div class="services">%s</div>' % servicios
        + "</div></section>"
        + pie("", sitio)
    )
    jsonld = ('{"@context":"https://schema.org","@type":"Person",'
              '"name":"%s","jobTitle":"%s","email":"mailto:%s","url":"%s/",'
              '"image":"%s","knowsAbout":["Diseno industrial","Educacion STEAM",'
              '"Fabricacion digital","FabLab","Robotica educativa","Diseno de servicios"],'
              '"sameAs":[%s]}'
              % (sitio["nombre"], sitio["rol"], sitio["email"], BASE,
                 absoluta("assets/img/retrato.jpg"),
                 ",".join('"%s"' % r["url"] for r in sitio["redes"] if r["url"].startswith("http"))))
    return documento(
        sitio=sitio, pre="", titulo="%s — %s" % (sitio["nombre"], sitio["rol"]),
        descripcion=recortar(sitio["bajada"]), ruta="", imagen="assets/img/retrato.jpg",
        cuerpo=cuerpo, hashes=hashes, jsonld=jsonld, tipo_og="website")


def pagina_historia(sitio, hashes):
    h = sitio["historia"]
    retrato = ""
    if h.get("retrato"):
        retrato = ('<figure class="retrato rise"><img src="%s" alt="%s" loading="lazy" decoding="async"></figure>'
                   % (esc(h["retrato"]), esc(sitio["nombre"])))
    filas = "".join(
        '<div class="row rise"><span class="yr">%s</span><span>%s</span><span class="org">%s</span></div>'
        % (esc(r[0]), esc(r[1]), esc(r[2])) for r in h["trayectoria"])
    chips = "".join('<span class="chip">%s</span>' % esc(c) for c in h["colaboraciones"])
    cuerpo = (
        nav("historia", "", sitio)
        + '<header class="case-head"><div class="wrap"><h1 class="rise">%s</h1></div></header>' % esc(h["titular"])
        + '<section class="section" style="padding-top:0"><div class="wrap">'
        + '<div class="bio"><div class="prose rise">'
        + "".join("<p>%s</p>" % esc(p) for p in h["parrafos"]) + "</div>" + retrato + "</div>"
        + '<h2 class="subhead">Trayectoria</h2><div class="rows">%s</div>' % filas
        + '<h2 class="subhead">Instituciones</h2><div class="chips rise">%s</div>' % chips
        + "</div></section>" + pie("", sitio)
    )
    return documento(
        sitio=sitio, pre="", titulo="Historia — %s" % sitio["nombre"],
        descripcion=recortar(h["parrafos"][0]), ruta="historia.html",
        imagen=h.get("retrato"), cuerpo=cuerpo, hashes=hashes, tipo_og="profile")


def foto_ampliable(src, pie, label, pre="", credito=None):
    """Una foto de ficha: se ve entera dentro de un marco parejo y se abre
    en grande al pincharla. Sin JavaScript el enlace abre el archivo.
    `credito` es para fotos de terceros: sale como "Foto: ..." bajo el pie."""
    cred = '<span class="credito">Foto: %s</span>' % esc(credito) if credito else ""
    pie_txt = "<figcaption>%s%s</figcaption>" % (esc(pie or ""), cred) if (pie or credito) else ""
    return ('<figure class="rise"><a class="ampliar" href="%s%s">'
            '<img src="%s%s" alt="%s" loading="lazy" decoding="async"></a>%s</figure>'
            % (pre, esc(src), pre, esc(src), esc(pie or label), pie_txt))


def pagina_proyecto(p, sig, idx, sitio, hashes):
    pre = "../../"
    trozos = []
    fotos = []   # imagenes seguidas: se juntan en una grilla

    def soltar_fotos():
        if fotos:
            clase = "fotos fotos--una" if len(fotos) == 1 else "fotos"
            trozos.append('<div class="%s">%s</div>' % (clase, "".join(fotos)))
            del fotos[:]

    for i, b in enumerate(p["bloques"]):
        t = "<h2>%s</h2>" % esc(b["titulo"]) if b.get("titulo") else ""
        if b["tipo"] == "imagen":
            fotos.append(foto_ampliable(b["valor"], b.get("pie"), p["titulo"], pre, b.get("credito")))
            continue
        soltar_fotos()
        if b["tipo"] == "cita":
            trozos.append('<blockquote class="quote">%s</blockquote>' % esc(b["valor"]))
        elif b["tipo"] == "lista":
            trozos.append('<div class="prose">%s<ul>%s</ul></div>'
                          % (t, "".join("<li>%s</li>" % esc(v) for v in b["valor"])))
        else:
            trozos.append('<div class="prose">%s<p>%s</p></div>' % (t, esc(b["valor"])))
    soltar_fotos()
    cuerpo = (
        nav("catalogo", pre, sitio)
        + '<header class="case-head"><div class="wrap">'
        + '<a class="back" href="%sindex.html#catalogo">&larr; Volver al catálogo</a>' % pre
        + '<h1 class="rise">%s</h1>' % esc(p["titulo"])
        + '<p class="lead rise">%s</p>' % esc(p["resumen"])
        + '<div class="case-facts rise">'
        + "<div><span>Cliente</span>%s</div>" % esc(p["cliente"])
        + "<div><span>Año</span>%s</div>" % esc(p["anio"])
        + "<div><span>Servicios</span>%s</div>" % " · ".join(esc(t) for t in p["tags"])
        + "</div></div></header>"
        + '<section class="section" style="padding-top:0"><div class="wrap">'
        + '<figure style="margin-top:0">%s%s</figure>' % (
            portada(p.get("img"), p["titulo"], idx, pre),
            '<figcaption class="credito-portada">Foto: %s</figcaption>' % esc(p["img_credito"]) if p.get("img_credito") else "")
        + "".join(trozos)
        + '<a class="next" href="%sproyectos/%s/">' % (pre, sig["id"])
        + '<span><span class="eyebrow" style="margin:0;display:block">Siguiente proyecto</span>'
        + "<strong>%s</strong></span><span>&rarr;</span></a>" % esc(sig["titulo"])
        + "</div></section>" + pie(pre, sitio)
    )
    jsonld = ('{"@context":"https://schema.org","@type":"CreativeWork",'
              '"name":"%s","description":"%s","creator":{"@type":"Person","name":"%s"},'
              '"dateCreated":"%s","url":"%s/proyectos/%s/","keywords":"%s"}'
              % (p["titulo"], recortar(p["resumen"], 200), sitio["nombre"],
                 str(p["anio"])[:4], BASE, p["id"], ", ".join(p["tags"])))
    return documento(
        sitio=sitio, pre=pre, titulo="%s — %s" % (p["titulo"], sitio["nombre"]),
        descripcion=recortar(p["resumen"]), ruta="proyectos/%s/" % p["id"],
        imagen=p.get("img"), cuerpo=cuerpo, hashes=hashes, jsonld=jsonld, tipo_og="article")


def pagina_curso(c, sig, idx, sitio, hashes):
    pre = "../../"
    datos = [("Periodo", c.get("periodo") or c.get("anio")), ("Institución", c.get("institucion")),
             ("Cargo", c.get("cargo")), ("Nivel", c.get("nivel")),
             ("Duración", c.get("duracion")), ("Equipo", c.get("equipo"))]
    facts = "".join("<div><span>%s</span>%s</div>" % (esc(k), esc(v)) for k, v in datos if v)
    destacados = "".join('<div class="nota rise"><h3>%s</h3><p>%s</p></div>' % (esc(d["titulo"]), esc(d["texto"]))
                         for d in c.get("destacados", []))
    temario = "".join(
        '<li class="rise"><span class="temario__n">%02d</span><span class="temario__t">%s%s</span></li>'
        % (n + 1, esc(t["titulo"]),
           '<span class="temario__d">%s</span>' % esc(t["detalle"]) if t.get("detalle") else "")
        for n, t in enumerate(c.get("temario", [])))
    galeria = "".join(pieza(g, c["nombre"], idx + n, pre) for n, g in enumerate(c.get("galeria", [])))
    cuerpo = (
        nav("catalogo", pre, sitio)
        + '<header class="case-head"><div class="wrap">'
        + '<a class="back" href="%sindex.html#catalogo">&larr; Volver al catálogo</a>' % pre
        + '<h1 class="rise">%s</h1>' % esc(c["nombre"])
        + ('<p class="subtitulo rise">%s</p>' % esc(c["subtitulo"]) if c.get("subtitulo") else "")
        + ('<p class="lead rise">%s</p>' % esc(c["resumen"]) if c.get("resumen") else "")
        + '<div class="case-facts rise">%s</div></div></header>' % facts
        + '<section class="section section--tight"><div class="wrap">'
        + '<figure class="rise" style="margin-top:0">%s</figure>' % portada(c.get("portada"), c["nombre"], idx, pre)
        + '<div class="prose rise">%s</div>' % "".join("<p>%s</p>" % esc(p) for p in c.get("descripcion", []))
        + ('<div class="notas">%s</div>' % destacados if destacados else "")
        + ('<h2 class="subhead">Temario</h2><ol class="temario">%s</ol>' % temario if temario else "")
        + ('<h2 class="subhead">Registro</h2><div class="fotos">%s</div>' % galeria if galeria else "")
        + '<a class="next" href="%scursos/%s/">' % (pre, sig["id"])
        + '<span><span class="eyebrow" style="margin:0;display:block">Siguiente curso</span>'
        + "<strong>%s</strong></span><span>&rarr;</span></a>" % esc(sig["nombre"])
        + "</div></section>" + pie(pre, sitio)
    )
    jsonld = ('{"@context":"https://schema.org","@type":"Course",'
              '"name":"%s","description":"%s","url":"%s/cursos/%s/",'
              '"provider":{"@type":"Organization","name":"%s"},'
              '"author":{"@type":"Person","name":"%s"},"inLanguage":"es"}'
              % (c["nombre"], recortar(c.get("resumen", ""), 200), BASE, c["id"],
                 c.get("institucion", ""), sitio["nombre"]))
    return documento(
        sitio=sitio, pre=pre, titulo="%s — %s" % (c["nombre"], sitio["nombre"]),
        descripcion=recortar(c.get("resumen") or c.get("subtitulo") or c["nombre"]),
        ruta="cursos/%s/" % c["id"], imagen=c.get("portada"),
        cuerpo=cuerpo, hashes=hashes, jsonld=jsonld, tipo_og="article")


def pagina_app(a, sig, idx, sitio, hashes):
    pre = "../../"
    datos = [("Tipo", a.get("tipo")), ("Fecha", a.get("fecha")), ("Estado", mayus(a.get("estado"))),
             ("Dominio", a.get("dominio")), ("Construido con", a.get("herramienta"))]
    facts = "".join("<div><span>%s</span>%s</div>" % (esc(k), esc(v)) for k, v in datos if v)
    acciones = ""
    if a.get("link") or (a.get("repo") and a.get("repoPublico")):
        botones = ""
        if a.get("link"):
            botones += ('<a class="btn" href="%s" target="_blank" rel="noopener">'
                        '<span class="dot"></span>Abrir el proyecto</a>' % esc(a["link"]))
        if a.get("repo") and a.get("repoPublico"):
            botones += ('<a class="btn btn--linea" href="%s" target="_blank" rel="noopener">'
                        "Ver el código en GitHub</a>" % esc(a["repo"]))
        acciones = '<p class="acciones rise">%s</p>' % botones
    bitacora = "".join(
        '<li class="rise"><span class="temario__n">%s</span><span class="temario__t">%s%s</span></li>'
        % (esc(b["fecha"]), esc(b["titulo"]),
           '<span class="temario__d">%s</span>' % esc(b["texto"]) if b.get("texto") else "")
        for b in a.get("bitacora", []))
    galeria = "".join(pieza({"tipo": "imagen", "src": g.get("src"), "pie": g.get("pie"), "credito": g.get("credito")},
                            a["titulo"], idx + n, pre) for n, g in enumerate(a.get("galeria", [])))
    chips = "".join('<span class="chip">%s</span>' % esc(t) for t in a.get("etiquetas", []))
    cuerpo = (
        nav("catalogo", pre, sitio)
        + '<header class="case-head"><div class="wrap">'
        + '<a class="back" href="%sindex.html#catalogo">&larr; Volver al catálogo</a>' % pre
        + '<h1 class="rise">%s</h1>' % esc(a["titulo"])
        + ('<p class="lead rise">%s</p>' % esc(a["resumen"]) if a.get("resumen") else "")
        + acciones
        + '<div class="case-facts rise">%s</div></div></header>' % facts
        + '<section class="section section--tight"><div class="wrap">'
        + '<figure class="rise" style="margin-top:0">%s</figure>' % portada(a.get("portada"), a["titulo"], idx, pre)
        + '<div class="prose rise">%s</div>' % "".join("<p>%s</p>" % esc(p) for p in a.get("descripcion", []))
        + ('<h2 class="subhead">Bitácora</h2><ol class="temario">%s</ol>' % bitacora if bitacora else "")
        + ('<h2 class="subhead">Pantallas</h2><div class="fotos">%s</div>' % galeria if galeria else "")
        + ('<h2 class="subhead">Etiquetas</h2><div class="chips rise">%s</div>' % chips if chips else "")
        + '<a class="next" href="%sapps/%s/">' % (pre, sig["id"])
        + '<span><span class="eyebrow" style="margin:0;display:block">Siguiente proyecto</span>'
        + "<strong>%s</strong></span><span>&rarr;</span></a>" % esc(sig["titulo"])
        + "</div></section>" + pie(pre, sitio)
    )
    jsonld = ('{"@context":"https://schema.org","@type":"SoftwareApplication",'
              '"name":"%s","description":"%s","applicationCategory":"%s",'
              '"author":{"@type":"Person","name":"%s"},"url":"%s/apps/%s/","inLanguage":"es"}'
              % (a["titulo"], recortar(a.get("resumen", ""), 200), a.get("tipo", ""),
                 sitio["nombre"], BASE, a["id"]))
    return documento(
        sitio=sitio, pre=pre, titulo="%s — %s" % (a["titulo"], sitio["nombre"]),
        descripcion=recortar(a.get("resumen") or a["titulo"]), ruta="apps/%s/" % a["id"],
        imagen=a.get("portada"), cuerpo=cuerpo, hashes=hashes, jsonld=jsonld, tipo_og="article")


# ---------------------------------------------------------------- redirecciones

def redireccion(destino_rel, titulo):
    """Las urls viejas con ?id= no se pueden pre-renderizar: un mismo
    archivo servia siete proyectos. Quedan como redireccion para no
    romper enlaces ya compartidos."""
    return """<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>%s</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="%s">
<script>
/* Las fichas ahora viven en su propia direccion. Se traduce el ?id= viejo. */
(function () {
  var id = new URLSearchParams(location.search).get("id");
  location.replace(id ? "%s" + encodeURIComponent(id) + "/" : "%s");
})();
</script>
</head>
<body>
<p style="font:14px system-ui;margin:3rem">
  Esta ficha se movió. <a href="%s">Ir al catálogo</a>.
</p>
</body>
</html>
""" % (titulo, BASE + "/", destino_rel, "index.html", "index.html")


def sitemap(rutas):
    filas = "".join(
        "  <url><loc>%s</loc><lastmod>%s</lastmod></url>\n" % (BASE.rstrip("/") + "/" + r, HOY)
        for r in rutas)
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n%s</urlset>\n' % filas)


def robots():
    return ("User-agent: *\n"
            "Allow: /\n\n"
            "# Los rastreadores de IA son bienvenidos: este sitio existe para\n"
            "# que se pueda citar lo que hay adentro.\n"
            "User-agent: GPTBot\nAllow: /\n\n"
            "User-agent: ClaudeBot\nAllow: /\n\n"
            "User-agent: PerplexityBot\nAllow: /\n\n"
            "Sitemap: %s/sitemap.xml\n" % BASE.rstrip("/"))


# ---------------------------------------------------------------- principal

def main():
    sitio = cargar(os.path.join(RAIZ, "js", "data.js"))
    hashes = {"css": hash_de("css/style.css"), "js": hash_de("js/main.js")}
    escritos, rutas = [], [""]

    escritos.append(escribir("index.html", pagina_inicio(sitio, hashes)))
    escritos.append(escribir("historia.html", pagina_historia(sitio, hashes)))
    rutas.append("historia.html")

    ps = sitio["proyectos"]
    for i, p in enumerate(ps):
        sig = ps[(i + 1) % len(ps)]
        escritos.append(escribir("proyectos/%s/index.html" % p["id"], pagina_proyecto(p, sig, i, sitio, hashes)))
        rutas.append("proyectos/%s/" % p["id"])

    cs = sitio["cursos"]
    for i, c in enumerate(cs):
        sig = cs[(i + 1) % len(cs)]
        escritos.append(escribir("cursos/%s/index.html" % c["id"], pagina_curso(c, sig, i, sitio, hashes)))
        rutas.append("cursos/%s/" % c["id"])

    apps = sitio["apps"]
    visibles = [a for a in apps if not a.get("oculto")]
    for i, a in enumerate(apps):
        if visibles:
            pos = next((k for k, x in enumerate(visibles) if x["id"] == a["id"]), -1)
            sig = visibles[(pos + 1) % len(visibles)] if pos >= 0 else visibles[0]
        else:
            sig = apps[(i + 1) % len(apps)]
        escritos.append(escribir("apps/%s/index.html" % a["id"], pagina_app(a, sig, i, sitio, hashes)))
        # las escondidas existen pero no entran al sitemap
        if not a.get("oculto"):
            rutas.append("apps/%s/" % a["id"])

    # urls viejas
    escritos.append(escribir("proyecto.html", redireccion("proyectos/", "Proyecto")))
    escritos.append(escribir("curso.html", redireccion("cursos/", "Curso")))
    escritos.append(escribir("proyecto-ia.html", redireccion("apps/", "Proyecto")))

    escritos.append(escribir("sitemap.xml", sitemap(rutas)))
    escritos.append(escribir("robots.txt", robots()))

    print("  css v=%s | js v=%s" % (hashes["css"], hashes["js"]))
    print("  paginas escritas: %d | urls en el sitemap: %d" % (len(escritos), len(rutas)))
    return escritos


if __name__ == "__main__":
    main()
