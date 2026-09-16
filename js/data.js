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

  /* ---------- Blog ----------
     Pestana del menu que apunta a la otra plataforma.
     Pega la URL aqui cuando la tengas y el enlace se activa solo
     (se abre en una pestana nueva). Mientras este vacia, la pestana
     aparece atenuada y no lleva a ninguna parte. */
  blog: {
    texto: "Blog",
    url: ""
  },

  /* ---------- Encabezados de seccion ----------
     Cada seccion abre con una etiqueta chica y un titulo grande.
     El campo "intro" es opcional: si lo dejas en "" no se muestra. */
  secciones: {
    /* El catálogo reúne proyectos y cursos en una sola grilla,
       ordenada del año más reciente al más antiguo. */
    catalogo: {
      eyebrow: "01 / Catálogo",
      titulo: "Todo lo que he hecho, de lo más reciente a lo más antiguo.",
      intro: "Siete cursos de creación propia para el Programa PENTA UC de la Pontificia Universidad Católica de Chile, junto a proyectos de diseño de servicios, fabricación digital y registro. Ninguno de los cursos existía antes: todos son innovación docente."
    },
    servicios: {
      eyebrow: "02 / Servicios",
      titulo: "Todo lo que una institución necesita para sostener un espacio maker.",
      intro: ""
    }
  },

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

  /* ---------- Encabezado de la página Cursos ---------- */
  cursosHead: {
    eyebrow: "Docencia",
    titulo: "Siete cursos de creación propia en PENTA UC.",
    intro: "Programa de Estudios y Desarrollo de Talentos de la Pontificia Universidad Católica de Chile. Diseñé cada uno de estos cursos desde cero — la propuesta, el programa, la metodología y el material — y los dicté entre 2023 y 2025. Ninguno existía antes: todos son innovación docente."
  },

  /* ---------- Cursos ----------
     Cada curso es una tarjeta en cursos.html y una página propia
     en curso.html?id=<id>.

     destacados  recuadros que se muestran bajo la descripción
     temario     una entrada por sesión, "detalle" es opcional
     galeria     tipo: "imagen" | "video" | "youtube"
     ---------------------------------------------------------- */
  cursos: [
    /* ============================================ 1 */
    {
      id: "tecnologia-futurista",
      nombre: "Tecnología Futurista",
      subtitulo: "Diseñando la tecnología de tu idea de futuro con impresión 3D",
      etiqueta: "Curso semestral",
      anio: "2023",
      periodo: "Segundo semestre 2023",
      cargo: "Profesor titular y creador del curso",
      institucion: "PENTA UC",
      nivel: "7º y 8º básico",
      duracion: "12 sesiones",
      equipo: "Ayudante: Felipe Rivera, psicólogo educacional",
      resumen: "Imaginar cómo será la vida en el año 2100 y construir, con impresión 3D y electrónica básica, la tecnología que esa humanidad necesitaría para resolver sus problemas cotidianos.",
      portada: "assets/img/cursos/tecnologia-futurista-portada.jpg",
      descripcion: [
        "El curso parte de una pregunta que a los estudiantes de 7º y 8º les resulta irresistible: ¿cómo será vivir en el año 2100? En vez de responderla con una redacción, la respondimos construyendo. Cada equipo definió un futuro posible para la humanidad, identificó un problema cotidiano dentro de ese futuro y diseñó el objeto que lo resolvería.",
        "La columna vertebral es el Design Thinking en sus cinco etapas, pero aterrizado a herramientas que un estudiante de 13 años puede dominar en un semestre: diseño especulativo y referentes de ciencia ficción para empatizar, árbol de problemas para definir, Tinkercad y electrónica básica para idear, impresión 3D y materiales reutilizados para prototipar, y una feria de aprendizajes abierta al público para testear.",
        "El resultado fue un conjunto de objetos que funciona como un kit de lo que existiría en el futuro: prototipos que encienden luces, activan motores e incorporan piezas impresas en 3D diseñadas por los propios estudiantes."
      ],
      destacados: [
        {
          titulo: "Curso de creación propia",
          texto: "Diseñé la propuesta educativa completa: el concepto, los objetivos, la secuencia de doce sesiones, los instrumentos de evaluación y el material de clase. Fue mi primer curso en PENTA UC."
        }
      ],
      temario: [
        { titulo: "Presentación y primer prototipado", detalle: "Metodología del curso, formación de equipos y ejercicio de prototipado rápido como rompehielos." },
        { titulo: "Futuros posibles", detalle: "Referentes de cine y literatura, collage del futuro y primera demostración de impresión 3D." },
        { titulo: "Personajes y espacios del futuro", detalle: "Mapa de empatía por equipos y primeros modelados en Tinkercad." },
        { titulo: "Definir el problema", detalle: "Árbol de problemas e impresión 3D de los avances de la sesión anterior." },
        { titulo: "Idear soluciones", detalle: "Lluvia de ideas en equipo y primeros circuitos: encender un LED." },
        { titulo: "Evaluación intermedia", detalle: "Modelo 3D individual de la solución ideada, exportado a STL y preparado en Cura." },
        { titulo: "Primer prototipo", detalle: "Prototipado con materiales reutilizados junto a las piezas ya impresas." },
        { titulo: "Dominar la impresión 3D", detalle: "Parámetros de impresión y comprobación de los circuitos del proyecto." },
        { titulo: "Presentación de avances", detalle: "Exposición por equipos y retroalimentación entre pares." },
        { titulo: "Revisión con experto invitado", detalle: "Un profesional externo revisa los prototipos y conversa con los equipos." },
        { titulo: "Preparación de la feria", detalle: "Bitácora final del proyecto y prototipado definitivo." },
        { titulo: "Feria de aprendizajes", detalle: "Evaluación final: exposición abierta de los prototipos terminados." }
      ],
      galeria: [
        { tipo: "imagen", src: "assets/img/cursos/tecnologia-futurista-04.jpg", pie: "La impresora 3D trabajando en vivo durante la feria, junto a los prototipos terminados." },
        { tipo: "imagen", src: "assets/img/cursos/tecnologia-futurista-01.jpg", pie: "El puesto del curso, con el cartel del desafío: traer un control roto y llevarse una impresión 3D." },
        { tipo: "imagen", src: "assets/img/cursos/tecnologia-futurista-05.jpg", pie: "La mesa de exposición con los objetos del futuro construidos por los equipos." },
        { tipo: "imagen", src: "assets/img/cursos/tecnologia-futurista-03.jpg", pie: "Prototipo de un dispositivo de alimentación del futuro." },
        { tipo: "imagen", src: "assets/img/cursos/tecnologia-futurista-02.jpg", pie: "Interior de un prototipo: protoboard, motores y portapilas montados dentro de una carcasa de cartón." },
        { tipo: "imagen", src: "assets/img/cursos/tecnologia-futurista-06.jpg", pie: "El panel de cartón con el proceso completo del curso, montado para la feria." }
      ]
    },

    /* ============================================ 2 */
    {
      id: "sostenibilidad-en-accion",
      nombre: "Sostenibilidad en acción",
      subtitulo: "Líderes del cambio para un mundo más verde",
      etiqueta: "Curso de verano",
      anio: "2024",
      periodo: "Temporada Académica de Verano, enero 2024",
      cargo: "Profesor titular y creador del curso",
      institucion: "PENTA UC",
      nivel: "I y II medio",
      duracion: "9 sesiones, lunes a viernes",
      equipo: "Ayudante: Belén Rebolledo, magíster en Territorio y Paisaje",
      resumen: "Desarmar objetos tecnológicos descartados para entender de qué están hechos, y rediseñarlos con electrónica básica para darles una segunda vida.",
      portada: "assets/img/cursos/sostenibilidad-portada.jpg",
      descripcion: [
        "La pregunta de entrada era concreta: ¿de qué está hecho lo que botamos? El curso empieza literalmente desarmando — controles de consola que dejaron de funcionar, abiertos con destornillador sobre la mesa hasta dejar cada componente a la vista y catalogado en una materioteca.",
        "Desde ahí el trabajo se vuelve proyectual. Con los Objetivos de Desarrollo Sostenible de la ONU y los principios de la economía circular como marco, cada equipo eligió un objeto cotidiano y lo rediseñó para reducir la cantidad de residuos que genera. La electrónica básica fue la herramienta que permitió que esos rediseños encendieran, se movieran y funcionaran de verdad.",
        "Al ser un curso de verano, la intensidad es otra: nueve sesiones seguidas de lunes a viernes, lo que obliga a un ritmo de proyecto mucho más comprimido que un semestre."
      ],
      destacados: [
        {
          titulo: "Curso de creación propia",
          texto: "Propuesta, programa, metodología y material diseñados por mí para la Temporada Académica de Verano de PENTA UC."
        }
      ],
      temario: [
        { titulo: "Residuos y objetos cotidianos", detalle: "Reconocer las problemáticas de la gestión de residuos y la sostenibilidad de los objetos artificiales." },
        { titulo: "Conceptos clave", detalle: "Economía circular, Objetivos de Desarrollo Sostenible y sociedad de consumo." },
        { titulo: "Desarmar para entender", detalle: "Desarme de objetos tecnológicos y construcción de una materioteca con los componentes." },
        { titulo: "Definir la problemática", detalle: "Selección del objeto a rediseñar y definición del usuario." },
        { titulo: "Prototipar", detalle: "Electrónica básica aplicada al rediseño del objeto elegido." },
        { titulo: "Presentación de avances", detalle: "Primeras versiones frente al curso." },
        { titulo: "Correcciones", detalle: "Ajustes a partir de la retroalimentación entre pares." },
        { titulo: "Evaluación final", detalle: "Exposición de los objetos rediseñados a un público específico." },
        { titulo: "Cierre", detalle: "Retroalimentación y reflexión sobre el proceso completo." }
      ],
      galeria: [
        { tipo: "imagen", src: "assets/img/cursos/sostenibilidad-01.jpg", pie: "Nueve controles desarmados y ordenados pieza por pieza: el punto de partida del curso." },
        { tipo: "imagen", src: "assets/img/cursos/sostenibilidad-02.jpg", pie: "Desarme de un control de consola, el primer ejercicio." },
        { tipo: "imagen", src: "assets/img/cursos/sostenibilidad-03.jpg", pie: "Materioteca: cada componente catalogado y dispuesto para su análisis." },
        { tipo: "imagen", src: "assets/img/cursos/sostenibilidad-04.jpg", pie: "Botones, gatillos y placas separados uno a uno." },
        { tipo: "imagen", src: "assets/img/cursos/sostenibilidad-05.jpg", pie: "Rediseño funcional con iluminación LED integrada." },
        { tipo: "imagen", src: "assets/img/cursos/sostenibilidad-06.jpg", pie: "Prototipo terminado: carcasa intervenida sobre electrónica recuperada." },
        { tipo: "imagen", src: "assets/img/cursos/sostenibilidad-07.jpg", pie: "Mapeo de materiales en la etapa de definición." }
      ]
    },

    /* ============================================ 3 */
    {
      id: "maquinas-fabulosas",
      nombre: "Máquinas fabulosas",
      subtitulo: "Diseño de juegos con mecanismos",
      etiqueta: "Curso semestral",
      anio: "2024",
      periodo: "Primer semestre 2024",
      cargo: "Profesor titular y creador del curso",
      institucion: "PENTA UC",
      nivel: "III y IV medio",
      duracion: "12 sesiones",
      equipo: "",
      resumen: "Palancas, poleas y engranajes llevados al diseño de juegos: mecanismos impresos en 3D que se convierten en experiencias lúdicas para un usuario real.",
      portada: "assets/img/cursos/maquinas-fabulosas-portada.jpg",
      descripcion: [
        "Este curso toma un contenido que suele quedarse en la pizarra —los mecanismos simples— y lo empuja hasta un producto jugable. Durante la primera mitad del semestre los estudiantes entienden y aplican palancas, poleas y engranajes, aprendiendo a modelarlos en Tinkercad y a imprimirlos en 3D con las tolerancias correctas para que encajen y giren.",
        "La segunda mitad cambia de registro: ya no se trata de que el mecanismo funcione, sino de que le sirva a alguien. Cada equipo construyó un perfil de usuario, definió una necesidad y transformó su mecanismo en una experiencia de juego diseñada para esa persona.",
        "Al ser III y IV medio, el nivel de exigencia técnica es el más alto de todos mis cursos: engranajes complejos modelados desde cero, sistemas de transmisión que combinan varias etapas y prototipos que tienen que resistir el uso repetido de quien juega."
      ],
      destacados: [
        {
          titulo: "Curso de creación propia",
          texto: "Diseñé el curso completo, incluida la progresión técnica que lleva de un mecanismo básico a un sistema de transmisión modelado e impreso por los propios estudiantes."
        }
      ],
      temario: [
        { titulo: "Presentación y formación de equipos", detalle: "Reglas, programa y planificación del trabajo del semestre." },
        { titulo: "Electrónica básica y palancas", detalle: "Primeros circuitos y el más simple de los mecanismos." },
        { titulo: "Tinkercad y poleas", detalle: "Modelado 3D aplicado a sistemas de transmisión por correa." },
        { titulo: "Engranajes", detalle: "Relaciones de transmisión, módulo y número de dientes." },
        { titulo: "Impresión 3D y creación de juegos", detalle: "Materializar los mecanismos y empezar a pensarlos como juego." },
        { titulo: "Evaluación intermedia", detalle: "Cada equipo presenta el mecanismo que llevará al proyecto final." },
        { titulo: "Etapas del proyecto final", detalle: "La metodología de diseño aplicada al trabajo que viene." },
        { titulo: "Definir usuario y problemática", detalle: "Qué necesidad resuelve el juego y para quién está pensado." },
        { titulo: "Idear y prototipar", detalle: "Primeras versiones jugables del proyecto." },
        { titulo: "Avances y retroalimentación", detalle: "Presentación al curso y crítica entre pares." },
        { titulo: "Mejorar y terminar", detalle: "Últimos ajustes mecánicos y de experiencia de juego." },
        { titulo: "Feria de aprendizajes", detalle: "Presentación del proyecto final para evaluación." }
      ],
      galeria: [
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-01.jpg", pie: "Engranajes impresos en 3D por los equipos: distintos módulos y relaciones de transmisión." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-02.jpg", pie: "Mecanismo de engranajes con manivela: la transmisión completa en una pieza ensamblada." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-03.jpg", pie: "Sistema de poleas construido con materiales simples para probar el principio antes de imprimirlo." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-07.jpg", pie: "Engranajes internos alojados en una carcasa impresa." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-06.jpg", pie: "Prueba de encaje sobre una base de cartón perforada." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-13.jpg", pie: "Construcción de la estructura del juego con cartón y silicona caliente." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-11.jpg", pie: "Presentación de un mecanismo de palancas ante el curso." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-14.jpg", pie: "Papelógrafo del proyecto junto al mecanismo terminado." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-09.jpg", pie: "Trabajo sobre el papelógrafo: perfil de usuario, referentes y decisiones de diseño." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-10.jpg", pie: "Documentación de un equipo: perfil del usuario, referentes y el mecanismo de engranajes elegido." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-05.jpg", pie: "Diagrama de un equipo: manivela, cinta transportadora y patas de soporte." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-04.jpg", pie: "Tablero de juego pintado a mano sobre el que corre el mecanismo." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-12.jpg", pie: "Demostración del juego terminado en la presentación final." },
        { tipo: "imagen", src: "assets/img/cursos/maquinas-fabulosas-08.jpg", pie: "Juego de mesa terminado, con piezas impresas en 3D." }
      ]
    },

    /* ============================================ 4 */
    {
      id: "robots-makers-en-accion",
      nombre: "Robots Makers en Acción",
      subtitulo: "Crea tu primer robot explorador",
      etiqueta: "Curso semestral",
      anio: "2024",
      periodo: "Segundo semestre 2024",
      cargo: "Profesor titular y creador del curso",
      institucion: "PENTA UC",
      nivel: "1º y 2º medio",
      duracion: "14 sesiones",
      equipo: "Ayudante: Elvis Andrade Torres",
      resumen: "El curso donde nació el robot educativo: un explorador construido desde cero, programado en Arduino y controlado por Wi-Fi, con piezas impresas en 3D por los propios estudiantes.",
      portada: "assets/img/cursos/robots-makers-portada.jpg",
      descripcion: [
        "Este es el curso que cambió los tres siguientes. Para poder enseñar robótica sin depender de kits comerciales caros y cerrados, junto a Elvis Andrade diseñamos y construimos un robot educativo propio: chasis, electrónica, puente H para el control de motores y firmware con control por Wi-Fi desde el navegador.",
        "Con esa base, los estudiantes no arman un kit siguiendo instrucciones: construyen su robot desde cero, lo programan en la IDE de Arduino y diseñan en Tinkercad las piezas que necesitan —brazos, pinzas, soportes— para que su explorador resuelva la misión que ellos mismos definieron.",
        "La primera mitad del semestre mantiene la estructura de futuros posibles y problemas cotidianos; la segunda se vuelca completamente al robot, la programación y el prototipado, hasta la feria de aprendizajes final que reúne a todos los cursos del programa."
      ],
      destacados: [
        {
          titulo: "Curso de creación propia",
          texto: "Propuesta, programa, metodología y material diseñados por mí."
        },
        {
          titulo: "Robot educativo desarrollado para este curso",
          texto: "Junto a Elvis Andrade creamos un robot educativo propio para poder dictar este curso: estructura, electrónica, control por Wi-Fi y piezas imprimibles. El mismo robot se convirtió después en la base de Misión Espacial y Robot Espacial."
        }
      ],
      temario: [
        { titulo: "Presentación y formación de equipos", detalle: "Programa, reglas y planificación del semestre." },
        { titulo: "Futuros posibles de la humanidad", detalle: "Diseño especulativo como punto de partida." },
        { titulo: "Problemas cotidianos del futuro", detalle: "Definición de la problemática que resolverá cada robot." },
        { titulo: "Programación básica e impresión 3D", detalle: "Primeros pasos en la IDE de Arduino y en el modelado de piezas." },
        { titulo: "Principios de impresión 3D", detalle: "Aplicarlos a las piezas que llevará el prototipo." },
        { titulo: "Primer robot", detalle: "Evaluación intermedia: robot funcional, papelógrafo y demostración en vivo." },
        { titulo: "Prototipar las soluciones", detalle: "Desarrollo de las propuestas presentadas en la evaluación intermedia." },
        { titulo: "Presentación de avances", detalle: "Estado del robot y de la solución frente al curso." },
        { titulo: "Mejora de la propuesta", detalle: "Ajustes mecánicos, electrónicos y de programación." },
        { titulo: "Retroalimentación entre pares", detalle: "Cada equipo evalúa el trabajo de los demás." },
        { titulo: "Segunda ronda de mejoras", detalle: "Últimas correcciones antes del cierre." },
        { titulo: "Preparación de la exposición", detalle: "Discurso, material gráfico y demostración." },
        { titulo: "Cierre del proyecto", detalle: "Presentación del proyecto final para evaluación." },
        { titulo: "Feria de aprendizajes", detalle: "Muestra conjunta con todos los cursos del programa." }
      ],
      galeria: [
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-01.jpg", pie: "El robot educativo en su versión de trabajo: chasis, motores, puente H y microcontrolador con Wi-Fi." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-08.jpg", pie: "Clase sobre el puente H y el control de motores, la pieza clave del robot." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-02.jpg", pie: "Primeras pruebas de desplazamiento sobre la mesa." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-03.jpg", pie: "Robot con pinza y accesorios diseñados e impresos por el equipo para cumplir su misión." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-04.jpg", pie: "Mesa de trabajo durante la preparación de los kits: motores reductores, herramientas y cableado." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-05.jpg", pie: "Placas y componentes preparados para el armado." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-09.jpg", pie: "Carrera de robots en el suelo de la sala durante la evaluación." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-06.jpg", pie: "Varios robots en desarrollo, cada uno con su propia carcasa y accesorios." },
        { tipo: "imagen", src: "assets/img/cursos/robots-makers-07.jpg", pie: "Prueba de desplazamiento con la carcasa montada." }
      ]
    },

    /* ============================================ 5 */
    {
      id: "mision-espacial",
      nombre: "Misión Espacial",
      subtitulo: "Robótica y exploración: construir robots que conquistan nuevos mundos",
      etiqueta: "Curso de verano",
      anio: "2025",
      periodo: "CREA UC, enero 2025",
      cargo: "Profesor titular y creador del curso",
      institucion: "CREA UC — PENTA UC",
      nivel: "8 y 9 años",
      duracion: "6 días, lunes a sábado",
      equipo: "",
      resumen: "La versión para niños y niñas de 8 y 9 años: una misión espacial distinta cada día, construyendo y programando robots exploradores con materiales cotidianos y piezas impresas en 3D.",
      portada: "assets/img/cursos/mision-espacial-portada.jpg",
      descripcion: [
        "Adaptar robótica real a estudiantes de 8 y 9 años obliga a cambiar todo el andamiaje sin bajar el nivel técnico. La solución fue estructurar el curso como una serie de misiones espaciales: cada día plantea un desafío concreto —navegar, aterrizar, desplazarse, personalizar— y el robot va creciendo misión a misión.",
        "El robot educativo desarrollado el semestre anterior hizo posible este curso. Al tener una base propia y confiable, pude entregar a niños de esa edad un robot que de verdad se mueve y se controla, en lugar de una maqueta que solo lo aparenta.",
        "La evaluación es por niveles —básico, medio y avanzado— dentro de cada misión, lo que permite que un grupo con ritmos muy distintos avance junto sin que nadie quede fuera. El curso cierra con una muestra, un discurso preparado por cada equipo y entrega de diplomas."
      ],
      destacados: [
        {
          titulo: "Curso de creación propia",
          texto: "Diseñé la propuesta completa para CREA UC, incluida la adaptación de contenidos de robótica a un rango etario de 8 y 9 años."
        },
        {
          titulo: "Sobre el robot educativo",
          texto: "Este curso se apoya en el robot educativo que creamos con Elvis Andrade para Robots Makers en Acción."
        }
      ],
      temario: [
        { titulo: "Empatizar: ¿qué es un robot?", detalle: "Tipos, usos y rol de los robots en la exploración espacial. Actividad de integración." },
        { titulo: "Definir: electrónica básica", detalle: "Misión 2: diseñar un sistema para navegar el espacio y sortear los desafíos identificados." },
        { titulo: "Idear: sistema de aterrizaje", detalle: "Misión 3: prototipo de aterrizaje con materiales simples y simulación con pesos." },
        { titulo: "Prototipar: el vehículo", detalle: "Conexión de motores al control remoto, ensamblaje y optimización del vehículo." },
        { titulo: "Testear: personalización y discurso", detalle: "Terminar los prototipos, preparar la maqueta y el discurso de presentación." },
        { titulo: "Muestra final", detalle: "Ensayo general, presentación de cada equipo y entrega de diplomas." }
      ],
      galeria: [
        { tipo: "imagen", src: "assets/img/cursos/mision-espacial-01.jpg", pie: "La flota de robots durante la preparación del curso." },
        { tipo: "imagen", src: "assets/img/cursos/mision-espacial-02.jpg", pie: "Robots y notebooks listos para la sesión del día." },
        { tipo: "imagen", src: "assets/img/cursos/mision-espacial-03.jpg", pie: "Los robots dispuestos en la sala antes de empezar la misión." },
        { tipo: "imagen", src: "assets/img/cursos/mision-espacial-07.jpg", pie: "Primer circuito: encender un LED en la protoboard." },
        { tipo: "imagen", src: "assets/img/cursos/mision-espacial-05.jpg", pie: "Robot con la estructura y los personajes de la misión montados encima." },
        { tipo: "imagen", src: "assets/img/cursos/mision-espacial-06.jpg", pie: "Robot personalizado por su equipo al cierre del curso." },
        { tipo: "imagen", src: "assets/img/cursos/mision-espacial-04.jpg", pie: "El terreno de la misión, dibujado y construido por los equipos." }
      ]
    },

    /* ============================================ 6 */
    {
      id: "robot-espacial",
      nombre: "Robot Espacial",
      subtitulo: "Crea y controla tu robot explorador",
      etiqueta: "Curso semestral",
      anio: "2025",
      periodo: "Primer semestre 2025",
      cargo: "Profesor titular y creador del curso",
      institucion: "PENTA UC",
      nivel: "7º y 8º básico",
      duracion: "12 sesiones",
      equipo: "",
      resumen: "Un semestre completo de exploración espacial: del primer circuito al robot controlado remotamente por Wi-Fi, con piezas propias modeladas en Tinkercad.",
      portada: "assets/img/cursos/robot-espacial-portada.jpg",
      descripcion: [
        "Robot Espacial lleva la lógica de las misiones a un formato semestral, con más tiempo para profundizar en cada capa técnica. Los estudiantes empiezan por entender las problemáticas reales de los viajes espaciales y terminan con un robot explorador que programan y controlan de forma remota a través de Wi-Fi.",
        "La progresión es deliberada: primero la metodología de diseño para abordar problemas complejos, después electrónica, después programación, y solo entonces el modelado 3D de las piezas que cada robot necesita. Cada capa se evalúa antes de montar la siguiente.",
        "El curso usa el mismo robot educativo de base, lo que permite dedicar el tiempo de clase a diseñar y resolver en vez de a pelear con hardware que no funciona."
      ],
      destacados: [
        {
          titulo: "Curso de creación propia",
          texto: "Propuesta, programa, metodología y material diseñados por mí."
        },
        {
          titulo: "Sobre el robot educativo",
          texto: "Tercer curso construido sobre el robot que creamos con Elvis Andrade para Robots Makers en Acción."
        }
      ],
      temario: [
        { titulo: "Introducción a la exploración espacial", detalle: "Problemáticas reales de los viajes espaciales como punto de partida." },
        { titulo: "Metodología de diseño", detalle: "Cómo abordar problemas complejos desde la creación de prototipos." },
        { titulo: "Fundamentos de electrónica básica", detalle: "Circuitos, componentes y primeras conexiones." },
        { titulo: "Introducción a la programación", detalle: "Estructura del código y control de los primeros movimientos." },
        { titulo: "Preparación de la evaluación intermedia", detalle: "Instrucciones, rúbrica y organización de los equipos." },
        { titulo: "Evaluación intermedia", detalle: "Propuestas frente a las problemáticas de los viajes espaciales." },
        { titulo: "Introducción al modelado 3D", detalle: "Tinkercad aplicado a las piezas que necesita cada robot." },
        { titulo: "Programación del robot", detalle: "Control de motores y comunicación por Wi-Fi." },
        { titulo: "Pruebas finales y optimización", detalle: "Ajuste del comportamiento del robot en recorridos de prueba." },
        { titulo: "Preparación de la evaluación final", detalle: "Material de presentación y ensayo." },
        { titulo: "Evaluación final y feria de aprendizajes", detalle: "Muestra de los robots terminados." },
        { titulo: "Retroalimentación final", detalle: "Cierre y reflexión sobre el proceso del semestre." }
      ],
      galeria: [
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-01.jpg", pie: "Motores, ruedas y controladores preparados para el armado." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-05.jpg", pie: "Preparación de los kits antes de la sesión." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-07.jpg", pie: "Clase de modelado 3D: cada estudiante trabajando su pieza en Tinkercad." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-06.jpg", pie: "Pieza personalizada modelada en Tinkercad antes de imprimirla." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-08.jpg", pie: "Modelado de una carcasa a medida para el robot." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-11.jpg", pie: "La interfaz de control del robot, programada por los estudiantes en HTML." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-12.jpg", pie: "Control LED Galáctico: una de las interfaces desarrolladas por un equipo." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-13.jpg", pie: "Código e interfaz lado a lado durante el desarrollo." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-02.jpg", pie: "Prototipo de estructura construido con materiales simples antes del montaje electrónico." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-03.jpg", pie: "Carcasa de cartón montada sobre el chasis, con la electrónica y las baterías alojadas dentro." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-14.jpg", pie: "Robot terminado con carcasa de cartón diseñada por su equipo." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-10.jpg", pie: "Robot con carcasa impresa en 3D, listo para la evaluación." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-09.jpg", pie: "Terreno de la misión construido para la evaluación final." },
        { tipo: "imagen", src: "assets/img/cursos/robot-espacial-04.jpg", pie: "Prueba de recorrido sobre un terreno construido en la sala." }
      ]
    },

    /* ============================================ 7 */
    {
      id: "robots-y-juegos",
      nombre: "Al tablero y Robots",
      subtitulo: "Robots y juegos inteligentes",
      etiqueta: "Curso semestral",
      anio: "2025",
      periodo: "Segundo semestre 2025",
      cargo: "Profesor titular y creador del curso",
      institucion: "PENTA UC",
      nivel: "PLACEHOLDER — nivel al que se impartió",
      duracion: "En curso",
      equipo: "",
      resumen: "Robots que juegan: programación por bloques y código, diseño centrado en el usuario y tableros construidos por los propios equipos para poner a prueba cada máquina.",
      portada: "assets/img/cursos/robots-juegos-portada.jpg",
      descripcion: [
        "El curso más reciente cruza las dos líneas que venía trabajando por separado: la robótica de los cursos espaciales y el diseño de juegos de Máquinas fabulosas. Los equipos ensamblan un robot, lo programan primero por bloques y después modificando el código directamente, y construyen el tablero o terreno sobre el que ese robot tiene que desempeñarse.",
        "La etapa de empatía es explícita: cada equipo elige un tipo de usuario —niños pequeños, adultos mayores, alguien con una necesidad específica— y define cómo debe comportarse el robot para esa persona. El diseño de interacción deja de ser un accesorio y pasa a determinar la mecánica del juego.",
        "PLACEHOLDER — El curso está en desarrollo. Cuando termine, actualiza esta descripción con los resultados y agrega las sesiones que faltan al temario."
      ],
      destacados: [
        {
          titulo: "Curso de creación propia",
          texto: "Propuesta, programa, metodología y material diseñados por mí."
        }
      ],
      temario: [
        { titulo: "Introducción y desafío de prototipado", detalle: "Pensamiento de diseño y trabajo en equipo: primer prototipo con materiales reciclados." },
        { titulo: "Exploración del kit y prototipo físico", detalle: "Componentes del robot, instalación de la IDE y planificación en papel antes de construir en cartón." },
        { titulo: "Programación básica y diseño 3D", detalle: "Carga de código, control por Wi-Fi desde el navegador y modelado de herramientas en Tinkercad." },
        { titulo: "Profundización en programación", detalle: "Estructuras condicionales y de repetición, y revisión de la rúbrica del desafío intermedio." },
        { titulo: "Integración de programación y prototipo", detalle: "Coordinar electrónica, código y estructura física en un único sistema funcional." },
        { titulo: "Evaluación intermedia", detalle: "Robot funcional capaz de resolver el desafío definido, con presentación y bitácora." }
      ],
      galeria: [
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-08.jpg", pie: "Tablero terminado de un equipo: el recorrido dibujado a mano y el microcontrolador montado sobre el mapa." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-09.jpg", pie: "El robot controlado desde el teléfono mientras recorre el tablero." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-01.jpg", pie: "Robot sobre el mapa de papel durante una partida de prueba." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-02.jpg", pie: "Recorrido completo del tablero, con las zonas dibujadas por el equipo." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-03.jpg", pie: "Tablero de juego diseñado por un equipo, con piezas impresas en 3D." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-10.jpg", pie: "Arena de cartón con cuadrícula y arcos: otro formato de desafío para el mismo robot." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-11.jpg", pie: "El mazo de cartas del juego: Concepto, Objeto y Restricción, las tres variables con las que juegan los equipos." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-15.jpg", pie: "Electrónica y cartas dispuestas para una sesión de prueba." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-16.jpg", pie: "Pantalla LCD y protoboard: la interfaz física del juego." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-04.jpg", pie: "Mesa de trabajo durante el diseño de la mecánica del juego." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-05.jpg", pie: "Cartas, fichas y componentes del juego en desarrollo." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-12.jpg", pie: "Panel de storyboard: cada viñeta es un momento de la partida." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-13.jpg", pie: "Plano del recorrido dibujado a mano antes de construirlo." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-14.jpg", pie: "Bocetos de mecánica de juego sobre la mesa de trabajo." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-17.jpg", pie: "Partida de prueba sobre el terreno con relieve." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-06.jpg", pie: "Prueba del robot sobre un terreno con relieve." },
        { tipo: "imagen", src: "assets/img/cursos/robots-juegos-07.jpg", pie: "Primeras pruebas de recorrido sobre el mapa de papel." }
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
