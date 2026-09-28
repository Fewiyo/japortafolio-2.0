# -*- coding: utf-8 -*-
"""Genera los CV en ingles (cv/*-en.html) a partir de los CV en espanol,
reemplazando cada trozo de texto por su traduccion. Si un CV en espanol
cambia, se agrega aqui la frase nueva y se vuelve a correr."""
import io, os, re, html

AQUI = os.path.dirname(os.path.abspath(__file__))

EN = {
    "Diseñador industrial · Director de I+D+i en Ideo Maker": "Industrial designer · Director of R&D&I at Ideo Maker",
    "Diseñador industrial de la Universidad Diego Portales, estudiante del Magíster en Ciencias del Diseño de la Universidad Adolfo Ibáñez. Diseño y pongo en marcha espacios maker y FabLabs para liceos, desde el modelo 3D recorrible hasta la sala construida y los docentes capacitados. Diseño kits educativos pensados para fabricarse, y entre 2022 y 2025 hice clases de robótica, fabricación digital y design thinking.":
        "Industrial designer from Diego Portales University, currently pursuing a Master's in Design Sciences at Adolfo Ibáñez University. I design and launch maker spaces and FabLabs for high schools, from the walkable 3D model to the finished room and the trained teachers. I design educational kits built to be manufactured, and between 2022 and 2025 I taught robotics, digital fabrication and design thinking.",
    "Diseñador industrial de la Universidad Diego Portales. Diseño y pongo en marcha espacios maker y FabLabs para liceos, desde el modelo 3D recorrible hasta la sala construida y los docentes capacitados. Diseño kits educativos pensados para fabricarse, y durante cuatro años hice clases de robótica, fabricación digital y design thinking.":
        "Industrial designer from Diego Portales University. I design and launch maker spaces and FabLabs for high schools, from the walkable 3D model to the finished room and the trained teachers. I design educational kits built to be manufactured, and for four years I taught robotics, digital fabrication and design thinking.",
    "Diseñador industrial, estudiante del Magíster en Ciencias del Diseño de la Universidad Adolfo Ibáñez. Mi trabajo cruza educación, fabricación digital y diseño de espacios: he enseñado robótica, design thinking y fabricación digital a estudiantes escolares y universitarios entre 2022 y 2025, y diseño e implemento aulas maker para liceos del norte de Chile.":
        "Industrial designer, currently pursuing a Master's in Design Sciences at Adolfo Ibáñez University. My work brings together education, digital fabrication and space design: I taught robotics, design thinking and digital fabrication to school and university students between 2022 and 2025, and I design and implement maker classrooms for high schools in northern Chile.",
    "Diseñador industrial · Currículum académico": "Industrial designer · Academic CV",
    "Formación académica": "Education",
    "Formación": "Education",
    "2026 – hoy": "2026 – present", "2022 – hoy": "2022 – present",
    "Magíster en Ciencias del Diseño": "Master's in Design Sciences",
    "Universidad Adolfo Ibáñez · En curso desde agosto de 2026": "Adolfo Ibáñez University · In progress since August 2026",
    "Ciencia de Datos": "Data Science",
    "Desafío Latam · Noviembre de 2025 a noviembre de 2026": "Desafío Latam · November 2025 to November 2026",
    "Diseñador Industrial, aprobado con distinción": "Industrial Designer, passed with distinction",
    "Diseño Industrial, aprobado con distinción": "Industrial Design, passed with distinction",
    "Universidad Diego Portales, Facultad de Arquitectura, Arte y Diseño": "Diego Portales University, School of Architecture, Art and Design",
    "Proyecto de título:": "Thesis project:",
    "AnsioSOS, salud mental y diseño estratégico": "AnsioSOS, mental health and strategic design",
    ". Profesora guía: Florencia Adriasola. Aprobado con distinción.": ". Advisor: Florencia Adriasola. Passed with distinction.",
    "Universidad Diego Portales · Proyecto de título: AnsioSOS, salud mental y diseño estratégico, aprobado con distinción": "Diego Portales University · Thesis project: AnsioSOS, mental health and strategic design, passed with distinction",
    "Educación escolar completa": "Primary and secondary education",
    "Liceo Experimental Manuel de Salas": "Manuel de Salas Experimental High School",
    "Experiencia profesional": "Professional experience", "Experiencia": "Experience",
    "Director de Investigación, Desarrollo e Innovación": "Director of Research, Development and Innovation",
    "Ideo Maker SPA · Robótica educativa y cultura maker": "Ideo Maker SPA · Educational robotics and maker culture",
    "Aulas Maker STEM, Fundación Chile.": "STEM Maker Classrooms, Fundación Chile.",
    "Diseño, modelado en Unreal Engine, implementación y capacitación docente en liceos de la región de Antofagasta: Likan Antai y María Elena (2025), Taltal y Calama (2026).":
        "Design, Unreal Engine modeling, implementation and teacher training at high schools in the Antofagasta region: Likan Antai and María Elena (2025), Taltal and Calama (2026).",
    "Salas Maker STEAM, Fundación País Digital y Spence de BHP.": "STEAM Maker Rooms, País Digital Foundation and BHP's Spence mine.",
    "Escuela Caracoles y Escuela Estación Baquedano, Sierra Gorda, programa MASXXI. Inauguradas en mayo de 2024.": "Caracoles School and Estación Baquedano School, Sierra Gorda, MASXXI program. Opened in May 2024.",
    "Kits educativos.": "Educational kits.",
    "Bicho-bot, de prototipo para talleres a kit de MDF a la venta; MK-BOT, kit de robótica con Arduino para enseñanza media.": "Bicho-bot, from workshop prototype to an MDF kit for sale; MK-BOT, an Arduino robotics kit for high school.",
    "Tecno-cultivo, Fundación Mustakis (2023).": "Tech Farming, Mustakis Foundation (2023).",
    "Experiencia con garra robótica modular para el Espacio KAOS.": "An experience with a modular robotic claw for the KAOS Space.",
    "Congreso Futuro en tu comuna.": "Congreso Futuro en tu comuna.",
    "Ferias maker y talleres de Bicho-bot en liceos y hospitales.": "Maker fairs and Bicho-bot workshops in high schools and hospitals.",
    "Capacitador en talleres": "Workshop trainer",
    "Ideo Maker, para Anglo American": "Ideo Maker, for Anglo American",
    "Diseñador de Investigación y Desarrollo": "Research and Development Designer",
    "Atacama Biomaterials · Diseño y construcción de máquina CNC": "Atacama Biomaterials · Design and construction of a CNC machine",
    "Consultor de Diseño Instruccional": "Instructional Design Consultant",
    "TICAL SPA · Educación e-learning": "TICAL SPA · E-learning education",
    "Fotógrafo": "Photographer",
    "Organización Panamericana de la Salud y CEPAL · Primer semestre": "Pan American Health Organization and ECLAC · First semester",
    "Organización Panamericana de la Salud y CEPAL": "Pan American Health Organization and ECLAC",
    "Jefe de Diseño": "Head of Design",
    "Agencia de comunicaciones Converso · Segundo semestre": "Converso communications agency · Second semester",
    "Agencia de comunicaciones Converso": "Converso communications agency",
    "Diseñador gráfico": "Graphic designer",
    "Programa Interdisciplinario de Investigación en Políticas de Infancia y Familia (INFAS), Universidad Alberto Hurtado · Segundo semestre": "Interdisciplinary Research Program on Childhood and Family Policy (INFAS), Alberto Hurtado University · Second semester",
    "Programa de Investigación en Políticas de Infancia y Familia (INFAS), Universidad Alberto Hurtado": "Research Program on Childhood and Family Policy (INFAS), Alberto Hurtado University",
    "Práctica profesional": "Internship",
    "Laboratorio de Exploración Gráfica de Diseño, Universidad Diego Portales · Segundo semestre": "Graphic Exploration Design Lab, Diego Portales University · Second semester",
    "Amercanda, empresa de museografía · Primer semestre": "Amercanda, museum design company · First semester",
    "Docencia": "Teaching", "Docencia · 2022 – 2025": "Teaching · 2022 – 2025",
    "Programa de Estudios y Desarrollo de Talentos PENTA UC": "PENTA UC Talent Studies and Development Program",
    "Pontificia Universidad Católica de Chile": "Pontifical Catholic University of Chile",
    "2025 · Robot Espacial, primer semestre": "2025 · Space Robot, first semester",
    "2024 · Robótica y Design Thinking, segundo semestre": "2024 · Robotics and Design Thinking, second semester",
    "2024 · Design Thinking y Fabricación Digital, primer semestre": "2024 · Design Thinking and Digital Fabrication, first semester",
    "2023 · Diseño Especulativo, segundo semestre": "2023 · Speculative Design, second semester",
    "2023 · Fabricación Digital 3D, primer semestre": "2023 · 3D Digital Fabrication, first semester",
    "2023 · Economía Circular, vacaciones de verano": "2023 · Circular Economy, summer break",
    "2022 · Design Thinking, segundo semestre": "2022 · Design Thinking, second semester",
    "Programa CREA UC, Pontificia Universidad Católica de Chile": "CREA UC Program, Pontifical Catholic University of Chile",
    "Exploración Espacial y Robótica, vacaciones de verano": "Space Exploration and Robotics, summer break",
    "Universidad del Desarrollo, Facultad de Ingeniería": "Universidad del Desarrollo, School of Engineering",
    "Profesional de apoyo en IIT114A Taller de Exploración Tecnológica y Prototipado, primer año de Ingeniería Civil Plan Común": "Support professional in IIT114A Technological Exploration and Prototyping Workshop, first-year Civil Engineering common core",
    "Preparé y dicté, junto a Mario Aguilera y Gabriel Hochfaerber, los módulos de diseño del ramo: Introducción al prototipado, Introducción al dibujo técnico y Manufactura digital (marzo de 2025)": "Together with Mario Aguilera and Gabriel Hochfaerber, I prepared and taught the course's design modules: Introduction to Prototyping, Introduction to Technical Drawing and Digital Manufacturing (March 2025)",
    "Escuela Francisco Bilbao, Recoleta · Corporación Santa Cruz": "Francisco Bilbao School, Recoleta · Santa Cruz Corporation",
    "Taller de robótica de Ideo Maker con el kit MK-BOT, junto a Nelson Mora. Dos cursos de seis meses": "Ideo Maker robotics workshop with the MK-BOT kit, with Nelson Mora. Two six-month courses",
    "Colegio Andrés Bello": "Andrés Bello School",
    "Robótica y Design Thinking": "Robotics and Design Thinking",
    "Corporación Cultural de Lo Barnechea": "Lo Barnechea Cultural Corporation",
    "Robótica para niñas y niños de 6 a 12 años, vacaciones de invierno y verano. Para estos talleres diseñé Bicho-bot, que después se convirtió en kit.": "Robotics for girls and boys aged 6 to 12, winter and summer breaks. For these workshops I designed Bicho-bot, which later became a kit.",
    "Capacitación a docentes en aulas maker": "Teacher training in maker classrooms",
    "Capacitación docente en aulas maker": "Teacher training in maker classrooms",
    "Ideo Maker, para Fundación Chile y Fundación País Digital": "Ideo Maker, for Fundación Chile and the País Digital Foundation",
    "Equipos docentes de Likan Antai y María Elena (2025), Taltal y Calama (2026), región de Antofagasta.": "Teaching staff at Likan Antai and María Elena (2025), Taltal and Calama (2026), Antofagasta region.",
    "Escuela Caracoles y Escuela Estación Baquedano, Sierra Gorda (2024).": "Caracoles School and Estación Baquedano School, Sierra Gorda (2024).",
    "Formación docente y capacitación a docentes": "Teacher development and training",
    "Cursos y perfeccionamiento": "Courses and professional development",
    "Métricas de Impacto: ESG + Innovación para Startups": "Impact Metrics: ESG + Innovation for Startups",
    "COLAB, Centro de Innovación UC · 14 talleres, 56 horas": "COLAB, UC Innovation Center · 14 workshops, 56 hours",
    "COLAB, Centro de Innovación UC · 56 horas": "COLAB, UC Innovation Center · 56 hours",
    "Unreal Engine 5 para Realidad Aumentada y Virtual": "Unreal Engine 5 for Augmented and Virtual Reality",
    "Núcleo Escuela, Becas Capital Humano · 28 sesiones de 3 horas": "Núcleo Escuela, Human Capital Scholarships · 28 three-hour sessions",
    "Núcleo Escuela, Becas Capital Humano · 84 horas": "Núcleo Escuela, Human Capital Scholarships · 84 hours",
    "International Language Institute, Washington DC · Tres meses": "International Language Institute, Washington DC · Three months",
    "English Express, Londres · Primer semestre": "English Express, London · First semester",
    "Intensivo de actuación": "Acting intensive",
    "Pontificia Universidad Católica de Chile · Enero": "Pontifical Catholic University of Chile · January",
    "Participación y voluntariado": "Involvement and volunteering",
    "Integrante de la Mesa de Salud Mental": "Member of the Mental Health Committee",
    "Universidad Diego Portales · Dos años": "Diego Portales University · Two years",
    "Voluntario en The Heart of London Living": "Volunteer at The Heart of London Living",
    "L.H.A. London, Londres": "L.H.A. London, London",
    "Equipo Solar UDP, auto solar Haalur": "UDP Solar Team, Haalur solar car",
    "Carrera Solar Atacama 2018 · 2.600 km, de Santiago a Arica · Primer lugar, categoría Cruiser": "2018 Atacama Solar Challenge · 2,600 km, from Santiago to Arica · First place, Cruiser category",
    "Vicepresidente del Centro de Estudiantes de Diseño": "Vice President of the Design Student Council",
    "Facultad de Arquitectura, Arte y Diseño, Universidad Diego Portales": "School of Architecture, Art and Design, Diego Portales University",
    "Reconocimientos": "Awards",
    "Primer lugar, Carrera Solar Atacama 2018": "First place, 2018 Atacama Solar Challenge",
    ", categoría Cruiser, con el auto solar Haalur.": ", Cruiser category, with the Haalur solar car.",
    ", categoría Cruiser, con el auto solar Haalur del equipo UDP. 2.600 km, de Santiago a Arica.": ", Cruiser category, with the UDP team's Haalur solar car. 2,600 km, from Santiago to Arica.",
    ", categoría Cruiser": ", Cruiser category",
    "Idiomas": "Languages",
    "Español nativo · Inglés B2": "Spanish, native · English, B2",
    "Español nativo · Inglés B2 (International Language Institute, Washington DC; English Express, Londres)": "Spanish, native · English, B2 (International Language Institute, Washington DC; English Express, London)",
    "Herramientas": "Tools",
    "3D y fabricación:": "3D and fabrication:",
    "Gráfica, video e interacción:": "Graphics, video and interaction:",
    "Datos:": "Data:",
    "Desarrollo con IA:": "AI-assisted development:",
    "Educación y trabajo:": "Education and work:",
    "Docente, Programa PENTA UC": "Teacher, PENTA UC Program",
    "Pontificia Universidad Católica de Chile · Robot Espacial, Robótica y Design Thinking, Design Thinking y Fabricación Digital, Diseño Especulativo, Economía Circular, Fabricación Digital 3D":
        "Pontifical Catholic University of Chile · Space Robot, Robotics and Design Thinking, Design Thinking and Digital Fabrication, Speculative Design, Circular Economy, 3D Digital Fabrication",
    "Docente, Programa CREA UC": "Teacher, CREA UC Program",
    "Profesional de apoyo, Universidad del Desarrollo": "Support professional, Universidad del Desarrollo",
    "Taller de Exploración Tecnológica y Prototipado, Ingeniería Civil Plan Común · Módulos de prototipado, dibujo técnico y manufactura digital": "Technological Exploration and Prototyping Workshop, Civil Engineering common core · Modules on prototyping, technical drawing and digital manufacturing",
    "Profesor de taller de robótica": "Robotics workshop teacher",
    "Escuela Francisco Bilbao, Recoleta · Corporación Santa Cruz · Con Ideo Maker y el kit MK-BOT, dos cursos de seis meses": "Francisco Bilbao School, Recoleta · Santa Cruz Corporation · With Ideo Maker and the MK-BOT kit, two six-month courses",
    "Docente de Robótica y Design Thinking": "Robotics and Design Thinking teacher",
    "Docente de robótica para niñas y niños": "Robotics teacher for girls and boys",
    "Corporación Cultural de Lo Barnechea · Vacaciones de invierno y verano": "Lo Barnechea Cultural Corporation · Winter and summer breaks",
    "Director de Investigación, Desarrollo e Innovación, Ideo Maker SPA": "Director of Research, Development and Innovation, Ideo Maker SPA",
    "Diseño e implementación de aulas maker (Fundación Chile, Fundación País Digital), kits educativos (Bicho-bot, MK-BOT) y experiencias STEAM (Tecno-cultivo, Fundación Mustakis; Congreso Futuro en tu comuna).":
        "Design and implementation of maker classrooms (Fundación Chile, País Digital Foundation), educational kits (Bicho-bot, MK-BOT) and STEAM experiences (Tech Farming, Mustakis Foundation; Congreso Futuro en tu comuna).",
    "Diseñador de Investigación y Desarrollo, Atacama Biomaterials": "Research and Development Designer, Atacama Biomaterials",
    "Diseño y construcción de máquina CNC": "Design and construction of a CNC machine",
    "Consultor de Diseño Instruccional, TICAL SPA": "Instructional Design Consultant, TICAL SPA",
    "Fotógrafo, Organización Panamericana de la Salud y CEPAL": "Photographer, Pan American Health Organization and ECLAC",
    "Diseñador gráfico, INFAS, Universidad Alberto Hurtado": "Graphic designer, INFAS, Alberto Hurtado University",
    "Programa Interdisciplinario de Investigación en Políticas de Infancia y Familia": "Interdisciplinary Research Program on Childhood and Family Policy",
    "Jefe de Diseño, Agencia Converso": "Head of Design, Converso agency",
    "Inglés intensivo": "Intensive English",
    "English Express, Londres (2019) · International Language Institute, Washington DC (2021 – 2022)": "English Express, London (2019) · International Language Institute, Washington DC (2021 – 2022)",
    "Participación universitaria": "University involvement",
    "· Integrante de la Mesa de Salud Mental, UDP": "· Member of the Mental Health Committee, UDP",
    "· Equipo Solar UDP, auto solar Haalur": "· UDP Solar Team, Haalur solar car",
    "· Vicepresidente del Centro de Estudiantes de Diseño, UDP": "· Vice President of the Design Student Council, UDP",
    "Reconocimientos e idiomas": "Awards and languages",
    "Portafolio de proyectos: japortafolio.com": "Project portfolio: japortafolio.com/en",
    "CV completo Vicente Cáceres Farías": "Full CV Vicente Cáceres Farías",
    "CV Vicente Cáceres Farías": "CV Vicente Cáceres Farías",
    "CV académico Vicente Cáceres Farías": "Academic CV Vicente Cáceres Farías",
}


def traducir(texto, faltan):
    def trozo(m):
        crudo = m.group(0)
        limpio = html.unescape(crudo).strip()
        if not limpio or limpio not in EN:
            if re.search(r"[a-záéíóúñ]{3}", limpio, re.I) and limpio not in EN:
                faltan.add(limpio)
            return crudo
        pre = crudo[:len(crudo) - len(crudo.lstrip())]
        post = crudo[len(crudo.rstrip()):]
        return pre + html.escape(EN[limpio], quote=False) + post
    cabeza, cuerpo = texto.split("<body>", 1)
    cabeza = cabeza.replace('<html lang="es">', '<html lang="en">')
    cabeza = re.sub(r"<title>(.*?)</title>", lambda m: "<title>%s</title>" % EN.get(m.group(1), m.group(1)), cabeza)
    cuerpo = re.sub(r"(?<=>)[^<]+(?=<)", trozo, cuerpo)
    return cabeza + "<body>" + cuerpo


if __name__ == "__main__":
    faltan = set()
    for f in ["completo", "profesional", "academico"]:
        es = io.open(os.path.join(AQUI, f + ".html"), encoding="utf-8").read()
        io.open(os.path.join(AQUI, f + "-en.html"), "w", encoding="utf-8", newline="\n").write(traducir(es, faltan))
    ok = {"Vicente Cáceres Farías", "vicentecfarias@gmail.com", "japortafolio.com", "linkedin.com/in/vicente-caceres-farias",
          "Semi-Intensive English (ESL) Program", "Intensive English, Callan Method", "Liceo Experimental Manuel de Salas",
          "Amercanda", "Rhinoceros 3D, Fusion 360, Blender, Unreal Engine, AutoCAD, V-Ray, Tinkercad, Arduino"}
    resto = sorted(x for x in faltan if x not in ok and not re.match(r"^[\w .,+:()/-]*(Python|Illustrator|Moodle|Claude)", x))
    print("sin traducir:", len(resto))
    for x in resto:
        print("  ", x)
