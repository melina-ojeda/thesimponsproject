# The Simpsons Project
Sitio web estilo "guía de episodios" para explorar y visualizar la información de cada episodio de Los Simpsons. Permite buscar episodios, filtrar por
temporada y navegar entre páginas de forma intuitiva.

# Tecnologías utilizadas 
* HTML
* CSS 
* JavaScript 
* API pública **https://thesimpsonsapi.com**
* Docker

# Requisitos previos
Asegúrate de tener instalado: 
* Navegador web 
* Git
* Docker desktop
* VSCode (recomendado)
* Extensión VSCode "Live Server"

# Funcionalidades
- Visualización de episodios en tarjetas con imagen e información
- Buscador de episodios por nombre
- Filtrado por temporada
- Navegación entre páginas con botones anterior/siguiente

# Pasos de instalación

1) Clonar repositorio
   
   Abra su terminal de prefencia y ejecute el siguiente comando: 
   ´´´
   git clone https://github.com/melina-ojeda/thesimponsproject
   ´´´

3) Ingresar al sitio
   
   Opción A- Extensión de VSCode **"Live server"**: levante el proyecto presionando el botón **"Go Live"** posicionado en el status bar de VSCode.
   
   Opción B- Tradicional: abra su navegador predeterminado y arrastre el archivo **index.html** a la ventana del navegador.

   Opción C- Utilizando Docker

4) Navegar por el sitio
   - Explorar las diferentes tarjetas con los episodios
   - Utilizar el buscador para episodios puntuales
   - Filtrar por temporada
   - Navegar entre las páginas utilizando anterior/siguiente 

# Contrucción de la imagen Docker

Si prefiere ejecutar la aplicación utilizando Docker, primero debe construir la imagen basada en el archivo Dockerfile del proyecto.

Desde la raíz del proyecto corra el comando: 
docker build -t thesimpsonsproject .

# Ejecución del contenedor

Una vez construida la imagen, inicie el contenedor mapeando el puerto 8080 de su máquina local con el siguiente comando:
docker run -d -p 8080:80 --name simpsons-app thesimpsonsproject

Luego de ejecutarlo, abra su navegador y copie la siguiente URL para interactuar con la app:
**http://localhost:8080**

Si desea detener el contenedor, ejecute el comando:
docker stop simpsons-app


