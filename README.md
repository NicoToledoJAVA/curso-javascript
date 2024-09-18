Página Médica Interactiva
Este proyecto es una página médica interactiva que incluye varias funcionalidades como pruebas de daltonismo, visualización de médicos y recomendaciones médicas. Utiliza HTML, CSS, JavaScript y Bootstrap para crear una experiencia de usuario dinámica y responsiva.

Tabla de Contenidos
Descripción
Instalación
Uso
Endpoints
Estructura del Proyecto
Contribución
Contacto
Descripción
Este proyecto consta de tres páginas principales:

index.html: Donde se recopilan los datos del paciente.
vision.html: Realiza un test de daltonismo y muestra médicos obtenidos mediante una API.
resultados.html: Toma variables del localStorage y realiza una consulta médica utilizando otra API.
Instalación
Clona este repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/tu-usuario/tu-repositorio.git
Navega al directorio del proyecto:

bash
Copiar código
cd tu-repositorio
Abre los archivos HTML en tu navegador para visualizar el proyecto.

Uso
index.html: Completa el formulario con los datos del paciente y haz clic en "Ingresar" para continuar.
vision.html: Mueve el mouse por la caja de colores para realizar el test de daltonismo. La información sobre los médicos se mostrará a medida que se obtenga de la API.
resultados.html: Accede a esta página después de haber completado el test de IMC para recibir recomendaciones médicas basadas en el índice calculado.
Endpoints
Endpoint 1: Obtener Médicos

plaintext
Copiar código
https://vps-3858808-x.dattaweb.com:8443/medicina/getMedics
Este endpoint devuelve una lista de médicos que se muestra en la página vision.html.

Endpoint 2: Obtener Recomendación Médica

plaintext
Copiar código
https://vps-3858808-x.dattaweb.com:8443/medicina/recomendacion?imc=${encodeURIComponent(imc)}
Este endpoint proporciona recomendaciones médicas basadas en el IMC. La variable imc se establece dinámicamente según los datos ingresados.

Estructura del Proyecto
index.html:

Página de entrada donde se recogen los datos del paciente.
Eventos de botón manejados mediante JavaScript para controlar la navegación.
vision.html:

Página de test de daltonismo con interacción de mouse.
Obtención de datos de médicos mediante una API.
Las tarjetas de médicos se generan dinámicamente a partir del array medicosArray.
resultados.html:

Muestra recomendaciones médicas basadas en el IMC almacenado en localStorage.
Botones manejados por eventos JavaScript para redirigir y recargar la página.
Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Realiza un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y confirma (git commit -am 'Añadir nueva funcionalidad').
Envía tus cambios al repositorio remoto (git push origin feature/nueva-funcionalidad).
Abre un pull request.
Contacto
Para cualquier consulta o sugerencia, puedes contactar a:

Nombre: Tu Nombre
Email: tu-email@example.com
GitHub: tu-usuario
