Aquí tienes un ejemplo de un archivo `README.md` bien estructurado y visualmente atractivo para tu proyecto. Incluye una guía de estilo y las historias de usuario:

---

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

- **Como** usuario autenticado
- **Quiero** ver un listado de todas las películas disponibles
- **Para** elegir cuáles me interesan.

- **Como** usuario
- **Quiero** acceder a los detalles de una película específica
- **Para** obtener información como género, año, descripción, etc.

### 💾 **Gestión de Copias**

- **Como** usuario autenticado
- **Quiero** ver las copias de películas que poseo
- **Para** mantener un registro de mi colección.

- **Como** usuario
- **Quiero** añadir detalles como el estado o formato de mis copias
- **Para** tener un registro completo y actualizado.

### 🔑 **Autenticación**

- **Como** visitante
- **Quiero** iniciar sesión con mi nombre de usuario y contraseña
- **Para** acceder a funcionalidades protegidas.

- **Como** visitante
- **Quiero** registrarme en la plataforma
- **Para** empezar a gestionar mi colección de películas.

### 📧 **Contacto**

- **Como** usuario
- **Quiero** enviar un mensaje a través del formulario de contacto
- **Para** resolver dudas o hacer sugerencias.

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