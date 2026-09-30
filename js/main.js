/* =========================================================
   main.js — solo comportamiento.

   Antes este archivo dibujaba el sitio entero en el navegador. Ya no:
   el HTML lo escribe tools/construir.py en cada commit, leyendo
   js/data.js, y llega al visitante con todo el texto adentro.

   Acá queda únicamente lo que de verdad necesita ocurrir en el
   navegador. Si algo de esto falla, la página se sigue leyendo entera.

   Para cambiar contenido se edita js/data.js y se vuelve a construir.
   ========================================================= */

(function () {
  "use strict";

  /* Textos de la interfaz en el idioma de la pagina (lang del <html>). */
  var EN = document.documentElement.lang === "en";
  var T = EN ? {
    foto: "Enlarged photo", cerrar: "Close", ant: "Previous photo", sig: "Next photo",
    menos: "Show fewer tags", otras: "Show the other ", uno: " project", varios: " projects",
    con: " tagged ", completa: "Please add your name, a valid email and a message.",
    enviando: "Sending…", error: "It could not be sent. Write to me directly at "
  } : {
    foto: "Foto ampliada", cerrar: "Cerrar", ant: "Foto anterior", sig: "Foto siguiente",
    menos: "Ver menos etiquetas", otras: "Ver las otras ", uno: " proyecto", varios: " proyectos",
    con: " con la etiqueta ", completa: "Completa tu nombre, un correo válido y el mensaje.",
    enviando: "Enviando…", error: "No se pudo enviar. Escríbeme directo a "
  };

  /* ---------- Tema claro/oscuro (por defecto oscuro) ---------- */
  var btn = document.getElementById("theme");
  var colorBarra = document.querySelector('meta[name="theme-color"]');
  if (btn) {
    var marcar = function () {
      var oscuro = document.documentElement.dataset.theme === "dark";
      btn.setAttribute("aria-checked", oscuro ? "true" : "false");
      /* la barra del navegador en el celular toma el fondo del tema */
      if (colorBarra) colorBarra.content = oscuro ? "#0b0b0b" : "#ffffff";
    };
    marcar();
    btn.addEventListener("click", function () {
      var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("tema", next); } catch (e) {}
      marcar();
    });
  }

  /* ---------- La pestaña del blog no navega mientras no tenga URL ---------- */
  document.querySelectorAll('.nav__links a[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  /* ---------- Menú del celular ----------
     El botón abre y cierra el panel. Se cierra al elegir un destino,
     con Escape, al tocar fuera o si la ventana pasa a tamaño escritorio. */
  var menuBtn = document.getElementById("menu-btn");
  var navMenu = document.getElementById("nav");
  if (menuBtn && navMenu) {
    var abrirMenu = function (si) {
      navMenu.classList.toggle("menu-abierto", si);
      menuBtn.setAttribute("aria-expanded", si ? "true" : "false");
    };
    menuBtn.addEventListener("click", function () {
      abrirMenu(!navMenu.classList.contains("menu-abierto"));
    });
    navMenu.querySelectorAll(".nav__menu a").forEach(function (a) {
      a.addEventListener("click", function () { abrirMenu(false); });
    });
    addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("menu-abierto")) { abrirMenu(false); menuBtn.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target)) abrirMenu(false);
    });
    addEventListener("resize", function () { if (innerWidth >= 820) abrirMenu(false); }, { passive: true });
  }

  /* ---------- Borde de la barra al hacer scroll ---------- */
  var navEl = document.getElementById("nav");
  if (navEl) {
    var onScroll = function () { navEl.classList.toggle("is-stuck", scrollY > 8); };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Animación de entrada ----------
     Es un adorno: el contenido NUNCA puede depender de ella. Por eso hay
     tres formas de revelar un elemento, de más fina a más bruta:
       1. el observador, cuando entra en pantalla
       2. un repaso en cada scroll, que además atrapa lo que quedó arriba
          tras un salto de ancla (el observador no avisa de eso)
       3. una red de seguridad a los 2s, por si el navegador nunca
          reporta intersecciones (pestaña oculta, viewport de alto cero,
          impresión a PDF, vistas previas). */
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
  function repasar() {
    if (!innerHeight) return;           // viewport sin alto: no hay nada que medir
    pendientes = pendientes.filter(function (el) {
      if (el.getBoundingClientRect().top < innerHeight * 0.92) { revelar(el); return false; }
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

  /* ---------- Visor de fotos ----------
     Cada foto de ficha es un enlace a su propio archivo: sin JavaScript,
     pincharla abre la imagen sola. Con JavaScript se abre encima de la
     página, con flechas para pasar entre las fotos de esa misma ficha. */
  var ampliables = [].slice.call(document.querySelectorAll("a.ampliar"));
  if (ampliables.length) {
    var visor = document.createElement("div");
    visor.className = "visor";
    visor.hidden = true;
    visor.setAttribute("role", "dialog");
    visor.setAttribute("aria-modal", "true");
    visor.setAttribute("aria-label", T.foto);
    visor.innerHTML =
      '<img alt="">' +
      '<p class="visor__pie"></p>' +
      '<button type="button" class="visor__cerrar" aria-label="' + T.cerrar + '">&times;</button>' +
      '<button type="button" class="visor__ant" aria-label="' + T.ant + '">&lsaquo;</button>' +
      '<button type="button" class="visor__sig" aria-label="' + T.sig + '">&rsaquo;</button>';
    document.body.appendChild(visor);

    var vImg = visor.querySelector("img");
    var vPie = visor.querySelector(".visor__pie");
    var vAnt = visor.querySelector(".visor__ant");
    var vSig = visor.querySelector(".visor__sig");
    var actual = 0, volverA = null;

    var mostrar = function (i) {
      actual = (i + ampliables.length) % ampliables.length;
      var a = ampliables[actual];
      var pie = a.parentNode.querySelector("figcaption");
      vImg.src = a.getAttribute("href");
      vImg.alt = a.querySelector("img").alt;
      vPie.textContent = pie ? pie.textContent : "";
      vAnt.hidden = vSig.hidden = ampliables.length < 2;
    };
    var abrir = function (i) {
      volverA = document.activeElement;
      mostrar(i);
      visor.hidden = false;
      document.documentElement.classList.add("visor-abierto");
      visor.querySelector(".visor__cerrar").focus();
    };
    var cerrar = function () {
      visor.hidden = true;
      vImg.removeAttribute("src");
      document.documentElement.classList.remove("visor-abierto");
      if (volverA) volverA.focus();
    };

    ampliables.forEach(function (a, i) {
      a.addEventListener("click", function (e) { e.preventDefault(); abrir(i); });
    });
    visor.querySelector(".visor__cerrar").addEventListener("click", cerrar);
    vAnt.addEventListener("click", function () { mostrar(actual - 1); });
    vSig.addEventListener("click", function () { mostrar(actual + 1); });
    visor.addEventListener("click", function (e) { if (e.target === visor) cerrar(); });

    /* En el celular: deslizar hacia el lado pasa de foto, hacia abajo
       cierra, como en la app de fotos del telefono. */
    var x0 = null, y0 = null;
    visor.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    visor.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) mostrar(actual + (dx < 0 ? 1 : -1));
      else if (dy > 80 && dy > Math.abs(dx)) cerrar();
    }, { passive: true });
    addEventListener("keydown", function (e) {
      if (visor.hidden) return;
      if (e.key === "Escape") cerrar();
      else if (e.key === "ArrowLeft") mostrar(actual - 1);
      else if (e.key === "ArrowRight") mostrar(actual + 1);
    });
  }

  /* ---------- Filtrado del catálogo ----------
     Trabaja sobre las tarjetas que ya vienen en el HTML: no genera nada.
     Cada tarjeta trae sus etiquetas en data-tags. Al mostrar una se la
     revela de inmediato, porque el observador ya la soltó. */
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
          ? T.menos
          : T.otras + barra.querySelectorAll(".filtro--extra").length;
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
        ? visibles + (visibles === 1 ? T.uno : T.varios) + T.con + tag
        : "";
    });
  }

  /* ---------- Formulario de contacto ----------
     Sin JavaScript el botón del inicio baja al pie con el correo. */
  var dialogo = document.getElementById("form-contacto");
  if (dialogo && dialogo.showModal) {
    var form = dialogo.querySelector("form");
    var aviso = form.querySelector(".form__estado");
    var enviar = form.querySelector('button[type="submit"]');

    [].forEach.call(document.querySelectorAll("[data-abrir-form]"), function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        dialogo.showModal();
        form.querySelector("input").focus();
      });
    });
    form.querySelector("[data-cerrar-form]").addEventListener("click", function () { dialogo.close(); });
    dialogo.addEventListener("click", function (e) { if (e.target === dialogo) dialogo.close(); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      aviso.classList.remove("es-error");
      if (!form.checkValidity()) {
        aviso.textContent = T.completa;
        aviso.classList.add("es-error");
        return;
      }
      enviar.disabled = true;
      aviso.textContent = T.enviando;
      fetch(form.action, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset();
        aviso.textContent = form.dataset.enviado;
      }).catch(function () {
        aviso.textContent = T.error + form.action.split("/").pop() + ".";
        aviso.classList.add("es-error");
      }).then(function () { enviar.disabled = false; });
    });
  }
})();
