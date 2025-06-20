# 🚀 The Coffee Backend - Guía de Instalación

Bienvenido al proyecto **The Coffee Backend**, una API construida con **NestJS**, **MySQL**, **TypeORM**, **JWT** para autenticación. Este documento proporciona una guía detallada para instalar las dependencias necesarias, configurar el entorno, y ejecutar el proyecto utilizando **Docker** y **PNPM**.

## 📋 Requisitos previos

- **Node.js** (versión 18.x o superior). Descarga desde [nodejs.org](https://nodejs.org/).
- **Git** para clonar el repositorio. Descarga desde [git-scm.com](https://git-scm.com/).
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/).
- Acceso a una terminal (bash, zsh, PowerShell, etc.).

## 🛠️ Instalación de herramientas

### 1. Instalar Docker
Docker permite ejecutar el proyecto en contenedores, asegurando consistencia en los entornos.

#### En Windows/Mac:
1. Descarga **Docker Desktop** desde [docker.com](https://www.docker.com/products/docker-desktop/).
2. Sigue las instrucciones de instalación para tu sistema operativo.
3. Una vez instalado, abre Docker Desktop y verifica que esté corriendo.
4. En la terminal, ejecuta:
   ```bash
   docker --version
   ```
   Deberías ver algo como `Docker version 24.x.x`.

### 2. Instalar PNPM
**PNPM** es un administrador de paquetes más rápido y eficiente que npm.

1. Instala PNPM globalmente:
   ```bash
   npm install -g pnpm
   ```
2. Verifica la instalación:
   ```bash
   pnpm --version
   ```
   Deberías ver algo como `9.x.x`.

### 3. Clonar el repositorio
1. Clona el proyecto:
   ```bash
   git clone https://github.com/joss-dev/the-coffe-backend.git
   cd the-coffee-backend
   ```
2. Instala las dependencias del proyecto:
   ```bash
   pnpm install
   ```
## 🐳 Configuración con Docker

El proyecto incluye un archivo `docker-compose.yml` que configura un contenedor para **MySQL** y otro para la aplicación **NestJS**.

1. Asegúrate de que Docker y Docker Compose estén corriendo.
2. Construye y levanta los contenedores:
   ```bash
   docker-compose up -d --build
   ```
   - `-d`: Ejecuta los contenedores en segundo plano.
   - `--build`: Construye las imágenes antes de iniciar.

3. Verifica que los contenedores estén corriendo:
   ```bash
   docker ps
   ```
## 🚀 Iniciar el proyecto

### Sin Docker (desarrollo local)
1. Asegúrate de que MySQL esté corriendo localmente o en el contenedor Docker.
2. Inicia el servidor en modo desarrollo:
   ```bash
   pnpm run start:dev
   ```
3. La API estará disponible en `http://localhost:3000`.

## 📚 Comandos útiles

| Comando                        | Descripción                              |
|--------------------------------|------------------------------------------|
| `pnpm install`                 | Instala las dependencias del proyecto.   |
| `pnpm run start`               | Inicia la aplicación en modo producción.|
| `pnpm run start:dev`           | Inicia en modo desarrollo con recarga.   |
| `pnpm run typeorm:migration:run` | Ejecuta las migraciones de la base de datos. |
| `docker-compose up -d`          | Levanta los contenedores.                |
| `docker-compose down`           | Detiene y elimina los contenedores.      |
| `docker logs the-coffee-backend`| Muestra los logs de la aplicación.        |

## 🧪 Probar la API

1. Abre tu cliente API favorito (Postman, Insomnia, etc.).
2. Prueba los siguientes endpoints:
   - **Login**: `POST http://localhost:3000/auth/login`
     ```json
     {
       "email": "test@example.com",
       "password": "yourpassword"
     }
     ```

## 🛠️ Solución de problemas

- **Error de conexión a MySQL**: Verifica que el contenedor `mysql` esté corriendo (`docker ps`) y que las variables en `.env` coincidan.
- **Puerto ocupado**: Cambia el `PORT` en `.env` si el puerto 3000 está en uso.
- **Dependencias fallidas**: Borra `node_modules` y `pnpm-lock.yaml`, luego ejecuta `pnpm install` nuevamente.
- **Logs detallados**: Usa `docker logs mysql` o `docker logs the-coffee-backend` para diagnosticar.
---