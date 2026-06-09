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
* Extensión VSCode "Live Server" (opcional)

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

   Opción C- Utilizando Docker (instrucciones debajo)

4) Navegar por el sitio
   - Explorar las diferentes tarjetas con los episodios
   - Utilizar el buscador para episodios puntuales
   - Filtrar por temporada
   - Navegar entre las páginas utilizando anterior/siguiente 

# Docker

Incluye un archivo **Dockerfile** para servir el proyecto mediante Nginx dentro de un contenedor.

# Contrucción de la imagen Docker

Si prefiere ejecutar la aplicación utilizando Docker, primero debe construir la imagen basada en el archivo Dockerfile del proyecto.

Desde la raíz del proyecto corra el comando:
```bash 
docker build -t thesimpsonsproject .
```

# Ejecución del contenedor

Una vez construida la imagen, inicie el contenedor mapeando el puerto 8080 de su máquina local con el siguiente comando:
```bash
docker run -d -p 8080:80 --name simpsons-app thesimpsonsproject
```
Luego de ejecutarlo, abra su navegador y copie la siguiente URL para interactuar con la app:
**http://localhost:8080**

Para ver el contenedor en ejecución, utilice el comando
```bash
docker ps
```

Si desea detener el contenedor, ejecute el comando:
```bash
docker stop simpsons-project
```

## Ejecución con Docker Compose (Opcional)
Si prefiere automatizar la ejecución sin escribir comandos largos, puede utilizar Docker Compose. Asegúrese de estar en la raíz del proyecto y ejecute:

```bash
docker compose up -d
```

Este comando construirá la imagen y levantará el contenedor automáticamente en el puerto 8080. Para detener el servicio, ejecute:
```bash
docker compose down
```

# Capturas de pantalla 
<img width="1343" height="683" alt="page" src="https://github.com/user-attachments/assets/6260defb-9cee-4708-9134-a2c8ce9ad971" />
<img width="1267" height="713" alt="Captura" src="https://github.com/user-attachments/assets/e61152a1-8f67-4110-8a65-ec53cbf61c19" />

