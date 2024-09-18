Proyecto de Consulta Médica
Bienvenido al proyecto de consulta médica. Esta aplicación web simula un sistema interactivo para evaluar el IMC del paciente, realizar un test de daltonismo y visualizar información de médicos.

Descripción
El proyecto está compuesto por tres páginas HTML, cada una con funciones específicas:

index.html: Permite al usuario ingresar su nombre, peso, estatura y edad. Estos datos se almacenan en el localStorage para su uso en etapas posteriores.

vision.html: Realiza un test de daltonismo. El usuario mueve el mouse sobre un área para identificar colores y el sistema muestra tarjetas con información de médicos obtenida a través de un fetch.

resultados.html: Muestra el IMC calculado con base en los datos del localStorage y realiza una consulta para obtener recomendaciones médicas personalizadas.

Funcionalidades
Fetching de Datos
Endpoint 1: Médicos
URL: https://vps-3858808-x.dattaweb.com:8443/medicina/getMedics
Descripción: Obtiene la lista de médicos y almacena la información en un array medicosArray. Luego, se crean y muestran tarjetas con la información de cada médico.
Endpoint 2: Recomendaciones Médicas
URL: https://vps-3858808-x.dattaweb.com:8443/medicina/recomendacion?imc=${encodeURIComponent(imc)}
Descripción: Proporciona recomendaciones médicas basadas en el IMC del paciente. La variable imc se obtiene del localStorage y se utiliza en la consulta para obtener recomendaciones personalizadas.
Modificaciones de Event Handling
Se eliminaron los atributos onClick de los botones en los archivos HTML y se implementaron los manejadores de eventos en los archivos JavaScript correspondientes:

index.html: Eventos para los botones con id="ingresar" e id="enviar" son gestionados en main.js.
vision.html: El botón con id="continuar" es manejado en vision.js.
resultados.html: Los botones con id="recargar" e id="boton-verde" son gestionados en resultados.js.
Estructura del Proyecto
index.html: Recoge los datos del paciente.
vision.html: Realiza el test de daltonismo y muestra médicos obtenidos mediante fetch.
resultados.html: Presenta los resultados del IMC y realiza una consulta para obtener una recomendación médica.
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
Las contribuciones son bienvenidas. Para contribuir:

Realiza un fork del repositorio.
Crea una rama para tu funcionalidad (git checkout -b mi-nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
Envía un pull request.
Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
