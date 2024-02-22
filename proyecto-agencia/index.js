// Funcionalidad: Mostrar un mensaje de confirmación al enviar el formulario
document.getElementById("perfilForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Perfil creado correctamente");
});

// Funcionalidad: Mostrar/ocultar lista de hoteles al hacer clic en un botón
var listaHotelesVisible = false;
document.getElementById("mostrarHotelesBtn").addEventListener("click", function() {
    var listaHoteles = document.getElementById("hoteles");
    if (listaHotelesVisible) {
        listaHoteles.style.display = "none";
    } else {
        listaHoteles.style.display = "block";
    }
    listaHotelesVisible = !listaHotelesVisible;
});
