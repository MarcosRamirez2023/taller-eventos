document.addEventListener('DOMContentLoaded', function() {
  const divSaludo = document.querySelector('div');
  divSaludo.addEventListener('click', function() {
    alert('Hola! Soy el div');
  });

  const btnSaludar = document.querySelector('#saludarBtn');
  btnSaludar.addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation();
  });
});
