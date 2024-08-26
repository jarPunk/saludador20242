document.getElementById("saludar-btn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const genero = document.getElementById("genero").value;
    const edad = document.getElementById("edad").value;
    const idioma = document.getElementById("idioma").value;
    let saludo;

    if (idioma === "es") {
        saludo = "Hola, " + genero + " " + nombre;
        if (edad >= 18) {
            saludo += ", es un placer saludarlo.";
        } else {
            saludo += ", ¡qué gusto verte!";
        }
    } else if (idioma === "en") {
        saludo = "Hello, " + genero + " " + nombre;
        if (edad >= 18) {
            saludo += ", it's a pleasure to greet you.";
        } else {
            saludo += ", nice to see you!";
        }
    }

    document.getElementById("saludo").innerText = saludo;
});
