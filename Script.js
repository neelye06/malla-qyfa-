function mostrarInfo(ramo) {
  const info = {
    quimica: "Química: Fundamentos de química general. Créditos: 5. Prerrequisito: ninguno.",
    biologia: "Biología: Células, tejidos y genética. Créditos: 4. Prerrequisito: ninguno.",
    matematicas: "Matemáticas: Álgebra básica y funciones. Créditos: 5. Prerrequisito: PSU."
  };

  document.getElementById("infoRamo").innerText = info[ramo] || "Información no disponible.";
}
