document.querySelector('.color-box').addEventListener('mouseover', function () {
    document.getElementById('text-danto-1').textContent = 'Recuerde haber visto los colores, le segura preguntado';
    document.getElementById('text-danto-2').textContent = '< -MUEVA EL MOUSE - >';
    document.getElementById('text-danto-3').textContent = 'Recuerde haber visto los colores, le segura preguntado';
    document.getElementById('danton-titulo').textContent = 'Mueva el mouse horizontalmente por los colores < - > Mueva el mouse horizontalmente por los colores';
});

const continuarBtn = document.getElementById('continuar');

 // Agregar evento 'click' a los botones
 continuarBtn.addEventListener('click', function() {
    diagnosticar();  // Se corrijió esto. Antes tenía un onClick en el HTML. Ahora llama a la función calcularIMC pasando el evento
});

document.querySelector('.color-box').addEventListener('mousemove', function (event) {
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

// Habilitar el botón para redirigir a la nueva página
function diagnosticar() {
    window.location.href = './resultados.html';
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

const container = document.getElementById('medicos-container');
let medicosArray = [];

// Función para crear las tarjetas de los médicos
function createCard(medico) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');
    card.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${medico.sexo === 'Masculino' ? '../assets/medico-tipo.png' : '../assets/medica-mina.png'}" class="card-img-top" alt="${medico.nombreCompleto}">
                    <div class="card-body">
                        <h5 class="card-title">${medico.nombreCompleto}</h5>
                        <p class="card-text">
                            Especialidad: ${medico.especialidad} <br>
                            Edad: ${medico.edad} <br>
                            Universidad: ${medico.universidad} <br>
                            Contacto: ${medico.telefonoContacto}
                        </p>
                    </div>
                </div>
            `;
    container.appendChild(card);
}

// Realizar fetch al endpoint
fetch('https://vps-3858808-x.dattaweb.com:8443/medicina/getMedics')
    .then(response => response.json())
    .then(data => {
        // Cumpliendo consigna: Guardar la información en un Array (Esto se puse en el readme)
        medicosArray = data;

        // Crear las tarjetas usando los datos del array, iterando con forEach (Esto también se puse en el readme)
        medicosArray.forEach(medico => createCard(medico));
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });