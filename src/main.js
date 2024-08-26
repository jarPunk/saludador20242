document.getElementById("saludar-btn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const genero = document.getElementById("genero").value;
    const edad = document.getElementById("edad").value;
    let saludo = "Hola, " + genero + " " + nombre;
    
    if (edad >= 18) {
        saludo += ", es un placer saludarlo.";
    } else {
        saludo += ", ¡qué gusto verte!";
    }

    document.getElementById("saludo").innerText = saludo;
});
