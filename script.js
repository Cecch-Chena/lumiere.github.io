// Obtener los enlaces y los divs por su ID
var enlaceDiv1 = document.getElementById("mostrarDiv1");
var enlaceDiv2 = document.getElementById("mostrarDiv2");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

// Agregar oyentes de eventos a los enlaces
enlaceDiv1.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el enlace realice una acción predeterminada
  div1.style.display = "flex"; // Mostrar Div 1
  div2.style.display = "none"; // Ocultar Div 2
});

enlaceDiv2.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el enlace realice una acción predeterminada
  div1.style.display = "none"; // Ocultar Div 1
  div2.style.display = "flex"; // Mostrar Div 2
});