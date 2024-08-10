/* 
-------------------- 0 --------------------
Llamada a la función para iniciar el proceso
 iniciarSesion(); La podiamos poner aqui 
 Pero hemos decidido hacerlo con un botón azul 
-------------------- 0 --------------------
 */



// 1. Declaración de variables, constantes y Arrays

// Variables:
let nombreUsuario = "user";
let edadUsuario = 99;

// Declaración de constantes
const maxIntereses = 3;

// Declaración de arrays
let intereses = ["Programación", "Música", "Deportes"];


//2. Crear una o más funciones JS que generen interacción
function saludarUsuario() {
    alert("Hola " + nombreUsuario + ", bienvenido a nuestro sitio!");
}

function mostrarIntereses() {
    let interesesString = intereses.join(", ");
    alert("Tus intereses son: " + interesesString);
}

//3. Agregar ciclos de iteración y/o condicionales necesarios para que el proyecto funcione correctamente

function pedirIntereses() {
    for (let i = 0; i < 3; i++) {
        let nuevoInteres = prompt("Ingresa un interés (Intento " + (i + 1) + " de " + maxIntereses + "):");
        if (nuevoInteres) {
            intereses.push(nuevoInteres);
        } else {
            alert("No ingresaste nada. Intento perdido.");
        }
    }

    if (intereses.length > 0) {
        mostrarIntereses();
    } else {
        alert("No se ingresaron intereses.");
    }
}

//4. Integra el uso de la Consola JS y de los cuadros de diálogo Prompt, Confirm y Alert

function iniciarSesion() {
    let confirmar = confirm("¿Quieres iniciar sesión?");
    if (confirmar) {
        nombreUsuario = prompt("Por favor, ingresa tu nombre:");
        edadUsuario = prompt("Por favor, ingresa tu edad:");

        console.log("Usuario ingresado:", nombreUsuario);
        console.log("Edad ingresada:", edadUsuario);

        saludarUsuario();
        pedirIntereses();
    } else {
        alert("Has cancelado el inicio de sesión.");
    }
}

