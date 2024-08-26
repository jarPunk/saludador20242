describe('Bot Saludador', () => {
    beforeEach(() => {
        // Limpiamos el valor de los campos antes de cada test
        document.getElementById('nombre').value = '';
        document.getElementById('genero').value = 'Sr.';
        document.getElementById('edad').value = '';
        document.getElementById('idioma').value = 'es';
        document.getElementById('saludo').innerText = '';
    });

    test('saluda con "Hola" en español por defecto', () => {
        document.getElementById('nombre').value = 'Carlos';
        document.getElementById('saludar-btn').click();

        expect(document.getElementById('saludo').innerText).toBe('Hola, Sr. Carlos');
    });

    test('saluda en inglés cuando se selecciona', () => {
        document.getElementById('nombre').value = 'Carlos';
        document.getElementById('idioma').value = 'en';
        document.getElementById('saludar-btn').click();

        expect(document.getElementById('saludo').innerText).toBe('Hello, Sr. Carlos');
    });

    test('saluda formalmente si la edad es 18 o mayor', () => {
        document.getElementById('nombre').value = 'Carlos';
        document.getElementById('edad').value = '18';
        document.getElementById('saludar-btn').click();

        expect(document.getElementById('saludo').innerText).toBe('Hola, Sr. Carlos, es un placer saludarlo.');
    });

    test('saluda informalmente si la edad es menor de 18', () => {
        document.getElementById('nombre').value = 'Carlos';
        document.getElementById('edad').value = '17';
        document.getElementById('saludar-btn').click();

        expect(document.getElementById('saludo').innerText).toBe('Hola, Sr. Carlos, ¡qué gusto verte!');
    });
});