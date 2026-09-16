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
      intro: "Siete cursos de creación propia para el Programa PENTA UC de la Pontificia Universidad Católica de Chile, diez aplicaciones y plataformas web construidas con IA, y proyectos de diseño de servicios y fabricación digital. Todo del mismo porte y ordenado por fecha: ninguno pesa más que otro por dónde quedó en la grilla."
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
     img: portada de la tarjeta del catálogo.
     bloques: el caso de estudio, de arriba a abajo.
              tipo: "texto" | "imagen" | "cita" | "lista"
     ---------------------------------------------------------- */
  proyectos: [
    {
      id: "haalur",
      titulo: "HAALUR",
      cliente: "Universidad Diego Portales",
      anio: "2018",
      tags: ["Vehículo solar", "Diseño industrial", "Fotografía", "Competencia"],
      resumen:
        "Auto solar con el que ganamos el primer lugar de la categoría Cruiser en la Carrera Solar Atacama 2018. Fui ayudante de diseño y fotógrafo del equipo.",
      img: "assets/img/proyectos/haalur/01-portada.jpg",
      bloques: [
        { tipo: "lista", titulo: "Mi rol", valor: ["Ayudante de diseño del vehículo", "Fotógrafo oficial del equipo", "Registro de la construcción y de la carrera"] },
        { tipo: "texto", valor: "HAALUR es el auto solar que la Universidad Diego Portales llevó a la Carrera Solar Atacama 2018, donde obtuvo el primer lugar en la categoría Cruiser. Trabajé en el equipo como ayudante de diseño y como fotógrafo: las imágenes de esta página son mías, desde el taller hasta la meta en Arica." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/02-construccion.jpg", pie: "El vehículo en construcción, con la carrocería todavía sin pintar." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/03-chasis.jpg", pie: "Estructura y habitáculo antes del montaje de los paneles." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/13-taller.jpg", pie: "Taller: montaje de los paneles sobre la carrocería, todavía en blanco." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/04-equipo-trabajando.jpg", pie: "Ajustes en ruta: buena parte de la carrera se corre con el auto abierto." },
        { tipo: "texto", titulo: "La competencia", valor: "La edición 2018 fue la más exigente hasta esa fecha. Once equipos enfrentaron el tráfico de la capital, la costa chilena y el desierto de Atacama, en un recorrido de más de 2.500 kilómetros entre Santiago y Arica. Ese año el reglamento se alineó con el del Bridgestone World Solar Challenge, y por primera vez la carrera se corrió en formato continuo en vez de por etapas: cada día se retomaba donde había terminado el anterior." },
        { tipo: "texto", valor: "La categoría Cruiser, estrenada esa edición, reúne vehículos de múltiples ocupantes diseñados para ser prácticos, eficientes y confiables. Son los que más se parecen a un auto de verdad, y por eso mismo los más difíciles: hay que resolver autonomía y espacio habitable al mismo tiempo." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/05-en-pista.jpg", pie: "El auto en pista durante las pruebas previas a la carrera." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/12-equipo-en-el-auto.jpg", pie: "Dos del equipo en el habitáculo, revisando antes de salir." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/06-desierto.jpg", pie: "Ruta de Atacama: más de 2.500 kilómetros entre Santiago y Arica." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/07-atardecer.jpg", pie: "Fin de jornada en ruta." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/11-equipo-en-ruta.jpg", pie: "El equipo completo con el auto, en una parada de la ruta." },
        { tipo: "texto", valor: "Un auto solar no lo hace un diseñador. Lo hace un equipo grande, de varias carreras, que vive tres semanas en la ruta con el vehículo. Mi trabajo fue doble: ayudar en el diseño y ser quien registraba. La mayoría de las fotos de esta página existen porque alguien tenía que dejar constancia de lo que estaba pasando, y ese era yo." },
        { tipo: "cita", valor: "Primer lugar, categoría Cruiser, Carrera Solar Atacama 2018." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/08-podio.jpg", pie: "El equipo en el podio." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/09-meta.jpg", pie: "Llegada a Arica." },
        { tipo: "imagen", valor: "assets/img/proyectos/haalur/10-prensa.jpg", pie: "Cobertura de prensa de la partida de la carrera." }
      ]
    },
    {
      id: "salas-maker",
      titulo: "Sala Maker STEAM",
      cliente: "Ideo Maker y Fundación País Digital",
      anio: "2024",
      tags: ["FabLab", "Diseño de espacios", "Modelado 3D", "Educación"],
      resumen:
        "Sala maker escolar modelada y recorrida en 3D antes de construirse, para discutir el espacio con la institución cuando cambiarlo todavía era gratis.",
      img: "assets/img/proyectos/salas-maker/01-render-steam.jpg",
      bloques: [
        { tipo: "texto", valor: "Sala Maker STEAM desarrollada en conjunto entre el equipo de Ideo Maker y la Fundación País Digital. El proyecto tuvo dos etapas: primero el espacio modelado y recorrido en 3D, y después la sala construida y en uso." },
        { tipo: "texto", valor: "Modelar la sala antes de construirla no es un ejercicio de presentación. Permite discutir circulaciones, ubicación de maquinaria y zonas de trabajo con la institución en el momento en que mover una mesa cuesta un clic y no una obra. Cuando el colegio ve el espacio recorrido en primera persona, las observaciones que aparecen son otras." },
        { tipo: "imagen", valor: "assets/img/proyectos/salas-maker/02-render-sala.jpg", pie: "Vista general: mesas de trabajo colaborativo al centro y puestos de computador en el perímetro." },
        { tipo: "imagen", valor: "assets/img/proyectos/salas-maker/03-render-puestos.jpg", pie: "La línea de puestos de trabajo contra el ventanal." },
        { tipo: "imagen", valor: "assets/img/proyectos/salas-maker/04-render-acceso.jpg", pie: "El acceso al espacio maker, con la señalética del proyecto." },
        { tipo: "imagen", valor: "assets/img/proyectos/salas-maker/05-render-color.jpg", pie: "Estudio de color del espacio." },
        { tipo: "imagen", valor: "assets/img/proyectos/salas-maker/06-render-impresora.jpg", pie: "Zona de impresión 3D con su material de apoyo en el muro." },
        { tipo: "texto", titulo: "La sala construida", valor: "PLACEHOLDER: en qué establecimiento se implementó y en qué fecha. Cierra con lo que quedó operando." },
        { tipo: "imagen", valor: "assets/img/proyectos/salas-maker/07-sala-construida.jpg", pie: "El muro de herramientas de la sala ya instalada." }
      ]
    },
    {
      id: "salud-mental",
      titulo: "AnsioSOS: proyecto de título",
      cliente: "Universidad Diego Portales",
      anio: "2021",
      tags: ["Proyecto de título", "Diseño de servicios", "Salud mental", "Plataforma digital"],
      resumen:
        "Proyecto de título: plataforma psicoeducativa para manejar la ansiedad en los primeros años de universidad, complementaria al servicio de atención psicológica de la UDP.",
      img: "assets/img/proyectos/salud-mental/01-portada.jpg",
      bloques: [
        { tipo: "lista", titulo: "Ficha", valor: ["Proyecto de título, Diseño Industrial UDP", "Profesora guía: Florencia Adriasola", "Colaboradora: Camila Correa", "Enero de 2021"] },
        { tipo: "texto", titulo: "El problema", valor: "Los altos niveles de ansiedad durante la primera etapa universitaria producen efectos dañinos en la salud mental y repercuten negativamente en el rendimiento académico. El servicio de atención psicológica de la universidad existe, pero atiende por hora agendada: entre que aparece el síntoma y llega la atención hay un espacio que nadie cubre." },
        { tipo: "texto", titulo: "La propuesta", valor: "Una plataforma digital interactiva complementaria al servicio de atención psicológica de la UDP, con actividades psicoeducativas para manejar los síntomas de la ansiedad de manera inmediata y desde cualquier lugar. El objetivo no es reemplazar la atención profesional sino potenciarla, incentivando el autoconocimiento gradual, la relajación y la planificación del tiempo." },
        { tipo: "imagen", valor: "assets/img/proyectos/salud-mental/02-situaciones.jpg", pie: "Situaciones comunes donde aparece la ansiedad, y qué nos decimos cuando estamos ansiosos." },
        { tipo: "imagen", valor: "assets/img/proyectos/salud-mental/03-ejercicios.jpg", pie: "Buscador de ejercicios: respiración, organización del tiempo y otras herramientas descargables." },
        { tipo: "imagen", valor: "assets/img/proyectos/salud-mental/04-quienes-somos.jpg", pie: "La plataforma se presenta como un servicio hecho por estudiantes para estudiantes." },
        { tipo: "imagen", valor: "assets/img/proyectos/salud-mental/05-marca.jpg", pie: "La marca del proyecto." },
        { tipo: "texto", titulo: "Cinco años después", valor: "En 2026 retomé esta memoria y la convertí en una aplicación real, construida con IA. Está en este mismo catálogo como AnsioSOS: el proyecto de título es su origen." }
      ]
    },
    {
      id: "diseno-editorial",
      titulo: "Plan Nacional RAM",
      cliente: "Converso",
      anio: "2021",
      tags: ["Editorial", "Diseño gráfico", "Salud pública", "Infografía"],
      resumen:
        "Diseño editorial del Plan Nacional contra la Resistencia a los Antimicrobianos 2021-2025, desarrollado como jefe de diseño gráfico en Converso.",
      img: "assets/img/proyectos/diseno-editorial/01-portada.jpg",
      bloques: [
        { tipo: "lista", titulo: "Mi rol", valor: ["Jefe de Diseño Gráfico en Converso", "Diagramación de la publicación completa", "Infografías y sistema de color"] },
        { tipo: "texto", valor: "Diseño editorial del Chilean National Plan on Antimicrobial Resistance 2021-2025. Un documento de política pública tiene un problema de diseño particular: el contenido es técnico y extenso, pero el lector al que hay que convencer no siempre es técnico. La diagramación tiene que dejar entrar por la infografía a quien no va a leer las setenta páginas." },
        { tipo: "imagen", valor: "assets/img/proyectos/diseno-editorial/02-interior.jpg", pie: "Doble página interior: texto a dos columnas con fotografía de apoyo." },
        { tipo: "imagen", valor: "assets/img/proyectos/diseno-editorial/03-infografia.jpg", pie: "El plan de acción global resumido en una infografía." },
        { tipo: "imagen", valor: "assets/img/proyectos/diseno-editorial/04-doble-pagina.jpg", pie: "Sistema de color por sección, aplicado al pie de cada página." },
        { tipo: "texto", titulo: "Pendiente", valor: "PLACEHOLDER: para qué institución se hizo el plan y qué más componía el encargo además del documento." }
      ]
    },
    {
      id: "congreso-futuro",
      titulo: "Congreso Futuro en tu comuna",
      cliente: "Ideo Maker",
      anio: "2024",
      tags: ["Divulgación", "Robótica", "Educación", "Prensa"],
      resumen:
        "Feria de ciencia en el Hospital de Niños Dr. Luis Calvo Mackenna, con el stand de robótica de Ideo Maker. La jornada tuvo cobertura nacional.",
      img: "assets/img/proyectos/congreso-futuro/01-adprensa.jpg",
      bloques: [
        { tipo: "texto", valor: "Congreso Futuro en tu comuna abrió su temporada 2024 en el hall del Servicio de Atención a las Personas del Hospital de Niños Dr. Luis Calvo Mackenna. Niñas y niños de atención ambulatoria participaron de una feria de ciencia con tres estaciones: Astronomía del Instituto Milenio de Astrofísica MAS, el Festival de Matemáticas de la Sociedad Matemática de Chile, y el stand de robótica de Ideo Maker." },
        { tipo: "texto", valor: "Llevar una actividad maker a un hospital cambia las restricciones. Los participantes llegan desde atención ambulatoria, los tiempos no se controlan y el espacio no es un aula. La actividad tiene que funcionar en sesiones cortas, entrar y salir sin montaje pesado, y sostenerse con lo que haya sobre una mesa." },
        { tipo: "cita", valor: "Este tipo de actividades le alegra el corazón a todos: a nuestros niños, a sus familias, a funcionarios y a toda la comunidad. El compromiso es que permanezca en el tiempo." },
        { tipo: "texto", valor: "La cita es de Michel Royer, director del Hospital de Niños Dr. Luis Calvo Mackenna." },
        { tipo: "texto", titulo: "Cobertura", valor: "La jornada fue cubierta por el Senado de Chile, Canal 13, El Mostrador, Radio Agricultura, Cooperativa y AdPrensa, entre otros." },
        { tipo: "imagen", valor: "assets/img/proyectos/congreso-futuro/02-agricultura.jpg", pie: "Radio Agricultura." },
        { tipo: "imagen", valor: "assets/img/proyectos/congreso-futuro/03-cooperativa.jpg", pie: "Cooperativa.cl." },
        { tipo: "texto", titulo: "Sobre las imágenes", valor: "Esta página muestra solo los titulares de la cobertura. Las fotografías que acompañaban esas notas son de niñas y niños en un hospital, y no se publican acá." }
      ]
    },
    {
      id: "kits-educativos",
      titulo: "Kits educativos Bicho-bot",
      cliente: "Ideo Maker",
      anio: "2023",
      tags: ["Producto", "STEAM", "Fabricación digital", "Robótica"],
      resumen:
        "Kit de robótica de bajo costo para primer ciclo, diseñado para armarse sin herramientas y fabricarse por corte láser.",
      img: "assets/img/proyectos/kits-educativos/01-packaging.jpg",
      bloques: [
        { tipo: "texto", valor: "PLACEHOLDER: esta es la ficha más incompleta del catálogo. Del proyecto solo sobrevivió el packaging. Falta para qué nivel se diseñó el kit, cómo se fabrica, qué electrónica lleva, si llegó a producirse y en cuántos colegios se usó." },
        { tipo: "imagen", valor: "assets/img/proyectos/kits-educativos/01-packaging.jpg", pie: "El packaging del kit: Bicho BOT, aprender creando." }
      ]
    },
    {
      id: "eloisa",
      titulo: "Eloísa",
      cliente: "Proyecto universitario · CESFAM",
      anio: "2019",
      tags: ["Diseño de servicios", "Salud pública", "Diseño de información", "Migración"],
      resumen:
        "Sistema de traducción español-créole para mujeres haitianas en el CESFAM: acceso a salud sexual y métodos anticonceptivos cuando el idioma es la primera barrera.",
      img: "assets/img/proyectos/eloisa/01-marca.jpg",
      bloques: [
        { tipo: "texto", valor: "Eloísa, o Èd Jinekolojik, es un sistema de traducción español-créole haitiano para la atención en salud de la población haitiana en Chile. Está pensado específicamente para mujeres y para el momento en que la barrera del idioma decide qué información recibe una paciente sobre su propia salud sexual." },
        { tipo: "texto", titulo: "El problema", valor: "En una consulta de salud sexual, no entender el idioma no significa entender menos: significa quedarse fuera de la decisión. Una mujer que no puede preguntar cómo se toma un anticonceptivo, qué efectos tiene o cada cuánto se repite, no está eligiendo un método, está recibiendo uno. Eso es lo que el proyecto intenta corregir, y por eso el material está en créole con el español en segundo plano, no al revés." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/02-pastillas.jpg", pie: "Grenn kontraseptif, pastillas anticonceptivas: una al día a la misma hora, con sus ventajas y desventajas explicadas por separado." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/03-inyectable-trimestral.jpg", pie: "Piki chak trimès, inyectable trimestral." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/04-inyectable-mensual.jpg", pie: "Piki chak mwa, inyectable mensual." },
        { tipo: "texto", titulo: "Cómo está resuelto", valor: "Cada método anticonceptivo tiene su ficha, y todas siguen la misma estructura: el nombre en créole con la traducción al español bajo el título, la frecuencia de uso destacada, y dos columnas enfrentadas con ventajas y desventajas. La ilustración es literal a propósito: el blíster con las pastillas marcadas, la jeringa, el gesto de la inyección. Cuando el texto falla, el dibujo todavía funciona." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/05-fichas.jpg", pie: "Ficha de información personal y de antecedentes gineco-obstétricos, bilingüe y con casillas para completar durante la consulta." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/06-ficha-obstetrica.jpg", pie: "El historial ginecológico traducido: menarquia, ciclo, antecedentes y síntomas, con apoyo gráfico para lo que cuesta nombrar." },
        { tipo: "texto", valor: "Junto a las fichas de métodos hay formularios de registro traducidos, que el profesional completa con la paciente. No son un folleto para llevarse: son la herramienta de la consulta misma. Eso obliga a que el material aguante el uso sobre el escritorio, con lápiz encima, y no solo la lectura." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/07-uso-1.jpg", pie: "El material en uso durante una atención." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/08-uso-2.jpg", pie: "Las fichas están pensadas para revisarse en mano, no para quedarse en un mesón." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/09-en-la-consulta.jpg", pie: "El sistema completo sobre el escritorio de la consulta, con el formulario en uso." },
        { tipo: "imagen", valor: "assets/img/proyectos/eloisa/10-profesional.jpg", pie: "La matrona explicando la ficha de pastillas anticonceptivas durante una atención." },
        { tipo: "texto", titulo: "Probado en consulta", valor: "El material no se quedó en la maqueta: se usó en atenciones reales, con la profesional explicando y la paciente siguiendo la ficha. Ahí se ve si funciona o no. Una ficha que hay que sostener con las dos manos, o que se dobla justo donde está el dato importante, falla en la consulta aunque se vea bien impresa." },
        { tipo: "texto", titulo: "Pendiente", valor: "PLACEHOLDER: el año lo deduje de la fecha de publicación en Behance, enero de 2020, así que el proyecto sería de 2019. Confírmalo. Falta también en qué CESFAM se probó, si fue en equipo y con quiénes, y si el material llegó a quedar en uso." }
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
        { tipo: "texto", valor: "PLACEHOLDER: el encargo, dónde fue y en qué condiciones se hizo el registro." },
        { tipo: "imagen", valor: "", pie: "PLACEHOLDER: pie de foto." }
      ]
    }
  ],

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
        "La pregunta de entrada era concreta: ¿de qué está hecho lo que botamos? El curso empieza literalmente desarmando: controles de consola que dejaron de funcionar, abiertos con destornillador sobre la mesa hasta dejar cada componente a la vista y catalogado en una materioteca.",
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
        "Este curso toma los mecanismos simples, un contenido que suele quedarse en la pizarra, y lo empuja hasta un producto jugable. Durante la primera mitad del semestre los estudiantes entienden y aplican palancas, poleas y engranajes, aprendiendo a modelarlos en Tinkercad y a imprimirlos en 3D con las tolerancias correctas para que encajen y giren.",
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
        "Con esa base, los estudiantes no arman un kit siguiendo instrucciones: construyen su robot desde cero, lo programan en la IDE de Arduino y diseñan en Tinkercad las piezas que necesitan (brazos, pinzas, soportes) para que su explorador resuelva la misión que ellos mismos definieron.",
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
      institucion: "CREA UC · PENTA UC",
      nivel: "8 y 9 años",
      duracion: "6 días, lunes a sábado",
      equipo: "",
      resumen: "La versión para niños y niñas de 8 y 9 años: una misión espacial distinta cada día, construyendo y programando robots exploradores con materiales cotidianos y piezas impresas en 3D.",
      portada: "assets/img/cursos/mision-espacial-portada.jpg",
      descripcion: [
        "Adaptar robótica real a estudiantes de 8 y 9 años obliga a cambiar todo el andamiaje sin bajar el nivel técnico. La solución fue estructurar el curso como una serie de misiones espaciales: cada día plantea un desafío concreto (navegar, aterrizar, desplazarse, personalizar) y el robot va creciendo misión a misión.",
        "El robot educativo desarrollado el semestre anterior hizo posible este curso. Al tener una base propia y confiable, pude entregar a niños de esa edad un robot que de verdad se mueve y se controla, en lugar de una maqueta que solo lo aparenta.",
        "La evaluación de cada misión tiene tres niveles: básico, medio y avanzado. Eso permite que un grupo con ritmos muy distintos avance junto sin que nadie quede fuera. El curso cierra con una muestra, un discurso preparado por cada equipo y entrega de diplomas."
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
      nivel: "PLACEHOLDER: nivel al que se impartió",
      duracion: "En curso",
      equipo: "",
      resumen: "Robots que juegan: programación por bloques y código, diseño centrado en el usuario y tableros construidos por los propios equipos para poner a prueba cada máquina.",
      portada: "assets/img/cursos/robots-juegos-portada.jpg",
      descripcion: [
        "El curso más reciente cruza las dos líneas que venía trabajando por separado: la robótica de los cursos espaciales y el diseño de juegos de Máquinas fabulosas. Los equipos ensamblan un robot, lo programan primero por bloques y después modificando el código directamente, y construyen el tablero o terreno sobre el que ese robot tiene que desempeñarse.",
        "La etapa de empatía es explícita: cada equipo elige un tipo de usuario (niños pequeños, adultos mayores, alguien con una necesidad específica) y define cómo debe comportarse el robot para esa persona. El diseño de interacción deja de ser un accesorio y pasa a determinar la mecánica del juego.",
        "PLACEHOLDER: El curso está en desarrollo. Cuando termine, actualiza esta descripción con los resultados y agrega las sesiones que faltan al temario."
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

  /* ---------- Proyectos hechos con IA ----------
     Aparecen en el Catálogo junto a proyectos y cursos.
     Las fichas largas viven en "proyectos IA/<id>/proyecto.md";
     este bloque se genera desde ahí, no se escribe a mano.

     tipo         lo que sale como etiqueta en la tarjeta
     herramienta  con qué IA se construyó
     etiquetas    vocabulario cerrado, para el buscador futuro
     ---------------------------------------------------------- */
  apps: [
    {
      id: "sku",
      titulo: "SKU",
      tipo: "Aplicación",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Comercio",
      link: "",
      repo: "",
      resumen: "De una planilla de Excel a un inventario con etiquetas QR imprimibles y una página por producto.",
      portada: "assets/img/ia/sku/01-portada.png",
      etiquetas: ["Aplicación", "Comercio", "Next.js", "Supabase", "Vercel", "Programado con IA", "Codex"],
      descripcion: [
        "SKU toma una planilla de Excel de productos y la convierte en tres cosas de una pasada: un código único por producto, una etiqueta imprimible con su código QR, y un inventario consultable. Cada producto queda además con su propia página web, de modo que escanear la etiqueta pegada en la caja lleva directo a la ficha de lo que hay adentro.",
        "Es el proyecto más reciente del conjunto y el que más se parece a una herramienta de trabajo y no a un experimento: resuelve un problema de bodega concreto, no una pregunta técnica.",
        "El historial del repositorio muestra que no se quedó en la idea: tiene aislamiento por establecimiento detrás de un login (cada local ve solo su inventario), etiquetas de 20×50 mm en las dos orientaciones con un diseño que las cuadra en la hoja, y un comando para probar la conexión a la base sin tener que redesplegar. Eso último es de alguien que ya se cansó de depurar a ciegas.",
        "PENDIENTE: para qué inventario se hizo, si está en uso y si llegó a desplegarse. Eso no lo puedo saber desde el repositorio.",
      ],
      bitacora: [
        { fecha: "2026-07-29", titulo: "Etiquetas que cuadran en la hoja", texto: "Etiquetas de 20×50 mm en las dos orientaciones, con un diseño de página que las calza sin desperdiciar papel." },
        { fecha: "2026-07-29", titulo: "Un local no ve el inventario de otro", texto: "Entra el aislamiento por establecimiento en la base de datos, detrás de un login. Las rutas de datos pasan a responder con un error claro en vez de mandar a la pantalla de inicio de sesión, que es lo correcto cuando quien llama es un programa y no una persona." },
        { fecha: "2026-07-27", titulo: "Arranca el proyecto", texto: "Generación de códigos, etiquetas QR imprimibles, inventario desde planilla y una página por producto." },
      ],
      galeria: [
        { src: "assets/img/ia/sku/01-portada.png", pie: "el inventario cargado desde la planilla." },
        { src: "assets/img/ia/sku/02-etiquetas.png", pie: "la hoja de etiquetas QR lista para imprimir." },
        { src: "assets/img/ia/sku/03-producto.png", pie: "la página de un producto." },
      ]
    },
    {
      id: "ansiosos",
      titulo: "AnsioSOS",
      tipo: "Aplicación",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Salud, Educación",
      link: "https://ansiosos.vercel.app",
      repo: "",
      resumen: "La memoria de título de 2021 convertida en una plataforma real para manejar la ansiedad universitaria.",
      portada: "assets/img/ia/ansiosos/01-portada.png",
      etiquetas: ["Aplicación", "Salud", "Educación", "React", "PWA", "Vercel", "Programado con IA", "Investigación con IA", "Codex"],
      descripcion: [
        "AnsioSOS es una plataforma psicoeducativa para que estudiantes universitarios manejen la ansiedad: contenido, ejercicios y un plan de seguridad personal. Es la reformulación funcional de mi memoria de título de Diseño Industrial (UDP, 2021, aprobada con distinción), que hasta ahora solo existía como prototipo navegable en Adobe XD. Pasó de ser una maqueta a diecisiete componentes y catorce pantallas que de verdad funcionan.",
        "La parte más seria del proyecto no es el código, es el modelo de privacidad. Los datos están clasificados en tres niveles según qué tan sensibles son, con una línea que no se cruza: los pensamientos, el chat y la ideación nunca salen del dispositivo. El principio para el panel institucional es que la institución ve el bosque y nunca los árboles: solo agregados, y solo por sobre un umbral de diez personas. Durante el desarrollo se detectó y corrigió un error ético de diseño: una versión del panel dejaba leer datos individuales.",
        "La decisión de no poner un modelo de lenguaje en el chat también está fundamentada, no es pereza: para este caso de uso la evidencia disponible no muestra diferencia práctica frente a un sistema de reglas, y un modelo agrega riesgo clínico y de privacidad que no compensa. El contenido clínico se filtró con el mismo criterio: respiración diafragmática sí, algunas técnicas populares no, y un suplemento descartado por hepatotóxico.",
      ],
      bitacora: [
        { fecha: "2026-07-29", titulo: "Deja de estar escondida", texto: "Se desactiva la protección de despliegue del hosting, que tenía la dirección buena detrás de un login y dejaba como única URL funcional un nombre autogenerado, impresentable para enlazar una memoria de título. Un interruptor tuvo escondido dos meses el proyecto con mejor historia del conjunto." },
        { fecha: "2026-07-20", titulo: "Protección de claves antes de necesitarlas", texto: "Se cierra el `.gitignore` para archivos de entorno. Hoy el proyecto no tiene secretos, pero la fase con backend va a necesitarlos y el primero se habría commiteado en silencio." },
        { fecha: "2026-07-02", titulo: "El bug ético", texto: "Se detecta que el panel institucional permitía leer datos individuales. Se corrige y se fija el umbral de diez personas para cualquier dato agregado." },
        { fecha: "2026-07-02", titulo: "La taxonomía de datos", texto: "Se clasifica todo el contenido en tres niveles de sensibilidad y se fija la regla innegociable: pensamientos, chat e ideación no salen del dispositivo." },
        { fecha: "2026-07-02", titulo: "De prototipo a plataforma", texto: "La memoria de título de 2021 deja de ser una maqueta: 70 archivos, 17 componentes, 14 pantallas funcionando." },
      ],
      galeria: [
        { src: "assets/img/ia/ansiosos/01-portada.png", pie: "✅ El inicio con los ejercicios para disminuir la ansiedad." },
        { src: "assets/img/ia/ansiosos/02-ejercicios.png", pie: "✅ El catálogo de ejercicios." },
        { src: "assets/img/ia/ansiosos/03-plan.png", pie: "✅ El plan de seguridad personal (sin datos, recién inicializado)." },
        { src: "assets/img/ia/ansiosos/04-panel.png", pie: "✅ El panel institucional: \"solo conteo, nunca quién\"." },
      ]
    },
    {
      id: "app-escalada",
      titulo: "App Escalada",
      tipo: "Aplicación",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "terminado",
      dominio: "Deporte, Datos",
      link: "https://escalada-xi.vercel.app",
      repo: "",
      resumen: "Entrenamiento de escalada con análisis de técnica por visión computacional, funcionando sin internet.",
      portada: "assets/img/ia/app-escalada/01-portada.png",
      etiquetas: ["Aplicación", "Deporte", "Datos", "React", "MediaPipe", "PWA", "Vercel", "IA en el producto", "Programado con IA", "Codex"],
      descripcion: [
        "Una aplicación instalable de entrenamiento de escalada: rutinas, metas por color de ruta, registro de nutrición y un módulo que analiza la técnica a partir de un video de la propia escalada. El modelo de estimación de pose corre entero dentro del teléfono, sobre 33 puntos del cuerpo, y devuelve puntajes de técnica sin que el video salga nunca del dispositivo.",
        "La decisión de fondo fue que todo funcionara sin conexión, y eso obligó a resolver tres cosas que resultaron ser los aprendizajes más transferibles del conjunto. El video se captura con el selector de archivos del navegador en vez de pedir acceso directo a la cámara, porque lo primero funciona en una red local sin certificado y lo segundo exige HTTPS. El modelo pesa casi 6 MB, así que se deja fuera de la instalación inicial y se descarga la primera vez que se usa el módulo: instalar la aplicación sigue siendo instantáneo. Y toda la lógica de pose a puntaje vive aislada, sin nada de interfaz alrededor, para poder razonarla y corregirla por separado.",
        "Hay una decisión de producto que vale la pena contar: la racha es semanal, no diaria. Una racha diaria en una aplicación de entrenamiento empuja a entrenar lesionado para no perderla.",
      ],
      bitacora: [
        { fecha: "2026-08-20", titulo: "Rutas por día y compartir logros", texto: "Contador de rutas por día y la posibilidad de compartir los logros en redes. Es el único de estos proyectos que recibió trabajo en agosto." },
        { fecha: "2026-07-01", titulo: "Publicada", texto: "Sale en línea. Del arranque a la versión publicada pasaron once horas." },
        { fecha: "2026-07-01", titulo: "El módulo de técnica", texto: "Entra la estimación de pose sobre video. Queda pendiente calibrar los umbrales con videos reales de escalada en pared: los puntajes son plausibles, pero todavía no están validados contra la realidad." },
        { fecha: "2026-07-01", titulo: "Arranca el proyecto", texto: "Rutinas, metas por color de ruta y nutrición. Todo local, sin cuenta ni backend." },
      ],
      galeria: [
        { src: "assets/img/ia/app-escalada/01-portada.png", pie: "✅ El resumen de entrenamiento con la racha semanal." },
        { src: "assets/img/ia/app-escalada/02-tecnica.png", pie: "✅ El módulo de técnica: todo se procesa en el teléfono." },
        { src: "assets/img/ia/app-escalada/03-rutinas.png", pie: "✅ Las cinco rutinas, con duración y proteína objetivo." },
        { src: "assets/img/ia/app-escalada/04-rutas.png", pie: "✅ Las metas por color de ruta." },
      ]
    },
    {
      id: "granada-tareas-del-hogar",
      titulo: "Granada",
      tipo: "Aplicación",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Hogar",
      link: "",
      repo: "",
      resumen: "Repartir las tareas de una casa entre tres personas sin que nadie tenga que llevar la cuenta.",
      portada: "assets/img/ia/granada-tareas-del-hogar/01-portada.png",
      etiquetas: ["Aplicación", "Hogar", "JavaScript", "Supabase", "PWA", "Vercel", "Programado con IA", "Codex"],
      descripcion: [
        "Granada es una aplicación web instalable que reparte y sincroniza las tareas domésticas de un hogar de tres personas. Cada quien ve lo que le toca, marca lo que hizo, y el resto lo ve al instante desde su propio teléfono. Es el único de estos proyectos con usuarios reales y uso sostenido: no es un prototipo que se enseña, es algo que se usa todos los días.",
        "Casi todo lo interesante está en las decisiones de producto, no en el código. El color identifica a la persona, nunca la urgencia de la tarea: un sistema de colores por prioridad convierte la casa en un tablero de reproches. No hay chat interno, porque el hogar ya conversa por WhatsApp y una segunda bandeja de entrada solo agrega un lugar más donde no responder. Y el balance se muestra en positivo y sin ranking: se ve lo que cada persona aportó, no quién va ganando. Meter competencia entre convivientes era la forma más rápida de que la aplicación durara una semana.",
        "Técnicamente es deliberadamente simple: un solo archivo HTML autocontenido con JavaScript sin framework y un service worker propio, contra una base de datos con sincronización en tiempo real. Es el proyecto más iterado de todos (doce versiones a lo largo de casi un mes) y el único que recibió la segunda semana de trabajo que al resto le faltó.",
      ],
      bitacora: [
        { fecha: "2026-07-29", titulo: "Hoy es hoy", texto: "La pantalla principal pasa a mostrar solo el día actual; lo vencido se va a su propia vista. Se suman turnos por persona en el formulario y se alinea la grilla del mes. Es la iteración que la hizo usable de verdad, no solo funcional." },
        { fecha: "2026-07-29", titulo: "Sin login", texto: "Corre la migración que saca el inicio de sesión: la aplicación entra como usuario anónimo. Menos fricción para tres personas que ya viven juntas, y una decisión de privacidad que conviene tener presente antes de publicar el link." },
        { fecha: "2026-07-20", titulo: "Fuera las credenciales del HTML público", texto: "Se eliminan el correo, la contraseña y la llamada de autenticación que viajaban en texto plano dentro del archivo que sirve el sitio. La causa raíz estaba en la propia guía de instalación, que mandaba a incrustarlas: también corregida. Verificado contra el sitio en vivo, no contra el commit." },
        { fecha: "2026-07-11", titulo: "Tareas que se repiten", texto: "Entra la recurrencia por intervalos con horizonte de seis meses, y la carga masiva desde planilla que expande cada tarea repetida y la reparte entre los responsables." },
        { fecha: "2026-07-06", titulo: "Backend compartido y tiempo real", texto: "Lo que marca una persona aparece en el teléfono de las otras dos sin recargar. Antes de esto cada quien veía su propia versión de la verdad." },
        { fecha: "2026-07-06", titulo: "Arranca el proyecto", texto: "Primera versión: aplicación instalable, sin backend, todo en el dispositivo." },
      ],
      galeria: [
        { src: "assets/img/ia/granada-tareas-del-hogar/01-portada.png", pie: "✅ La selección de perfil: Sofía, Matías y Renata." },
        { src: "assets/img/ia/granada-tareas-del-hogar/02-hoy.png", pie: "✅ Hoy, con el resumen de ayer y las tareas del día." },
        { src: "assets/img/ia/granada-tareas-del-hogar/03-tareas.png", pie: "✅ La lista completa de tareas." },
        { src: "assets/img/ia/granada-tareas-del-hogar/04-mes.png", pie: "✅ La grilla del mes." },
        { src: "assets/img/ia/granada-tareas-del-hogar/05-yo.png", pie: "✅ El balance personal y el aporte de la casa, sin ranking." },
      ]
    },
    {
      id: "maker-lab",
      titulo: "Maker Lab",
      tipo: "Aplicación",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Educación, Fabricación digital",
      link: "https://maker-lab-ja18.vercel.app",
      repo: "",
      resumen: "Un juego de laboratorio maker donde programar con bloques exporta código Arduino que funciona de verdad.",
      portada: "assets/img/ia/maker-lab/01-portada.png",
      etiquetas: ["Aplicación", "Educación", "Fabricación digital", "React", "Blockly", "Arduino", "Programado con IA", "Codex"],
      descripcion: [
        "Un juego web de laboratorio maker escolar: el estudiante recolecta materiales, fabrica piezas, monta estaciones de trabajo y programa hardware con bloques. La diferencia con un juego de programación por bloques cualquiera es que el código que sale de esos bloques es Arduino real, listo para cargar en un microcontrolador. El puente entre el juego y el taller físico es el punto entero. Trece nodos de conocimiento, cinco estaciones, veintitrés recetas de fabricación y cinco prototipos como meta.",
        "El generador de código Arduino está escrito a mano. Las bibliotecas que hacen esto ya existen, pero todas están abandonadas: la más conocida no se toca desde 2018 y otra ni siquiera tiene licencia clara. Reescribirlo fue más barato que heredar un problema.",
        "Y el juego no se queda en recolectar y fabricar: al estudiar un nodo aparece un reto práctico real. El primero pide armar un circuito (pila, resistencia, LED, retorno a tierra) en el orden correcto y recién después programarlo. O sea, el error de electrónica se comete en pantalla antes de cometerse con componentes de verdad, que es exactamente para lo que sirve un simulador en un aula.",
        "El taller de programación no es decorativo: los bloques se ejecutan contra un ESP32 simulado en pantalla (con sus pines reales, GPIO2 y compañía) y el mismo programa se puede ver como código Arduino o bajar como archivo `.ino` para cargarlo en una placa física. Ese es el puente completo, de bloque a placa, sin salir del navegador.",
        "Lo más inusual del proyecto no es el juego, es cómo se verifica. Hay dos pruebas generativas: un solver que recorre todo el árbol de progresión y detecta contenido inalcanzable o dependencias circulares antes de que nadie juegue, y un bot que juega la partida completa contra la lógica real del juego. Se comprobó rompiendo a propósito un desbloqueo. Falta el sistema de energía y guardar la partida: hoy el progreso se pierde al recargar, que en una sala de clases es fatal.",
      ],
      bitacora: [
        { fecha: "2026-07-29", titulo: "Destapado", texto: "Estaba desplegado desde hacía días, pero detrás del login del hosting: la URL existía y no la podía abrir nadie. Se desactiva la protección de despliegue y el juego queda accesible. No hubo que publicarlo, hubo que destaparlo." },
        { fecha: "2026-07-21", titulo: "Las pruebas que juegan solas", texto: "El solver de alcanzabilidad del árbol de contenidos y el bot que juega una partida entera contra la lógica real. Verificado por mutación: romper a propósito un desbloqueo tumba las pruebas." },
        { fecha: "2026-07-19", titulo: "Generador de Arduino propio", texto: "Se descarta usar bibliotecas existentes de bloques a Arduino, todas sin mantenimiento, y se escribe el generador desde cero." },
        { fecha: "2026-07-19", titulo: "Arranca el proyecto", texto: "Se define la economía del juego: 13 nodos de conocimiento, 5 estaciones, 23 recetas, 5 prototipos objetivo." },
      ],
      galeria: [
        { src: "assets/img/ia/maker-lab/01-portada.png", pie: "✅ El laboratorio: recolectar, estaciones y árbol STEAM de 13 nodos." },
        { src: "assets/img/ia/maker-lab/02-bloques.png", pie: "✅ El taller de programación con el ESP32 simulado y la descarga del `.ino`." },
        { src: "assets/img/ia/maker-lab/03-reto.png", pie: "✅ Partida avanzada: inventario, pieza fabricada y el reto de armar el circuito." },
      ]
    },
    {
      id: "esdiseno-malla-del-diseno",
      titulo: "esdiseño: La Malla del Diseño",
      tipo: "Plataforma web",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Educación, Diseño",
      link: "https://esdiseno.vercel.app",
      repo: "",
      resumen: "La formación del diseñador chileno convertida en una malla navegable de eras, cursos y roles.",
      portada: "assets/img/ia/esdiseno-malla-del-diseno/01-portada.png",
      etiquetas: ["Plataforma web", "Educación", "Diseño", "React", "Supabase", "Vercel", "Programado con IA", "Codex"],
      descripcion: [
        "Una plataforma de aprendizaje que estructura la formación de un diseñador como una malla curricular recorrible: cuatro eras, veintidós cursos, sesenta y seis clases y siete roles profesionales hacia los que se puede derivar. En vez de una lista de cursos sueltos, el mapa muestra de dónde viene cada cosa y hacia dónde lleva.",
        "La decisión de arquitectura que la sostiene es que la aplicación funciona completa sin cuenta. Todo el contenido y la navegación andan en modo invitado, guardando el avance en el propio navegador; la base de datos solo agrega cuentas y progreso sincronizado entre dispositivos. Si el backend se cae o alguien no quiere registrarse, la plataforma sigue siendo usable en vez de mostrar una pantalla de error.",
        "Lo que el prototipo ya muestra, y que no es menor: cada curso tiene su ruta de aprendizaje con clase de intro gratis y el resto desbloqueable por $24.990, con certificación en algunos y enlaces a la herramienta real que se enseña (AutoCAD, Fusion 360). Y los siete roles de salida no son etiquetas: cada uno declara de qué habilidades se alimenta y su sueldo referencial en Chile, de $700 mil a $4 millones mensuales según el rol. Eso convierte la malla en algo que se puede usar para decidir, no solo para mirar.",
        "Lo que falta no es técnico: es el contenido de las clases, grabar los videos de intro, conectar el dominio propio y el inicio de sesión con cuenta. La propia plataforma declara su hoja de ruta en tres fases (el mapa navegable, la plataforma de cursos, y datos y comunidad) y hoy está en la primera.",
      ],
      bitacora: [
        { fecha: "2026-07-04", titulo: "En línea, sin dominio propio", texto: "Queda desplegada y accesible. El dominio `esdiseño.cl` está comprado y el plan de conexión escrito, pero sin ejecutar: por ahora vive en una dirección provisoria." },
        { fecha: "2026-07-04", titulo: "Modo invitado primero", texto: "Se decide que la plataforma sea 100% usable sin backend y que la base de datos solo sume cuentas y progreso. El esquema y los datos iniciales quedan escritos, pendientes de cargar." },
        { fecha: "2026-07-04", titulo: "Arranca el proyecto", texto: "Se define la estructura: 4 eras, 22 cursos, 66 clases, 7 roles." },
      ],
      galeria: [
        { src: "assets/img/ia/esdiseno-malla-del-diseno/01-portada.png", pie: "✅ La malla por revoluciones industriales, con los cursos que nacen en cada una." },
        { src: "assets/img/ia/esdiseno-malla-del-diseno/02-curso.png", pie: "✅ La ficha de un curso: ruta de aprendizaje, clase gratis y clases bloqueadas." },
        { src: "assets/img/ia/esdiseno-malla-del-diseno/03-roles.png", pie: "✅ Los siete roles de salida con su sueldo referencial." },
      ]
    },
    {
      id: "mercado-publico",
      titulo: "Buscador Mercado Público",
      tipo: "Plataforma web",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Datos, Comercio, Fabricación digital",
      link: "",
      repo: "",
      resumen: "Encontrar en las licitaciones del Estado las que sí tienen que ver con salas maker y fabricación digital.",
      portada: "assets/img/ia/mercado-publico/01-portada.png",
      etiquetas: ["Plataforma web", "Datos", "Comercio", "Fabricación digital", "React", "Vercel", "API pública", "Programado con IA", "Codex"],
      descripcion: [
        "Un buscador sobre los datos abiertos de compras públicas de Chile, filtrado a lo que de verdad importa en este oficio: aulas maker, laboratorios de fabricación, impresión 3D, corte láser y robótica educativa. El problema que resuelve es concreto y personal: el portal oficial publica cientos de licitaciones al día y las que sirven se pierden entre las que no.",
        "Tiene una decisión técnica que vale la pena anotar. La interfaz no habla directo con la API oficial, porque esa API no permite consultas desde el navegador; en medio hay una pequeña función de servidor que actúa de puente y además guarda las respuestas quince minutos, para no repetir la misma consulta. Eso resuelve dos cosas de una: el bloqueo del navegador y el gasto de llamadas. La clave de acceso a la API vive solo en el servidor, nunca en el código que llega al usuario.",
        "El proyecto trae su propio modo de demostración, y está bien resuelto: con la variable de ejemplo activada carga cinco licitaciones de muestra y **muestra en pantalla un aviso diciendo que son datos de ejemplo**. No hay forma de confundir la demo con datos reales, ni para quien la ve ni para quien la programó tres meses después.",
        "Lo que falta es desplegarlo para que consulte la API de verdad: pedir el ticket gratuito, configurarlo en el panel del hosting y validar contra el servicio. Una tarde, y es lo único que separa este proyecto de estar terminado.",
      ],
      bitacora: [
        { fecha: "2026-07-02", titulo: "La clave nunca viaja al navegador", texto: "Se separa la variable de desarrollo de la de producción, para que la credencial de la API no termine dentro del archivo que descarga el usuario." },
        { fecha: "2026-07-02", titulo: "El puente de servidor", texto: "La API oficial no acepta consultas desde el navegador. Se escribe una función intermedia con caché de quince minutos." },
        { fecha: "2026-07-02", titulo: "Arranca el proyecto", texto: "Se definen los términos de búsqueda del filtro maker." },
      ],
      galeria: [
        { src: "assets/img/ia/mercado-publico/01-portada.png", pie: "✅ Cinco licitaciones de ejemplo, con el aviso de datos de muestra." },
        { src: "assets/img/ia/mercado-publico/02-filtros.png", pie: "✅ El filtrado por categoría." },
      ]
    },
    {
      id: "estudiar-futuro",
      titulo: "Estudiar Futuro",
      tipo: "Plataforma web",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Educación, Datos",
      link: "",
      repo: "",
      resumen: "Comparar becas y magísters de Chile y el extranjero según lo que uno realmente quiere estudiar.",
      portada: "assets/img/ia/estudiar-futuro/01-portada.png",
      etiquetas: ["Plataforma web", "Educación", "Datos", "React", "Programado con IA", "Codex"],
      descripcion: [
        "Un tablero para decidir un postgrado: compara programas de magíster y becas disponibles en Chile y fuera, y los cruza con el área de interés de quien consulta. La pregunta que intenta contestar no es \"qué programas existen\" sino \"cuál me conviene a mí\".",
        "Hoy tiene nueve becas reales cargadas a mano (Beca Chile, ANID, Chevening, Fulbright, DAAD y otras), con su cobertura desglosada en matrícula, manutención, pasajes y seguro, los requisitos de cada una y el mes de convocatoria. Se filtra por ocho áreas y por país de destino, y se puede armar una lista corta. Para ser un proyecto de un día, la interfaz está más terminada de lo que sugiere llamarlo mínimo funcional.",
        "Lo que le falta es justamente lo que la haría útil: la capa de mercado y sueldos. Sin saber qué paga cada camino, la comparación se queda en la mitad: compara costos y requisitos, pero no retornos. Es el único proyecto del conjunto sin documentación de ningún tipo, y eso también hay que arreglarlo antes de mostrarlo.",
      ],
      bitacora: [
        { fecha: "2026-07-04", titulo: "Mínimo funcional", texto: "Queda la comparación andando con datos cargados a mano: ~9 becas y ~10 programas. Pendiente la capa de mercado y sueldos." },
        { fecha: "2026-07-04", titulo: "Arranca el proyecto", texto: "" },
      ],
      galeria: [
        { src: "assets/img/ia/estudiar-futuro/01-portada.png", pie: "✅ Las nueve becas con su cobertura desglosada y los filtros por área." },
        { src: "assets/img/ia/estudiar-futuro/02-magisters.png", pie: "✅ La pestaña de magísters." },
      ]
    },
    {
      id: "reporte-web-diseno",
      titulo: "Diseño industrial en Chile",
      tipo: "Plataforma web",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "terminado",
      dominio: "Datos, Diseño, Educación",
      link: "",
      repo: "",
      resumen: "Nueve pilares de datos sobre el estado real del diseño industrial en Chile, en un solo tablero.",
      portada: "assets/img/ia/reporte-web-diseno/01-portada.png",
      etiquetas: ["Plataforma web", "Datos", "Diseño", "Educación", "React", "Programado con IA", "Investigación con IA", "Codex"],
      descripcion: [
        "Un tablero que reúne en nueve pilares lo que se puede saber con datos sobre el diseño industrial en Chile: mercado y sueldos por cargo, historia del oficio, formación (diez escuelas comparadas, diseño contra ingeniería, dónde quedó la matemática), herramientas e IA, referentes, trayectorias, concursos abiertos, y dos pilares que dan vuelta el ejercicio hacia quien lee: «tu perfil» y «qué hacer». 410 titulados al año, 23 profesores con proyecto propio, 16 proyectos influyentes, 17 concursos.",
        "Lo que lo separa de un informe es el test de posición: trece ramas del oficio entre las que uno se ubica, y a partir de ahí el panel deja de describir el mercado y empieza a responder dónde estás parado tú. Compara sueldos por cargo con filtros por demanda, y muestra hacia dónde migran los diseñadores.",
        "No nació como proyecto de portafolio: nació porque necesitaba decidir mi propia carrera con datos y no con impresiones. Es el sustento de las decisiones que vinieron después: a qué postgrado postular, qué posicionamiento sostener, qué servicios ofrecer. Que después sirva de portafolio es una consecuencia.",
        "Es el proyecto con más código propio de todo el conjunto y, al mismo tiempo, uno que nunca se desplegó. Técnicamente no le falta nada: le falta la decisión de publicarlo.",
      ],
      bitacora: [
        { fecha: "2026-07-04", titulo: "Terminado, sin publicar", texto: "Queda construido y verificado. No se despliega. Es, de todos, el que más código tiene y el único de ese tamaño que nunca salió a internet." },
        { fecha: "2026-07-04", titulo: "Los nueve pilares", texto: "Se cierra la estructura: mercado, mallas, empleabilidad, distribución regional y el resto de los ejes, con la base de datos embebida en la propia aplicación." },
        { fecha: "2026-07-04", titulo: "Arranca el proyecto", texto: "" },
      ],
      galeria: [
        { src: "assets/img/ia/reporte-web-diseno/01-portada.png", pie: "✅ La portada con los nueve pilares y las cifras de cabecera." },
        { src: "assets/img/ia/reporte-web-diseno/02-mercado.png", pie: "✅ El pilar de mercado: filtro de sueldos y cargos." },
        { src: "assets/img/ia/reporte-web-diseno/03-trayectorias.png", pie: "✅ Trayectorias: hacia dónde migran los diseñadores." },
        { src: "assets/img/ia/reporte-web-diseno/04-formacion.png", pie: "✅ Formación: las diez escuelas comparadas." },
      ]
    },
    {
      id: "proyecto-iot-01",
      titulo: "Proyecto IOT 01",
      tipo: "Hardware",
      herramienta: "Codex",
      anio: "2026",
      fecha: "2026-07",
      estado: "en desarrollo",
      dominio: "Fabricación digital",
      link: "",
      repo: "",
      resumen: "Diez microcontroladores distintos hablando un mismo idioma, para que sumar uno nuevo no rompa nada.",
      portada: "assets/img/ia/proyecto-iot-01/01-portada.png",
      etiquetas: ["Hardware", "Fabricación digital", "ESP32", "MQTT", "Arduino", "Programado con IA", "Codex"],
      descripcion: [
        "Una flota de diez microcontroladores con roles distintos: relés, servos, motores, tiras de luces, sensores: controlados desde un tablero central. Es la base de electrónica sobre la que se montan las estaciones de un taller maker.",
        "El valor del proyecto no está en los aparatos, está en el contrato. En vez de inventar un formato de mensaje por cada tipo de dispositivo, todos hablan un modelo común de capacidades (interruptor, rango, color, sensor) y un comando es siempre la misma estructura de dos campos. La consecuencia práctica es que agregar un dispositivo nuevo no obliga a tocar el tablero ni a los demás: el aparato se anuncia solo al conectarse y el sistema aprende qué sabe hacer. Ese documento de contrato es la mejor decisión de arquitectura de todo el conjunto y sirve mucho más allá de este proyecto.",
        "Hay uno de los diez funcionando de punta a punta. Los roles de los últimos seis ni siquiera están definidos. En desarrollo, con todo lo que eso significa.",
      ],
      bitacora: [
        { fecha: "2026-07-29", titulo: "Se cierra el servidor de mensajes", texto: "Las reglas de firewall del puerto pasan a perfil de red privada. Hasta ese día el servidor aceptaba conexiones anónimas desde cualquier red a la que estuviera conectado el computador." },
        { fecha: "2026-07-14", titulo: "Uno de diez", texto: "El primer nodo funciona completo: comando desde el tablero, acción en el dispositivo, confirmación de vuelta. Los otros nueve están pendientes." },
        { fecha: "2026-07-14", titulo: "El contrato de mensajes", texto: "Se define el modelo de capacidades común y el mecanismo por el que cada dispositivo se describe solo al conectarse, además del aviso automático cuando uno se desconecta." },
        { fecha: "2026-07-14", titulo: "Arranca el proyecto", texto: "" },
      ],
      galeria: [
        { src: "assets/img/ia/proyecto-iot-01/01-portada.png", pie: "el tablero de control con el nodo activo." },
        { src: "assets/img/ia/proyecto-iot-01/02-nodo.png", pie: "**foto** del ESP32 armado." },
        { src: "assets/img/ia/proyecto-iot-01/03-contrato.png", pie: "el modelo de capacidades, como diagrama." },
      ]
    }
  ],

  /* ---------- Página Historia ---------- */
  historia: {
    titular: "Diseño cosas que otras personas tienen que poder mantener funcionando.",
    retrato: "assets/img/retrato.jpg",
    parrafos: [
      "PLACEHOLDER: Empieza por dónde partiste. Diseño industrial en la Universidad Diego Portales, y desde ahí el desvío hacia la educación y la fabricación digital.",
      "PLACEHOLDER: Cuenta qué te interesa realmente: que un FabLab siga vivo tres años después de la inauguración, que un profesor pueda dar la clase sin ti al lado.",
      "PLACEHOLDER: Cierra con dónde estás hoy y qué tipo de proyectos buscas."
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
