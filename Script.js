document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  function verificarBloqueos() {
    ramos.forEach(ramo => {
      const requisitos = ramo.dataset.prerrequisitos.split(',').filter(id => id);
      const aprobados = requisitos.every(id => {
        const prereq = document.getElementById(id);
        return prereq && prereq.classList.contains("aprobado");
      });

      if (requisitos.length === 0 || aprobados) {
        ramo.classList.remove("bloqueado");
      } else {
        ramo.classList.add("bloqueado");
      }
    });
  }

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      ramo.classList.toggle("aprobado");
      verificarBloqueos();
    });
  });

  verificarBloqueos();
});
