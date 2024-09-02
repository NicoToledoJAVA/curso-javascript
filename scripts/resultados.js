// Recuperar los valores del localStorage
const nombre = localStorage.getItem('userName') || 'Paciente';
const peso = localStorage.getItem('peso');
const estatura = localStorage.getItem('estatura');
const imc = localStorage.getItem('IMC');
const diagnostico = localStorage.getItem('diagnostico');
// Selecciona el elemento con id 'recomendacion'
const recomendacionElement = document.getElementById('recomendacion');


// Insertar los valores en el DOM
document.getElementById('nombre').textContent = nombre;
document.getElementById('peso').textContent = peso;
document.getElementById('estatura').textContent = estatura;
document.getElementById('imc').textContent = imc;
document.getElementById('diagnostico').textContent = diagnostico;

function verDoctor() {

    // Verificar si el IMC se obtuvo correctamente
    if (imc) {

        // URL de la API con el IMC como parámetro de consulta
        const url = `http://200.45.208.91:8080/medicina/recomendacion?imc=${encodeURIComponent(imc)}`;
        // Hacer la solicitud fetch
        fetch(url)
            .then(response => {
                // Verificar si la respuesta es correcta
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Obtener la respuesta como texto
                return response.text();
            })
            .then(text => {
                // Manejar la respuesta de la API
                console.log('Recomendación recibida:', text);
                // Agregar "El doctor dice: " antes del texto
                let respuesta = "El doctor dice: ".concat(text);

                // Establece la clase 'highlight' en el elemento
                recomendacionElement.classList.add('doctor');

                recomendacionElement.textContent = respuesta; // Ejemplo de cómo insertar el texto en el DOM
               

            })
            .catch(error => {
                // Manejar errores en la solicitud
                alert('Hubo un problema con la solicitud fetch:', error);
            });
    } else {
        alert('IMC no encontrado en localStorage');

    }

}
