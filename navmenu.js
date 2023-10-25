document.addEventListener("DOMContentLoaded", function() {
    // Captura el botón del menú y el menú desplegable
    var dropbtn = document.querySelector("nav .dropbtn");
    var dropdownContent = document.querySelector("nav .dropdown-content");

    // Muestra u oculta el menú desplegable cuando se hace clic en el botón
    dropbtn.addEventListener("click", function() {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Cierra el menú desplegable si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (event.target !== dropbtn && event.target !== dropdownContent) {
            dropdownContent.style.display = "none";
        }
    });
});