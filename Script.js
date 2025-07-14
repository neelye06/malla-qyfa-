<script>
  function actualizarCursos() {
    document.querySelectorAll('.curso').forEach(div => {
      const id = div.dataset.id;
      const requisitos = div.dataset.depende ? div.dataset.depende.split(',') : [];
      const completos = requisitos.every(req => localStorage.getItem(req) === 'true');
      div.style.display = (requisitos.length === 0 || completos) ? 'block' : 'none';
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
      const id = input.dataset.id;
      const label = input.closest('label');
      const guardado = localStorage.getItem(id);
      if (guardado === 'true') {
        input.checked = true;
        label.classList.add('completado');
      }

      input.addEventListener('change', () => {
        localStorage.setItem(id, input.checked);
        if (input.checked) {
          label.classList.add('completado');
        } else {
          label.classList.remove('completado');
        }
        actualizarCursos();
      });
    });
  }

  actualizarCursos();
</script>
