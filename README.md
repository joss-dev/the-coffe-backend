🚀 The Coffee Backend - Guía de Instalación

Bienvenido al proyecto The Coffee Backend, una API construida con NestJS, MySQL, TypeORM, JWT para autenticación. Este documento proporciona una guía detallada para instalar las dependencias necesarias, configurar el entorno, y ejecutar el proyecto utilizando Docker y PNPM.

📋 Requisitos previos


Node.js (versión 18.x o superior). Descarga desde nodejs.org.



Git para clonar el repositorio. Descarga desde git-scm.com.



Un editor de código como Visual Studio Code.



Acceso a una terminal (bash, zsh, PowerShell, etc.).

🛠️ Instalación de herramientas

1. Instalar Docker

Docker permite ejecutar el proyecto en contenedores, asegurando consistencia en los entornos.

En Windows/Mac:





Descarga Docker Desktop desde docker.com.



Sigue las instrucciones de instalación para tu sistema operativo.



Una vez instalado, abre Docker Desktop y verifica que esté corriendo.



En la terminal, ejecuta:

docker --version

Deberías ver algo como Docker version 24.x.x.

2. Instalar PNPM

PNPM es un administrador de paquetes más rápido y eficiente que npm.


Instala PNPM globalmente:

npm install -g pnpm

Verifica la instalación:

pnpm --version

Deberías ver algo como 9.x.x.

3. Clonar el repositorio

Clona el proyecto:

git clone https://github.com/joss-dev/the-coffe-backend.git
cd the-coffee-backend

Instala las dependencias del proyecto:

pnpm install

⚙️ Configuración del entorno

Copia el archivo de ejemplo de variables de entorno:

cp .env.example .env

Abre el archivo .env en tu editor de texto y configura las siguientes variables:

# Database
DATABASE_HOST=mysql
DATABASE_PORT=3306
DATABASE_USER=coffee_user
DATABASE_PASSWORD=coffee_password
DATABASE_NAME=coffee_db

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d

# Google Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

# API
PORT=3000

Database: Los valores predeterminados funcionan con la configuración de Docker.

JWT_SECRET: Genera una clave segura (puedes usar openssl rand -hex 32).

Google Auth: Obtén las credenciales desde Google Cloud Console.

🐳 Configuración con Docker

El proyecto incluye un archivo docker-compose.yml que configura un contenedor para MySQL y otro para la aplicación NestJS.

Asegúrate de que Docker y Docker Compose estén corriendo.

Construye y levanta los contenedores:

docker-compose up -d --build

-d: Ejecuta los contenedores en segundo plano.

--build: Construye las imágenes antes de iniciar.

Verifica que los contenedores estén corriendo:

docker ps

Deberías ver dos contenedores: uno para mysql y otro para the-coffee-backend.

Aplica las migraciones de la base de datos:

pnpm run typeorm:migration:run

🚀 Iniciar el proyecto

Usando Docker

Si usaste docker-compose up, la aplicación ya está corriendo en http://localhost:3000.

Sin Docker (desarrollo local)

Asegúrate de que MySQL esté corriendo localmente o en el contenedor Docker.

Inicia el servidor en modo desarrollo:

pnpm run start:dev

La API estará disponible en http://localhost:3000.

📚 Comandos útiles


Comando



Descripción





pnpm install



Instala las dependencias del proyecto.





pnpm run start



Inicia la aplicación en modo producción.





pnpm run start:dev



Inicia en modo desarrollo con recarga.





pnpm run typeorm:migration:run



Ejecuta las migraciones de la base de datos.





docker-compose up -d



Levanta los contenedores.





docker-compose down



Detiene y elimina los contenedores.





docker logs the-coffee-backend



Muestra los logs de la aplicación.

🧪 Probar la API


Abre tu cliente API favorito (Postman, Insomnia, etc.).



🛠️ Solución de problemas





Error de conexión a MySQL: Verifica que el contenedor mysql esté corriendo (docker ps) y que las variables en .env coincidan.



Puerto ocupado: Cambia el PORT en .env si el puerto 3000 está en uso.



Dependencias fallidas: Borra node_modules y pnpm-lock.yaml, luego ejecuta pnpm install nuevamente.



Logs detallados: Usa docker logs mysql o docker logs the-coffee-backend para diagno