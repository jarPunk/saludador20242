document.getElementById("saludar-btn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const genero = document.getElementById("genero").value;
    document.getElementById("saludo").innerText = "Hola, " + genero + " " + nombre;
});
