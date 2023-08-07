document.addEventListener('DOMContentLoaded', function() {
  const divSaludo = document.querySelector('div');
  divSaludo.addEventListener('click', function() {
    alert('Hola! Soy el div');
  });
});
