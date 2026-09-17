/* =========================================================
   main.js — arma todas las paginas a partir de js/data.js
   No deberias necesitar tocar este archivo para cambiar textos.
   ========================================================= */

(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  /* ---------- Portada lisa (se usa cuando img esta vacio) ----------
     Sin la palabra "IMAGEN" encima: el titulo ya va en la tarjeta, y un
     fondo liso se lee como una decision y no como algo que falta. */
  function placeholder(label, i) {
    /* Los colores salen de las variables del tema, no van fijos: asi la
       portada acompana al modo claro y al oscuro en vez de pelearse. */
    return (
      '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" class="portada-lisa" ' +
      'role="img" aria-label="' + esc(label) + '">' +
      '<defs><pattern id="p' + i + '" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
      '<line x1="0" y1="0" x2="0" y2="26" stroke="var(--line)" stroke-width="9"/></pattern></defs>' +
      '<rect width="800" height="600" fill="var(--card)"/>' +
      '<rect width="800" height="600" fill="url(#p' + i + ')"/>' +
      "</svg>"
    );
  }

  function media(src, label, i) {
    return src ? '<img src="' + esc(src) + '" alt="' + esc(label) + '" loading="lazy">' : placeholder(label, i);
  }

  /* ---------- Navegacion ---------- */
  function nav(active) {
    var links = [
      { t: "Catálogo", h: active === "home" ? "#catalogo" : "index.html#catalogo", k: "catalogo" },
      { t: "Servicios", h: active === "home" ? "#servicios" : "index.html#servicios", k: "servicios" },
      { t: "Historia", h: "historia.html", k: "historia" },
      { t: SITE.blog.texto, h: SITE.blog.url, k: "blog", externo: true }
    ];
    /* El nombre se parte para poder dejar solo el nombre de pila en movil,
       donde la barra no da para tanto. */
    var partes = SITE.nombre.split(" ");
    var pila = partes.shift();
    var apellidos = partes.join(" ");

    return (
      '<nav class="nav" id="nav"><div class="nav__in">' +
      '<a class="nav__name" href="index.html">' +
      '<span class="nav__marca" aria-hidden="true"></span>' + esc(pila) +
      '<span class="nav__name-resto"> ' + esc(apellidos) + "</span>" +
      '<span class="nav__name-rol"> — ' + esc(SITE.rol) + "</span></a>" +
      '<div class="nav__links">' +
      links.map(function (l) {
        /* enlace externo sin URL todavia: se muestra atenuado y no navega */
        if (l.externo && !l.h) {
          return '<a href="#" aria-disabled="true" title="Proximamente">' + esc(l.t) + "</a>";
        }
        var attrs = l.externo ? ' target="_blank" rel="noopener"' : "";
        if (l.movil === false) attrs += " data-solo-desktop";
        if (active === l.k) attrs += ' aria-current="page"';
        return '<a href="' + esc(l.h) + '"' + attrs + ">" + esc(l.t) + "</a>";
      }).join("") +
      '<button class="theme-btn" id="theme" type="button" aria-label="Cambiar tema">' +
      '<span class="theme-btn__txt">Tema</span>' +
      '<span class="theme-btn__ico" aria-hidden="true">◐</span>' +
      "</button>" +
      "</div></div></nav>"
    );
  }

  /* ---------- Footer ---------- */
  function footer() {
    /* Solo se dibuja la descarga que tenga archivo: sin url no hay enlace roto. */
    var descargas = (SITE.descargas || []).filter(function (d) { return d.url; });
    return (
      '<footer class="footer" id="contacto"><div class="wrap">' +
      '<p class="eyebrow">' + esc(SITE.footer) + "</p>" +
      '<h2 class="rise">Escríbeme a <a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a></h2>" +
      (descargas.length
        ? '<div class="footer__descargas rise">' +
          descargas.map(function (d) {
            return '<a class="btn btn--linea" href="' + esc(d.url) + '" download>' + esc(d.nombre) + "</a>";
          }).join("") +
          "</div>"
        : "") +
      '<div class="footer__bottom">' +
      '<div class="footer__social">' +
      SITE.redes.map(function (r) {
        var ext = /^https?:/.test(r.url) ? ' target="_blank" rel="noopener"' : "";
        return '<a href="' + esc(r.url) + '"' + ext + ">" + esc(r.nombre) + "</a>";
      }).join("") +
      "</div>" +
      "<div>© " + new Date().getFullYear() + " " + esc(SITE.nombre) + "</div>" +
      "</div></div></footer>"
    );
  }

  /* ---------- Encabezado de seccion ---------- */
  function head(s) {
    return (
      '<div class="section-head rise">' +
      '<p class="eyebrow">' + esc(s.eyebrow) + "</p>" +
      "<h2>" + esc(s.titulo) + "</h2>" +
      (s.intro ? '<p class="intro">' + esc(s.intro) + "</p>" : "") +
      "</div>"
    );
  }

  function mayus(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
  }

  /* ---------- Catalogo ----------
     Proyectos y cursos conviven en una sola grilla. Cada tipo guarda
     sus campos propios en data.js, asi que aqui se normalizan a una
     forma comun antes de dibujar la tarjeta. */
  function catalogo() {
    var items = [];

    (SITE.proyectos || []).forEach(function (p) {
      items.push({
        href: "proyecto.html?id=" + encodeURIComponent(p.id),
        img: p.img, titulo: p.titulo,
        etiquetas: p.tags || [],
        meta: [p.cliente, p.anio],
        anio: p.anio
      });
    });

    (SITE.cursos || []).forEach(function (c) {
      items.push({
        href: "curso.html?id=" + encodeURIComponent(c.id),
        img: c.portada, titulo: c.nombre,
        etiquetas: [c.etiqueta, c.anio, c.nivel].filter(Boolean),
        meta: [c.cargo, c.institucion],
        anio: c.anio
      });
    });

    (SITE.apps || []).forEach(function (a) {
      items.push({
        href: "proyecto-ia.html?id=" + encodeURIComponent(a.id),
        img: a.portada, titulo: a.titulo,
        etiquetas: [a.tipo, a.anio, a.herramienta].filter(Boolean),
        meta: [mayus(a.estado), a.dominio],
        anio: a.anio
      });
    });

    /* Mas reciente primero. "2022 — 2024" se ordena por su ano final. */
    function ultimoAnio(a) {
      var nums = String(a || "").match(/\d{4}/g);
      return nums ? Math.max.apply(null, nums.map(Number)) : 0;
    }
    items.sort(function (a, b) { return ultimoAnio(b.anio) - ultimoAnio(a.anio); });
    return items;
  }

  function cardCatalogo(it, i) {
    /* Las etiquetas van bajo la imagen, no encima: sobre la foto la ensucian. */
    return (
      '<a class="card rise" href="' + it.href + '" data-tags="' +
      esc(it.etiquetas.join("|")) + '">' +
      '<div class="card__media">' + media(it.img, it.titulo, i) + "</div>" +
      '<div class="card__info">' +
      '<div class="card__bar"><span class="card__title">' + esc(it.titulo) + "</span>" +
      '<span class="card__meta">' + it.meta.filter(Boolean).map(esc).join("<br>") + "</span></div>" +
      (it.etiquetas.length
        ? '<div class="card__tags">' +
          it.etiquetas.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") +
          "</div>"
        : "") +
      "</div></a>"
    );
  }

  /* ---------- Filtro del catalogo ----------
     Una fila con todas las etiquetas que existen, de la mas usada a la
     menos usada. Es de seleccion unica: al elegir otra se cambia, y al
     volver a hacer clic en la elegida se suelta. El filtrado ocurre en
     el navegador sobre las tarjetas ya dibujadas. */
  function barraFiltros(items) {
    var cuenta = {};
    items.forEach(function (it) {
      it.etiquetas.forEach(function (t) { cuenta[t] = (cuenta[t] || 0) + 1; });
    });
    var tags = Object.keys(cuenta).sort(function (a, b) {
      return cuenta[b] - cuenta[a] || a.localeCompare(b, "es");
    });
    /* Las que aparecen una sola vez son mas de la mitad y llenan la
       pantalla antes del primer proyecto: quedan tras un "ver todas". */
    var repetidas = tags.filter(function (t) { return cuenta[t] > 1; });
    var unicas = tags.filter(function (t) { return cuenta[t] === 1; });

    function chip(t, extra) {
      return '<button class="filtro' + (extra ? " filtro--extra" : "") +
        '" type="button" aria-pressed="false" data-tag="' + esc(t) + '">' + esc(t) +
        '<span class="filtro__n">' + cuenta[t] + "</span></button>";
    }

    return (
      '<div class="filtros rise" id="filtros">' +
      '<button class="filtro is-on" type="button" aria-pressed="true" data-tag="">Todo' +
      '<span class="filtro__n">' + items.length + "</span></button>" +
      repetidas.map(function (t) { return chip(t, false); }).join("") +
      unicas.map(function (t) { return chip(t, true); }).join("") +
      (unicas.length
        ? '<button class="filtro filtro--mas" type="button" id="filtros-mas" aria-expanded="false">' +
          "Ver las otras " + unicas.length + "</button>"
        : "") +
      "</div>" +
      '<p class="filtros__estado" id="filtros-estado" role="status"></p>'
    );
  }

  /* ---------- Una pieza de la galeria: foto, video local o YouTube ---------- */
  function pieza(g, label, i) {
    var cuerpo;
    if (g.tipo === "youtube" && g.src) {
      cuerpo =
        '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(g.src) +
        '" title="' + esc(label) + '" loading="lazy" allowfullscreen></iframe></div>';
    } else if (g.tipo === "video" && g.src) {
      cuerpo = '<video src="' + esc(g.src) + '" controls preload="metadata" playsinline></video>';
    } else {
      cuerpo = media(g.src, label, i);
    }
    return '<figure class="rise">' + cuerpo +
      (g.pie ? "<figcaption>" + esc(g.pie) + "</figcaption>" : "") + "</figure>";
  }

  /* ---------- Pagina: un proyecto hecho con IA ----------
     Misma estructura que la ficha de curso, con dos cosas propias:
     el boton al proyecto en vivo y la bitacora de avances. */
  function app(root) {
    var id = new URLSearchParams(location.search).get("id");
    var idx = SITE.apps.findIndex(function (a) { return a.id === id; });
    if (idx < 0) idx = 0;
    var a = SITE.apps[idx];
    var sig = SITE.apps[(idx + 1) % SITE.apps.length];
    document.title = a.titulo + " — " + SITE.nombre;

    var datos = [
      ["Tipo", a.tipo],
      ["Fecha", a.fecha],
      ["Estado", mayus(a.estado)],
      ["Dominio", a.dominio],
      ["Construido con", a.herramienta]
    ].filter(function (d) { return d[1]; });

    var bitacora = (a.bitacora || []).map(function (b) {
      return '<li class="rise"><span class="temario__n">' + esc(b.fecha) + "</span>" +
        '<span class="temario__t">' + esc(b.titulo) +
        (b.texto ? '<span class="temario__d">' + esc(b.texto) + "</span>" : "") +
        "</span></li>";
    }).join("");

    var galeria = (a.galeria || []).map(function (g, n) {
      return pieza({ tipo: "imagen", src: g.src, pie: g.pie }, a.titulo, idx + n);
    }).join("");

    root.innerHTML =
      nav("catalogo") +
      '<header class="case-head"><div class="wrap">' +
      '<a class="back" href="index.html#catalogo">&larr; Volver al catálogo</a>' +
      '<h1 class="rise">' + esc(a.titulo) + "</h1>" +
      (a.resumen ? '<p class="lead rise">' + esc(a.resumen) + "</p>" : "") +
      (a.link || (a.repo && a.repoPublico)
        ? '<p class="acciones rise">' +
          (a.link
            ? '<a class="btn" href="' + esc(a.link) + '" target="_blank" rel="noopener">' +
              '<span class="dot"></span>Abrir el proyecto</a>'
            : "") +
          (a.repo && a.repoPublico
            ? '<a class="btn btn--linea" href="' + esc(a.repo) + '" target="_blank" rel="noopener">' +
              'Ver el código en GitHub</a>'
            : "") +
          "</p>"
        : "") +
      '<div class="case-facts rise">' +
      datos.map(function (d) {
        return "<div><span>" + esc(d[0]) + "</span>" + esc(d[1]) + "</div>";
      }).join("") +
      "</div></div></header>" +

      '<section class="section section--tight"><div class="wrap">' +
      '<figure class="rise" style="margin-top:0">' + media(a.portada, a.titulo, idx) + "</figure>" +

      '<div class="prose rise">' +
      (a.descripcion || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      "</div>" +

      (bitacora
        ? '<h2 class="subhead">Bitácora</h2><ol class="temario">' + bitacora + "</ol>"
        : "") +

      (galeria
        ? '<h2 class="subhead">Pantallas</h2><div class="galeria">' + galeria + "</div>"
        : "") +

      (a.etiquetas && a.etiquetas.length
        ? '<h2 class="subhead">Etiquetas</h2><div class="chips rise">' +
          a.etiquetas.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") +
          "</div>"
        : "") +

      '<a class="next" href="proyecto-ia.html?id=' + encodeURIComponent(sig.id) + '">' +
      '<span><span class="eyebrow" style="margin:0;display:block">Siguiente proyecto</span><strong>' +
      esc(sig.titulo) + "</strong></span><span>&rarr;</span></a>" +
      "</div></section>" +

      footer();
  }

  /* ---------- Pagina: un curso ---------- */
  function curso(root) {
    var id = new URLSearchParams(location.search).get("id");
    var idx = SITE.cursos.findIndex(function (c) { return c.id === id; });
    if (idx < 0) idx = 0;
    var c = SITE.cursos[idx];
    var sig = SITE.cursos[(idx + 1) % SITE.cursos.length];
    document.title = c.nombre + " — " + SITE.nombre;

    var datos = [
      ["Periodo", c.periodo || c.anio],
      ["Institución", c.institucion],
      ["Cargo", c.cargo],
      ["Nivel", c.nivel],
      ["Duración", c.duracion],
      ["Equipo", c.equipo]
    ].filter(function (d) { return d[1]; });

    /* Recuadros destacados: autoria del curso, el robot educativo, etc. */
    var destacados = (c.destacados || []).map(function (d) {
      return '<div class="nota rise"><h3>' + esc(d.titulo) + "</h3><p>" + esc(d.texto) + "</p></div>";
    }).join("");

    var temario = (c.temario || []).map(function (t, n) {
      return '<li class="rise"><span class="temario__n">' + ("0" + (n + 1)).slice(-2) + "</span>" +
        '<span class="temario__t">' + esc(t.titulo) +
        (t.detalle ? '<span class="temario__d">' + esc(t.detalle) + "</span>" : "") +
        "</span></li>";
    }).join("");

    var galeria = (c.galeria || []).map(function (g, n) {
      return pieza(g, c.nombre, idx + n);
    }).join("");

    root.innerHTML =
      nav("catalogo") +
      '<header class="case-head"><div class="wrap">' +
      '<a class="back" href="index.html#catalogo">&larr; Volver al catálogo</a>' +
      '<h1 class="rise">' + esc(c.nombre) + "</h1>" +
      (c.subtitulo ? '<p class="subtitulo rise">' + esc(c.subtitulo) + "</p>" : "") +
      (c.resumen ? '<p class="lead rise">' + esc(c.resumen) + "</p>" : "") +
      '<div class="case-facts rise">' +
      datos.map(function (d) {
        return "<div><span>" + esc(d[0]) + "</span>" + esc(d[1]) + "</div>";
      }).join("") +
      "</div></div></header>" +

      '<section class="section section--tight"><div class="wrap">' +
      '<figure class="rise" style="margin-top:0">' + media(c.portada, c.nombre, idx) + "</figure>" +

      '<div class="prose rise">' +
      (c.descripcion || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      "</div>" +

      (destacados ? '<div class="notas">' + destacados + "</div>" : "") +

      (temario
        ? '<h2 class="subhead">Temario</h2><ol class="temario">' + temario + "</ol>"
        : "") +

      (galeria
        ? '<h2 class="subhead">Registro</h2><div class="galeria">' + galeria + "</div>"
        : "") +

      '<a class="next" href="curso.html?id=' + encodeURIComponent(sig.id) + '">' +
      '<span><span class="eyebrow" style="margin:0;display:block">Siguiente curso</span><strong>' +
      esc(sig.nombre) + "</strong></span><span>&rarr;</span></a>" +
      "</div></section>" +

      footer();
  }

  /* ---------- Pagina: inicio ---------- */
  function home(root) {
    root.innerHTML =
      nav("home") +
      '<header class="hero"><div class="wrap">' +
      '<h1 class="rise">' + SITE.titular + "</h1>" +
      '<div class="hero__row rise">' +
      '<a class="btn" href="#contacto"><span class="dot"></span>' + esc(SITE.cta) + "</a>" +
      '<p class="hero__note">' + esc(SITE.bajada) + "</p>" +
      "</div></div></header>" +

      '<section class="section" id="catalogo"><div class="wrap">' +
      head(SITE.secciones.catalogo) +
      barraFiltros(catalogo()) +
      '<div class="projects" id="projects">' + catalogo().map(cardCatalogo).join("") + "</div>" +
      "</div></section>" +

      '<section class="section" id="servicios"><div class="wrap">' +
      head(SITE.secciones.servicios) +
      '<div class="services">' +
      SITE.servicios.map(function (s) {
        return '<div class="service rise"><h3>' + esc(s.titulo) + "</h3><p>" + esc(s.texto) + "</p></div>";
      }).join("") +
      "</div></div></section>" +

      footer();
  }

  /* ---------- Pagina: historia ---------- */
  function historia(root) {
    var h = SITE.historia;
    root.innerHTML =
      nav("historia") +
      '<header class="case-head"><div class="wrap">' +
      '<h1 class="rise">' + esc(h.titular) + "</h1>" +
      "</div></header>" +

      '<section class="section" style="padding-top:0"><div class="wrap">' +
      '<div class="bio">' +
      '<div class="prose rise">' + h.parrafos.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
      (h.retrato
        ? '<figure class="retrato rise"><img src="' + esc(h.retrato) + '" alt="' + esc(SITE.nombre) + '" loading="lazy" decoding="async"></figure>'
        : "") +
      "</div>" +

      '<h2 class="subhead">Trayectoria</h2>' +
      '<div class="rows">' +
      h.trayectoria.map(function (r) {
        return '<div class="row rise"><span class="yr">' + esc(r[0]) + "</span><span>" + esc(r[1]) +
          '</span><span class="org">' + esc(r[2]) + "</span></div>";
      }).join("") +
      "</div>" +

      '<h2 class="subhead">Instituciones</h2>' +
      '<div class="chips rise">' + h.colaboraciones.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>" +
      "</div></section>" +

      footer();
  }

  /* ---------- Pagina: caso de estudio ---------- */
  function proyecto(root) {
    var id = new URLSearchParams(location.search).get("id");
    var idx = SITE.proyectos.findIndex(function (p) { return p.id === id; });
    if (idx < 0) idx = 0;
    var p = SITE.proyectos[idx];
    var sig = SITE.proyectos[(idx + 1) % SITE.proyectos.length];
    document.title = p.titulo + " — " + SITE.nombre;

    var cuerpo = p.bloques.map(function (b, i) {
      var t = b.titulo ? "<h2>" + esc(b.titulo) + "</h2>" : "";
      if (b.tipo === "imagen") {
        return "<figure>" + media(b.valor, p.titulo, idx + i) +
          (b.pie ? "<figcaption>" + esc(b.pie) + "</figcaption>" : "") + "</figure>";
      }
      if (b.tipo === "cita") return '<blockquote class="quote">' + esc(b.valor) + "</blockquote>";
      if (b.tipo === "lista") {
        return '<div class="prose">' + t + "<ul>" + b.valor.map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</ul></div>";
      }
      return '<div class="prose">' + t + "<p>" + esc(b.valor) + "</p></div>";
    }).join("");

    root.innerHTML =
      nav("catalogo") +
      '<header class="case-head"><div class="wrap">' +
      '<a class="back" href="index.html#catalogo">&larr; Volver al catálogo</a>' +
      '<h1 class="rise">' + esc(p.titulo) + "</h1>" +
      '<p class="lead rise">' + esc(p.resumen) + "</p>" +
      '<div class="case-facts rise">' +
      "<div><span>Cliente</span>" + esc(p.cliente) + "</div>" +
      "<div><span>Año</span>" + esc(p.anio) + "</div>" +
      "<div><span>Servicios</span>" + p.tags.map(esc).join(" · ") + "</div>" +
      "</div></div></header>" +

      '<section class="section" style="padding-top:0"><div class="wrap">' +
      '<figure style="margin-top:0">' + media(p.img, p.titulo, idx) + "</figure>" +
      cuerpo +
      '<a class="next" href="proyecto.html?id=' + encodeURIComponent(sig.id) + '">' +
      "<span><span class=\"eyebrow\" style=\"margin:0;display:block\">Siguiente proyecto</span><strong>" +
      esc(sig.titulo) + "</strong></span><span>&rarr;</span></a>" +
      "</div></section>" +

      footer();
  }

  /* ---------- Arranque ---------- */
  var root = document.getElementById("app");
  var page = document.body.dataset.page;
  ({
    home: home,
    historia: historia,
    proyecto: proyecto,
    curso: curso,
    app: app
  }[page] || home)(root);

  /* Tema claro/oscuro (por defecto sigue al sistema) */
  var btn = document.getElementById("theme");
  if (btn) {
    btn.addEventListener("click", function () {
      var actual = document.documentElement.dataset.theme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = actual === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("tema", next);
    });
  }

  /* La pestana del blog no navega mientras no tenga URL */
  document.querySelectorAll('.nav__links a[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  /* Borde de la nav al hacer scroll */
  var navEl = document.getElementById("nav");
  var onScroll = function () { navEl.classList.toggle("is-stuck", scrollY > 8); };
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Animacion de entrada ----------
     La animacion es un adorno: el contenido NUNCA puede depender de ella.
     Por eso hay tres formas de revelar un elemento, de mas fina a mas bruta:
       1. el observador, cuando entra en pantalla
       2. un repaso en cada scroll, que ademas atrapa lo que quedo arriba
          tras un salto de ancla (el observador no avisa de eso)
       3. una red de seguridad a los 2s, por si el navegador nunca
          reporta intersecciones (pestana oculta, viewport de alto cero,
          impresion a PDF, vistas previas). */
  var pendientes = [].slice.call(document.querySelectorAll(".rise"));

  pendientes.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i, 6) * 45 + "ms";
  });

  function revelar(el) {
    el.classList.add("in");
    if (io) io.unobserve(el);
  }
  function revelarTodo() {
    pendientes.forEach(revelar);
    pendientes = [];
  }
  /* Revela lo que ya esta en pantalla o quedo por encima de ella. */
  function repasar() {
    if (!innerHeight) return;           // viewport sin alto: no hay nada que medir
    pendientes = pendientes.filter(function (el) {
      if (el.getBoundingClientRect().top < innerHeight * .92) { revelar(el); return false; }
      return true;
    });
  }

  var io = window.IntersectionObserver
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            revelar(e.target);
            pendientes = pendientes.filter(function (x) { return x !== e.target; });
          }
        });
      }, { rootMargin: "0px 0px -8%" })
    : null;

  if (io) pendientes.forEach(function (el) { io.observe(el); });
  else revelarTodo();

  addEventListener("scroll", repasar, { passive: true });
  addEventListener("resize", repasar, { passive: true });
  repasar();
  setTimeout(revelarTodo, 2000);

  /* ---------- Filtrado del catalogo ----------
     Trabaja sobre las tarjetas ya dibujadas: no vuelve a generar nada.
     Al mostrar una tarjeta se la revela de inmediato, porque el
     observador ya no la esta siguiendo. */
  var barra = document.getElementById("filtros");
  if (barra) {
    var grilla = document.getElementById("projects");
    var estado = document.getElementById("filtros-estado");
    var tarjetas = [].slice.call(grilla.querySelectorAll(".card"));

    barra.addEventListener("click", function (e) {
      var boton = e.target.closest(".filtro");
      if (!boton) return;

      if (boton.id === "filtros-mas") {
        var abierto = barra.classList.toggle("muestra-todo");
        boton.setAttribute("aria-expanded", abierto ? "true" : "false");
        boton.textContent = abierto
          ? "Ver menos etiquetas"
          : "Ver las otras " + barra.querySelectorAll(".filtro--extra").length;
        return;
      }

      var tag = boton.dataset.tag;
      /* segundo clic sobre la etiqueta ya elegida: se suelta */
      if (tag && boton.classList.contains("is-on")) tag = "";

      [].forEach.call(barra.querySelectorAll(".filtro"), function (x) {
        var puesto = x.dataset.tag === tag;
        x.classList.toggle("is-on", puesto);
        x.setAttribute("aria-pressed", puesto ? "true" : "false");
      });

      var visibles = 0;
      tarjetas.forEach(function (c) {
        var entra = !tag || c.dataset.tags.split("|").indexOf(tag) > -1;
        c.hidden = !entra;
        if (entra) { visibles++; c.classList.add("in"); }
      });

      estado.textContent = tag
        ? visibles + (visibles === 1 ? " proyecto" : " proyectos") + " con la etiqueta " + tag
        : "";
    });
  }
})();
