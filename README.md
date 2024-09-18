Proyecto de Consulta Médica
Este proyecto simula una plataforma médica con tres etapas interactivas: ingreso de datos del paciente, test de visión (daltonismo), y visualización de resultados junto con información de médicos. A continuación se detalla el funcionamiento y la estructura del proyecto.

Descripción
El proyecto está compuesto por tres páginas HTML:

index.html: En esta página, el usuario ingresa sus datos personales, como nombre, peso, estatura y edad. Estos datos se almacenan en el localStorage del navegador para ser utilizados en las siguientes etapas.

vision.html: Aquí se realiza un test de daltonismo, donde el usuario mueve el mouse sobre un área para identificar colores. Además, se realiza una solicitud para obtener información sobre médicos, que se muestra dinámicamente en la página.

resultados.html: En esta página, se muestran los resultados del test de IMC calculado en base a los datos del paciente almacenados en el localStorage. También se realiza una consulta a un endpoint para obtener recomendaciones médicas basadas en el IMC.

Funcionalidades
Fetching de Datos
EndPoint 1: https://vps-3858808-x.dattaweb.com:8443/medicina/getMedics

Este endpoint se utiliza para obtener la lista de médicos. La respuesta se almacena en el array medicosArray, que luego se utiliza para crear y mostrar tarjetas con la información de los médicos.
EndPoint 2: https://vps-3858808-x.dattaweb.com:8443/medicina/recomendacion?imc=${encodeURIComponent(imc)}

Este endpoint proporciona recomendaciones médicas basadas en el IMC del paciente. La variable imc se obtiene del localStorage y se utiliza en la consulta para obtener recomendaciones personalizadas.
Modificaciones de Event Handling
Se eliminó el atributo onClick en los botones del HTML y se implementó el manejo de eventos en el archivo JavaScript:
index.html: Se eliminó el onClick de los botones con id="ingresar" e id="enviar", y se agregaron los eventos en el archivo main.js.
vision.html: Se eliminó el onClick del botón con id="continuar" y se agregó el evento en el archivo vision.js.
resultados.html: Se eliminó el onClick de los botones con id="recargar" e id="boton-verde", y se agregaron los eventos en el archivo resultados.js.
Estructura del Proyecto
index.html: Recoge los datos del paciente.
vision.html: Realiza el test de daltonismo y muestra médicos desde un array fetcheado.
resultados.html: Muestra los resultados del IMC y realiza una consulta para obtener una recomendación médica.
Instalación y Uso
Clona el repositorio:
bash
Copiar código
git clone https://github.com/tuusuario/tu-repo.git
Navega a la carpeta del proyecto:
bash
Copiar código
cd tu-repo
Abre los archivos index.html, vision.html y resultados.html en un navegador web para probar las funcionalidades.
Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor sigue estos pasos:

Realiza un fork del repositorio.
Crea una rama para tu funcionalidad (git checkout -b mi-nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
Envía un pull request.
Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
