function mostrarInfo(ramo) {
  const info = {
    'Química General I': '📘 Química General I\nPrerrequisito: Ninguno.',
    'Biología Celular': '📘 Biología Celular\nPrerrequisito: Ninguno.',
    'Antropología': '📘 Antropología\nPrerrequisito: Ninguno.',
    'Intro a las Ciencias Farmacéuticas': '📘 Introducción a las Ciencias Farmacéuticas\nPrerrequisito: Ninguno.',
    'Matemáticas': '📘 Matemáticas\nPrerrequisito: Ninguno.',
    'Integrado de Habilidades Científicas': '📘 Integrado de Habilidades Científicas\nPrerrequisito: Ninguno.',

    'Química General II': '📘 Química General II\nPrerrequisito: Química General I.',
    'Cálculo Diferencial': '📘 Cálculo Diferencial\nPrerrequisito: Matemáticas.',
    'Física': '📘 Física\nPrerrequisito: Cálculo Diferencial.',
    'Fundamentos del Quehacer Farmacéutico': '📘 Fundamentos del Quehacer Farmacéutico\nPrerrequisito: Intro a las Ciencias Farmacéuticas.',
    'Bioestadística': '📘 Bioestadística\nPrerrequisito: Matemáticas.',
    'Ética': '📘 Ética\nPrerrequisito: Ninguno.',

    'Salud Poblacional': '📘 Salud Poblacional\nPrerrequisito: Ninguno.',
    'Química Analítica Cualicuantitativa': '📘 Química Analítica Cualicuantitativa\nPrerrequisito: Química General II.',
    'Química Orgánica': '📘 Química Orgánica\nPrerrequisito: Química General II.',
    'Fisiología Integrada': '📘 Fisiología Integrada\nPrerrequisito: Biología Celular.',
    'Fisicoquímica': '📘 Fisicoquímica\nPrerrequisito: Química General II y Física.',
    'Gestión Personal y Habilidades para la Vida': '📘 Gestión Personal y Habilidades para la Vida\nPrerrequisito: Ninguno.',
    'Epidemiología': '📘 Epidemiología\nPrerrequisito: Bioestadística.',

    'Análisis Químico Instrumental': '📘 Análisis Químico Instrumental\nPrerrequisito: Química Analítica Cualicuantitativa.',
    'Fisiopatología': '📘 Fisiopatología\nPrerrequisito: Fisiología Integrada.',
    'Bioquímica General': '📘 Bioquímica General\nPrerrequisito: Química Orgánica.',
    'Química Orgánica Avanzada': '📘 Química Orgánica Avanzada\nPrerrequisito: Química Orgánica.',
    'Farmacología I': '📘 Farmacología I\nPrerrequisito: Bioquímica General y Fisiopatología.',
    'Tecnología Farmacéutica I': '📘 Tecnología Farmacéutica I\nPrerrequisito: Análisis Químico Instrumental.',
    'Química Farmacéutica I': '📘 Química Farmacéutica I\nPrerrequisito: Química Orgánica Avanzada.',

    'Microbiología General': '📘 Microbiología General\nPrerrequisito: Biología Celular.',
    'Persona y Sociedad': '📘 Persona y Sociedad\nPrerrequisito: Ninguno.',
    'Salud Digital': '📘 Salud Digital\nPrerrequisito: Ninguno.',
    'Farmacología II': '📘 Farmacología II\nPrerrequisito: Farmacología I.',
    'Tecnología Farmacéutica II': '📘 Tecnología Farmacéutica II\nPrerrequisito: Tecnología Farmacéutica I.',
    'Química Farmacéutica II': '📘 Química Farmacéutica II\nPrerrequisito: Química Farmacéutica I.',
    'Bioética': '📘 Bioética\nPrerrequisito: Ética.',

    'Metodología de la Investigación': '📘 Metodología de la Investigación\nPrerrequisito: Ninguno.',
    'Farmacognosia y Fitoterapia': '📘 Farmacognosia y Fitoterapia\nPrerrequisito: Microbiología General.',
    'Farmacia Clínica (G001)': '📘 Farmacia Clínica\nPrerrequisito: Farmacología II.',
    'Control y Aseguramiento de la Calidad': '📘 Control y Aseguramiento de la Calidad\nPrerrequisito: Tecnología Farmacéutica II.',
    'Legislación Farmacéutica': '📘 Legislación Farmacéutica\nPrerrequisito: Ninguno.',

    'Farmacia Clínica (H002)': '📘 Farmacia Clínica II\nPrerrequisito: Farmacia Clínica I.',
    'Toxicología': '📘 Toxicología\nPrerrequisito: Farmacología II.',
    'Biofarmacia': '📘 Biofarmacia\nPrerrequisito: Tecnología Farmacéutica II.',
    'Farmacia Asistencial': '📘 Farmacia Asistencial\nPrerrequisito: Farmacia Clínica.',
    'Gestión y Marketing Farmacéutico': '📘 Gestión y Marketing Farmacéutico\nPrerrequisito: Ninguno.',
    'Farmacovigilancia y Tecnovigilancia': '📘 Farmacovigilancia y Tecnovigilancia\nPrerrequisito: Farmacología II.',

    'Práctica I': '📘 Práctica I\nPrerrequisito: Aprobación de niveles 1 al 8.',
    'Práctica II': '📘 Práctica II\nPrerrequisito: Práctica I.',
    'Hito Evaluativo': '📘 Hito Evaluativo\nPrerrequisito: Evaluación final de la carrera.'
  };

  document.getElementById("infoRamo").innerText = info[ramo] || `📘 ${ramo}`;
}
