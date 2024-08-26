document.getElementById("saludar-btn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").innerText = "Hola, " + nombre;
});
