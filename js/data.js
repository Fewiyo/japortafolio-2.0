/* =============================================================
   data.js — EDITA SOLO ESTE ARCHIVO PARA CAMBIAR EL CONTENIDO
   Todo el sitio (inicio, proyectos, historia) se genera desde aquí.
   ============================================================= */

const SITE = {
  /* ---------- Identidad ---------- */
  nombre: "Vicente Cáceres Farías",
  rol: "Diseñador industrial",
  email: "vicentecfarias@gmail.com",

  /* Titular del inicio. El texto entre <em> queda en gris. */
  titular:
    "Hola, soy Vicente, diseñador industrial que crea <em>laboratorios, servicios y experiencias de aprendizaje</em> para instituciones educativas.",

  /* Frase corta bajo el botón */
  bajada:
    "8+ años entre docencia, diseño de servicios y fabricación digital. Desde el aula hasta la puesta en marcha de FabLabs.",

  cta: "Conversemos un proyecto",

  /* ---------- Redes / enlaces ---------- */
  redes: [
    { nombre: "Behance",   url: "https://behance.net/vcntja" },
    { nombre: "Instagram", url: "https://instagram.com/estudia3d" },
    { nombre: "LinkedIn",  url: "https://www.linkedin.com/in/vicente-caceres-farias" },
    { nombre: "CV (PDF)",  url: "assets/files/cv-vicente-caceres.pdf" }
  ],

  /* ---------- Servicios ---------- */
  servicios: [
    {
      titulo: "Diseño de servicios",
      texto:
        "Mapeo de experiencia, arquitectura de la propuesta y modelos de gestión. Aterrizo procesos complejos en servicios que una institución puede operar de verdad."
    },
    {
      titulo: "Creación de FabLabs",
      texto:
        "Del plano al primer prototipo: layout, selección de maquinaria, protocolos de seguridad, presupuesto y formación del equipo que quedará a cargo."
    },
    {
      titulo: "Docencia y STEAM",
      texto:
        "Diseño de programas y kits educativos con metodología Design Thinking. Clases, talleres y material para docentes que replican el modelo."
    },
    {
      titulo: "Fabricación digital",
      texto:
        "Modelado 3D, impresión, corte láser y electrónica aplicada. Prototipos funcionales y piezas didácticas listas para uso en aula."
    }
  ],

  /* ---------- Proyectos ----------
     id: se usa en la URL → proyecto.html?id=salas-maker
     img: ruta de portada. Deja "" para usar un marcador generado.
     ---------------------------------------------------------- */
  proyectos: [
    {
      id: "salas-maker",
      titulo: "Salas Maker",
      cliente: "Ideo Maker",
      anio: "2022 — 2024",
      tags: ["Diseño de servicios", "FabLab", "Docencia"],
      resumen:
        "Modelo replicable de sala maker escolar: layout, equipamiento, protocolos y programa de formación docente.",
      img: "",
      /* Bloques del caso de estudio. tipo: "texto" | "imagen" | "cita" | "lista" */
      bloques: [
        { tipo: "texto", valor: "PLACEHOLDER — Describe aquí el contexto: quién era el cliente, qué problema tenía y por qué te llamaron. Dos o tres párrafos bastan." },
        { tipo: "lista", titulo: "Mi rol", valor: ["Diagnóstico y levantamiento de requerimientos", "Diseño del layout y selección de maquinaria", "Protocolos de seguridad y uso", "Formación del equipo docente"] },
        { tipo: "imagen", valor: "", pie: "PLACEHOLDER — pie de foto." },
        { tipo: "texto", valor: "PLACEHOLDER — Cuenta el proceso y las decisiones de diseño que tomaste." },
        { tipo: "cita", valor: "PLACEHOLDER — Una frase del cliente o un dato de impacto funciona muy bien aquí." },
        { tipo: "texto", titulo: "Resultado", valor: "PLACEHOLDER — Cierra con números: cuántas salas, cuántos estudiantes, qué quedó operando." }
      ]
    },
    {
      id: "kits-educativos",
      titulo: "Kits educativos Bicho-bot",
      cliente: "Ideo Maker",
      anio: "2023",
      tags: ["Producto", "STEAM", "Fabricación digital"],
      resumen:
        "Kit de robótica de bajo costo para primer ciclo, diseñado para armarse sin herramientas y fabricarse por corte láser.",
      img: "",
      bloques: [
        { tipo: "texto", valor: "PLACEHOLDER — Contexto del proyecto." },
        { tipo: "imagen", valor: "", pie: "PLACEHOLDER — pie de foto." },
        { tipo: "texto", titulo: "Resultado", valor: "PLACEHOLDER — Impacto y aprendizajes." }
      ]
    },
    {
      id: "salud-mental",
      titulo: "Proyecto de título: Salud mental",
      cliente: "Universidad Diego Portales",
      anio: "2021",
      tags: ["Investigación", "Diseño de servicios"],
      resumen:
        "Investigación y propuesta de servicio en torno a la salud mental juvenil, desarrollada como proyecto de título.",
      img: "",
      bloques: [
        { tipo: "texto", valor: "PLACEHOLDER — Contexto y pregunta de investigación." },
        { tipo: "imagen", valor: "", pie: "PLACEHOLDER — pie de foto." },
        { tipo: "texto", titulo: "Resultado", valor: "PLACEHOLDER — Conclusiones." }
      ]
    },
    {
      id: "docencia-uc",
      titulo: "Docencia PENTA UC",
      cliente: "Pontificia Universidad Católica de Chile",
      anio: "2022 — 2024",
      tags: ["Docencia", "STEAM", "Programa"],
      resumen:
        "Diseño y dictado de cursos de fabricación digital y pensamiento de diseño para estudiantes de talento académico.",
      img: "",
      bloques: [
        { tipo: "texto", valor: "PLACEHOLDER — Qué cursos, a quiénes, con qué enfoque." },
        { tipo: "imagen", valor: "", pie: "PLACEHOLDER — pie de foto." },
        { tipo: "texto", titulo: "Resultado", valor: "PLACEHOLDER — Impacto." }
      ]
    },
    {
      id: "registro-fotografico",
      titulo: "Registro fotográfico",
      cliente: "OPS / PAHO",
      anio: "2023",
      tags: ["Fotografía", "Documentación"],
      resumen:
        "Cobertura fotográfica de terreno para la Organización Panamericana de la Salud.",
      img: "",
      bloques: [
        { tipo: "texto", valor: "PLACEHOLDER — Encargo y condiciones del registro." },
        { tipo: "imagen", valor: "", pie: "PLACEHOLDER — pie de foto." }
      ]
    },
    {
      id: "diseno-editorial",
      titulo: "Diseño editorial",
      cliente: "Converso",
      anio: "2021",
      tags: ["Editorial", "Identidad"],
      resumen:
        "Sistema editorial y piezas gráficas como jefe de diseño gráfico.",
      img: "",
      bloques: [
        { tipo: "texto", valor: "PLACEHOLDER — Contexto." },
        { tipo: "imagen", valor: "", pie: "PLACEHOLDER — pie de foto." }
      ]
    }
  ],

  /* ---------- Página Historia ---------- */
  historia: {
    titular: "Diseño cosas que otras personas tienen que poder mantener funcionando.",
    parrafos: [
      "PLACEHOLDER — Empieza por dónde partiste. Diseño industrial en la Universidad Diego Portales, y desde ahí el desvío hacia la educación y la fabricación digital.",
      "PLACEHOLDER — Cuenta qué te interesa realmente: que un FabLab siga vivo tres años después de la inauguración, que un profesor pueda dar la clase sin ti al lado.",
      "PLACEHOLDER — Cierra con dónde estás hoy y qué tipo de proyectos buscas."
    ],
    /* Trayectoria: [años, cargo, organización] */
    trayectoria: [
      ["2022 — 2024", "Director de Sistemas de Gestión", "Ideo Maker"],
      ["2022 — 2024", "Docente", "Pontificia Universidad Católica de Chile"],
      ["2023",        "Fotógrafo", "Organización Panamericana de la Salud"],
      ["2021",        "Jefe de Diseño Gráfico", "Converso"]
    ],
    colaboraciones: [
      "Ideo Maker", "PENTA UC", "OPS/PAHO", "Universidad Diego Portales",
      "Universidad Alberto Hurtado", "País Digital", "LH&A London",
      "Municipalidad de Lo Barnechea", "TICAL"
    ]
  },

  footer: "Actualmente abierto a colaboraciones"
};
