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
      { t: "Servicios", h: active === "home" ? "#servicios" : "index.html#servicios", k: "servicios", movil: false },
      { t: "Historia", h: "historia.html", k: "historia" },
      { t: SITE.blog.texto, h: SITE.blog.url, k: "blog", externo: true }
    ];
    return (
      '<nav class="nav" id="nav"><div class="nav__in">' +
      '<a class="nav__name" href="index.html">' + esc(SITE.nombre) + ' <span>— ' + esc(SITE.rol) + "</span></a>" +
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
  ({ home: home, historia: historia, proyecto: proyecto }[page] || home)(root);

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

  /* Animacion de entrada */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8%" });
  document.querySelectorAll(".rise").forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i, 6) * 45 + "ms";
    io.observe(el);
  });
})();
