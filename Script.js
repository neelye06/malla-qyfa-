document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');

    // Verificar qué ramos desbloquear
    document.querySelectorAll('.ramo.bloqueado').forEach(pendiente => {
      const requisitos = pendiente.dataset.prerrequisitos.split(',').filter(r => r);
      const todosCumplidos = requisitos.every(id => {
        const elem = document.getElementById(id);
        return elem && elem.classList.contains('aprobado');
      });

      if (todosCumplidos) {
        pendiente.classList.remove('bloqueado');
      }
    });
  });
});
