document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el modal
    var myModal = new bootstrap.Modal(document.getElementById('myModal1'), {
        backdrop: 'static',
        keyboard: false  // También evita que se cierre con la tecla 'Esc'
    });
    myModal.show();

    // Seleccionar los botones 'Enviar' e 'Ingresar' por su ID
    const ingresarBtn = document.getElementById('ingresar');
    const enviarBtn = document.getElementById('enviar');
    
    // Agregar evento 'click' a los botonesn
    ingresarBtn.addEventListener('click', function() {
        storeName();  // Se corrijió esto. Antes tenía un onClick en el HTML. Ahora llama a la función calcularIMC pasando el evento
    });
    // Evento 'click' para el botón 'Enviar'
    enviarBtn.addEventListener('click', function (event) {
        event.preventDefault();  // Lo sacamos para manejar como entendemos el click, sin recargar la página... Sería
        calcularIMC(event);  // Se corrijió esto. Antes tenía un onClick en el HTML. Llama a la función para calcular el IMC
    });
});



// Escucha el evento 'shown.bs.modal' del modal con id 'myModal3'
document.getElementById('myModal3').addEventListener('shown.bs.modal', function () {
    cargarTestVision();
});



function storeName() {
    const name = document.getElementById('name').value;
    const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; // Expresión regular para letras y espacios (incluyendo acentos y ñ)

    if (namePattern.test(name)) {
        localStorage.setItem('userName', name);
        // Abrir el segundo modal
        const myModal2 = new bootstrap.Modal(document.getElementById('myModal2'));
        myModal2.show();
    } else {
        document.getElementById('name').value = '';
        alert("Por favor, ingrese solo letras del castellano y espacios. No se admiten números ni símbolos.");
    }
}

function calcularIMC(event) {
    event.preventDefault(); // Evita el envío del formulario
    let name = localStorage.getItem('userName');

    let weightInput = document.getElementById('weight').value;
    let heightInput = document.getElementById('height').value;

    // Verificar si name está vacío o es null
    if (!name) {
        name = "Paciente";
    }
    // Validar que weight sea un número entero o decimal con punto

    const weightPattern = /^\d+(\.\d+)?$/;
    let weight = 0;
    if (weightPattern.test(weightInput)) {
        weight = parseFloat(weightInput);
    } else {
        alert('El peso debe ser un número entero o decimal, separando decimales con un punto.');
        return; // Salir de la función si el peso no es válido
    }

    // Validar que height sea solo números del 0 al 9
    const heightPattern = /^\d+$/;
    let height = 0;
    if (heightPattern.test(heightInput)) {
        height = parseFloat(heightInput) / 100; // Convertir cm a metros si es válido
    } else {
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
        document.getElementById('age').value = '';
        alert('La altura solo admite números del 0 al 9.');
        return; // Salir de la función si la altura no es válida
    }

    const imc = weight / (height * height);
    let resultMessage = `${name}, tu índice de masa corporal es igual a: ${imc.toFixed(2)}\n\n`;

    if (imc < 18.5) {
        resultMessage += "¡INSUFICIENTE!";
    } else if (imc >= 18.5 && imc < 25) {
        resultMessage += "¡NORMAL Y SALUDABLE!";
    } else if (imc >= 25 && imc < 30) {
        resultMessage += "¡SOBREPESO!";
    } else {
        resultMessage += "¡OBESIDAD!";
    }

    // Guardar los valores en localStorage
    localStorage.setItem('IMC', imc);
    localStorage.setItem('peso', weight);
    localStorage.setItem('estatura', height);
    localStorage.setItem('diagnostico', resultMessage);

    // Recuperar y mostrar los valores en la consola
    console.log('IMC:', localStorage.getItem('IMC'));
    console.log('Peso:', localStorage.getItem('peso'));
    console.log('Estatura:', localStorage.getItem('estatura'));
    console.log('Diagnóstico:', localStorage.getItem('diagnostico'));
    window.location.href = './html/vision.html';
}

function cargarTestVision() {

    document.querySelector('.color-box').addEventListener('mouseover', function(){
        document.getElementById('text-danto-1').textContent = 'Recuerde haber visto los colores, le sera preguntado';
        document.getElementById('text-danto-2').textContent = '< -MUEVA EL MOUSE - >';
        document.getElementById('text-danto-3').textContent = 'Recuerde haber visto los colores, le sera preguntado';
        document.getElementById('danton-titulo').textContent = 'Mueva el mouse horizontalmente por los colores < - > Mueva el mouse horizontalmente por los colores';
    } );
    
    document.querySelector('.color-box').addEventListener('mousemove', function(event) {
        const columns = document.querySelectorAll('.color-column');
    
        // Obtener el ancho total del color-box
        const boxWidth = this.offsetWidth;
    
        // Calcular la posición del mouse como un porcentaje del ancho total
        const mouseXPercentage = (event.clientX / boxWidth) * 100;
    
        // Cambiar colores según la posición del mouse
        if (mouseXPercentage < 33) {
            // Cambiar el texto de los elementos con los id especificados
                   
            setColumnColors(columns, 'red', 'yellow', 'green');
        } else if (mouseXPercentage < 66) {
      
            setColumnColors(columns, 'yellow', 'green', 'red');
        } else {
    
            setColumnColors(columns, 'green', 'red', 'yellow');
        }
    });
}

function setColumnColors(columns, color1, color2, color3) {
    columns[0].style.backgroundColor = color1;
    columns[1].style.backgroundColor = color2;
    columns[2].style.backgroundColor = color3;

    // Cambiar el color del texto basado en el fondo
    columns[0].querySelector('.color-text').style.color = getTextColor(color1);
    columns[1].querySelector('.color-text').style.color = getTextColor(color2);
    columns[2].querySelector('.color-text').style.color = getTextColor(color3);
}


const getTextColor = (backgroundColor) => {
    switch (backgroundColor) {
        case 'red':
            return 'green';
        case 'yellow':
            return 'red';
        case 'green':
            return 'yellow';
        default:
            return 'black';
    }
};