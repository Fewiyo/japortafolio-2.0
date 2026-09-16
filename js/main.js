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

  /* ---------- Marcador de imagen (se usa cuando img esta vacio) ---------- */
  function placeholder(label, i) {
    var tints = ["#e9e7e3", "#e4e6e6", "#eae6e0", "#e5e7e3", "#e8e4e6", "#e3e6ea"];
    var bg = tints[i % tints.length];
    return (
      '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' +
      esc(label) + '">' +
      '<defs><pattern id="p' + i + '" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
      '<line x1="0" y1="0" x2="0" y2="26" stroke="rgba(0,0,0,.055)" stroke-width="9"/></pattern></defs>' +
      '<rect width="800" height="600" fill="' + bg + '"/>' +
      '<rect width="800" height="600" fill="url(#p' + i + ')"/>' +
      '<text x="400" y="298" text-anchor="middle" font-family="Inter, sans-serif" font-size="19" ' +
      'letter-spacing="2.4" fill="rgba(0,0,0,.34)">IMAGEN</text>' +
      '<text x="400" y="326" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" ' +
      'fill="rgba(0,0,0,.26)">' + esc(label) + '</text>' +
      "</svg>"
    );
  }

  function media(src, label, i) {
    return src ? '<img src="' + esc(src) + '" alt="' + esc(label) + '" loading="lazy">' : placeholder(label, i);
  }

  /* ---------- Navegacion ---------- */
  function nav(active) {
    var links = [
      { t: "Proyectos", h: active === "home" ? "#proyectos" : "index.html#proyectos", k: "proyectos" },
      { t: "Cursos", h: "cursos.html", k: "cursos" },
      { t: "Servicios", h: active === "home" ? "#servicios" : "index.html#servicios", k: "servicios", movil: false },
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
      '<a class="nav__name" href="index.html">' + esc(pila) +
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
    return (
      '<footer class="footer"><div class="wrap">' +
      '<p class="eyebrow">' + esc(SITE.footer) + "</p>" +
      '<h2 class="rise">Escríbeme a <a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a></h2>" +
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

  /* ---------- Tarjeta de proyecto ---------- */
  function card(p, i) {
    return (
      '<a class="card rise" href="proyecto.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="card__media">' + media(p.img, p.titulo, i) +
      '<div class="card__tags">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
      "</div>" +
      '<div class="card__bar"><span class="card__title">' + esc(p.titulo) + "</span>" +
      '<span class="card__meta">' + esc(p.cliente) + "<br>" + esc(p.anio) + "</span></div>" +
      "</a>"
    );
  }

  /* ---------- Tarjeta de curso ----------
     Las etiquetas sobre la foto son: tipo, ano y nivel.
     Debajo van el nombre del curso y el cargo con la institucion. */
  function cardCurso(c, i) {
    var etiquetas = [c.etiqueta, c.anio, c.nivel].filter(Boolean);
    return (
      '<a class="card rise" href="curso.html?id=' + encodeURIComponent(c.id) + '">' +
      '<div class="card__media">' + media(c.portada, c.nombre, i) +
      '<div class="card__tags">' +
      etiquetas.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") +
      "</div></div>" +
      '<div class="card__bar"><span class="card__title">' + esc(c.nombre) + "</span>" +
      '<span class="card__meta">' + esc(c.cargo) + "<br>" + esc(c.institucion) + "</span></div>" +
      "</a>"
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

  /* ---------- Pagina: listado de cursos ---------- */
  function cursos(root) {
    var h = SITE.cursosHead;
    root.innerHTML =
      nav("cursos") +
      '<header class="case-head"><div class="wrap">' +
      '<p class="eyebrow">' + esc(h.eyebrow) + "</p>" +
      '<h1 class="rise">' + esc(h.titulo) + "</h1>" +
      (h.intro ? '<p class="lead rise">' + esc(h.intro) + "</p>" : "") +
      "</div></header>" +

      '<section class="section section--tight"><div class="wrap">' +
      '<div class="projects">' + SITE.cursos.map(cardCurso).join("") + "</div>" +
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
      nav("cursos") +
      '<header class="case-head"><div class="wrap">' +
      '<a class="back" href="cursos.html">&larr; Todos los cursos</a>' +
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
      '<a class="btn" href="mailto:' + esc(SITE.email) + '"><span class="dot"></span>' + esc(SITE.cta) + "</a>" +
      '<p class="hero__note">' + esc(SITE.bajada) + "</p>" +
      "</div></div></header>" +

      '<section class="section" id="proyectos"><div class="wrap">' +
      head(SITE.secciones.proyectos) +
      '<div class="projects">' + SITE.proyectos.map(card).join("") + "</div>" +
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
      '<div class="prose rise">' + h.parrafos.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +

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
      nav("proyectos") +
      '<header class="case-head"><div class="wrap">' +
      '<a class="back" href="index.html#proyectos">&larr; Todos los proyectos</a>' +
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
    cursos: cursos,
    curso: curso
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
})();
