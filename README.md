# 🎬 **Biblioteca de Películas**

Un sistema de gestión de películas donde los usuarios pueden explorar, consultar detalles y gestionar copias físicas o digitales.

---

## 🛠️ **Tecnologías Usadas**

- **Node.js**: Plataforma para el servidor backend.
- **Express.js**: Framework para gestionar rutas y middleware.
- **EJS**: Motor de plantillas para las vistas.
- **CSS**: Estilos personalizados y específicos para cada vista.
- **JavaScript**: Lógica de negocio y manipulación de datos.

---

## 📜 **Guía de Estilo**

### 🌐 **Estilos Globales (`style.css`)**

- **Colores principales**:
  - Fondo: `#21201e` (oscuro).
  - Texto: `#ebe8ff` (claro).
  - Destacados: `#42ab47` (verde).
- **Fuentes**:
  - Primaria: `Prosto One`.
- **Botones**:
  - Bordes redondeados.
  - Transiciones suaves al pasar el ratón.

### 🎨 **Esquema de Colores por Página**

- **Inicio** (`inicio.css`): Resalta películas recientes con colores vivos.
- **Detalles de Películas** (`detallesPelicula.css`): Fondo oscuro con bordes verdes para información destacada.
- **Login** (`login.css`): Contenedor compacto centrado con foco en la funcionalidad.
- **Contacto** (`contacto.css`): Transiciones suaves para botones y campos de formulario.

### 🖼️ **Imágenes**

- Almacenadas en `public/images`.
- Asegúrate de que cada película tenga su imagen asignada correctamente en `data.json`.

---

## 👥 **Historias de Usuario**

### 📂 **Gestión de Películas**
#### **Ver Listado de Películas**
- **Como** usuario autenticado,  
- **Quiero** explorar una lista completa de películas disponibles en el sistema,  
- **Para** descubrir opciones interesantes que pueda añadir a mi colección personal o consultar sus detalles.

#### **Consultar Detalles de una Película**
- **Como** usuario autenticado o visitante,  
- **Quiero** acceder a la página de detalles de una película específica,  
- **Para** conocer su información completa (título, género, año, descripción, y copias disponibles).

#### **Explorar Películas Recientes**
- **Como** usuario autenticado o visitante,  
- **Quiero** ver una sección destacada en la página de inicio con las películas más recientes,  
- **Para** mantenerme informado de las últimas novedades.

---

### 💾 **Gestión de Copias**
#### **Consultar Mis Copias**
- **Como** usuario autenticado,  
- **Quiero** ver una lista de las copias de películas que poseo,  
- **Para** llevar un control de mi colección personal, incluyendo su estado y formato.

#### **Consultar las Copias de una Película**
- **Como** usuario autenticado,  
- **Quiero** visualizar todas las copias disponibles de una película en particular,  
- **Para** decidir si me interesa adquirirla o intercambiar con otro usuario.

---

### 🔑 **Autenticación y Registro**
#### **Inicio de Sesión**
- **Como** visitante,  
- **Quiero** iniciar sesión con mi nombre de usuario y contraseña,  
- **Para** acceder a funcionalidades exclusivas como la gestión de mi colección personal.

#### **Cerrar Sesión**
- **Como** usuario autenticado,  
- **Quiero** cerrar sesión de manera segura,  
- **Para** proteger mi información personal y garantizar que otros no accedan a mi cuenta.

#### **Registro de Usuario**
- **Como** visitante,  
- **Quiero** registrarme en la plataforma proporcionando mis datos básicos,  
- **Para** empezar a gestionar mi propia colección de películas.

---

### 📧 **Contacto**
#### **Enviar Mensaje al Administrador**
- **Como** usuario autenticado o visitante,  
- **Quiero** rellenar un formulario de contacto con mi nombre, correo electrónico y mensaje,  
- **Para** comunicarme con el administrador del sistema en caso de dudas, sugerencias o problemas.

---

### 🎯 **Escenarios Especiales**
#### **Película no Disponible**
- **Como** usuario autenticado,  
- **Quiero** recibir un mensaje claro cuando intento acceder a una película que no existe en el sistema,  
- **Para** entender que el contenido no está disponible y evitar confusiones.

#### **Credenciales Incorrectas**
- **Como** visitante,  
- **Quiero** recibir una notificación si ingreso un usuario o contraseña incorrectos,  
- **Para** saber que necesito verificar mis datos antes de volver a intentarlo.

---

## 🚀 **Cómo Empezar**

### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/fvsf37/biblioteca-peliculas.git
cd biblioteca-peliculas
```

### 2️⃣ **Instalar Dependencias**

```bash
npm install
```

### 3️⃣ **Iniciar el Servidor**

```bash
npm start
```

### 4️⃣ **Abrir en el Navegador**

[http://localhost:3000](http://localhost:3000)

---

## 📂 **Estructura del Proyecto**

```
biblioteca-peliculas/
├── data/
│   ├── data.json
│   ├── usuarios.json
├── public/
│   ├── images/
│   ├── stylesheets/
├── routes/
│   ├── index.js
├── views/
│   ├── partials/
│   ├── contacto.ejs
│   ├── peliculas.ejs
│   ├── detallePelicula.ejs
│   ├── ...
├── app.js
├── package.json
```

---

## 🌟 **Créditos**

- **Autor**: Francisco Salapic Fernández
- **Contacto**: fvsalapic@gmail.com

---