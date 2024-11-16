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

### 🌟 **Principios de Diseño**

- **Consistencia Visual**: Todos los elementos de la interfaz mantienen una coherencia en colores, tipografías y diseño para garantizar una experiencia uniforme.
- **Accesibilidad**: Uso de combinaciones de colores con alto contraste para mejorar la legibilidad.
- **Minimalismo**: Interfaces limpias y fáciles de navegar, evitando elementos innecesarios.
- **Interactividad**: Animaciones y transiciones suaves para una experiencia fluida y moderna.

---

### 🎨 **Esquema de Colores**

- **Fondo Principal**: Tonos oscuros (`#21201e`) para crear un ambiente elegante y destacar los elementos clave.
- **Texto**: Colores claros (`#ebe8ff`) para garantizar la legibilidad en fondos oscuros.
- **Elementos Destacados**: Verde vibrante (`#42ab47`) utilizado en botones, enlaces y encabezados para guiar la atención del usuario.
- **Hover en Elementos Interactivos**: Transición hacia colores más brillantes (como blanco o verde más claro) al pasar el ratón, brindando retroalimentación visual.

---

### 🖋️ **Tipografía**

- **Fuente Principal**: `"Prosto One"`, una tipografía moderna que refuerza el enfoque visual limpio y profesional.
- **Títulos**: En negrita para destacar encabezados y guiar la lectura.
- **Tamaños de Texto**:
  - **Títulos Principales**: Grandes y llamativos (aproximadamente el doble del texto normal).
  - **Subtítulos**: Moderadamente grandes para jerarquizar la información.
  - **Texto Regular**: Proporcional y legible para el contenido principal.

---

### 🧩 **Estilo por Páginas**

#### 📂 **Página de Inicio**

- Diseño enfocado en destacar películas recientes con tarjetas de presentación.
- Uso de una cuadrícula visual para organizar el contenido de manera adaptable y atractiva.
- Botones destacados para facilitar la navegación hacia otras secciones de la aplicación.

#### 📑 **Detalles de Películas**

- Diseño estructurado que combina imágenes, texto descriptivo y detalles adicionales (como género, año, director, etc.).
- Las copias disponibles de cada película están claramente separadas y organizadas en listas visuales.
- Uso de colores llamativos en las secciones más importantes para guiar la atención.

#### 🔐 **Página de Login**

- Un diseño compacto y centrado en el usuario, destacando los campos esenciales.
- Uso de colores cálidos y transiciones suaves en los botones para crear un entorno amigable.
- Retroalimentación visual y textual en caso de errores (como credenciales incorrectas).

#### ✉️ **Página de Contacto**

- Formularios limpios y minimalistas que invitan al usuario a completar los datos necesarios.
- Botones con colores vivos para indicar claramente las acciones disponibles.
- Mensajes de confirmación amigables tras enviar el formulario.

#### 📚 **Listado de Películas**

- Un diseño visualmente atractivo con tarjetas que muestran el título, género y una breve descripción de cada película.
- Organización en columnas ajustables que se adaptan a dispositivos de diferentes tamaños.

---

### ✨ **Interacción del Usuario**

- **Hover y Animaciones**: Al pasar el ratón sobre botones, enlaces y elementos interactivos, estos cambian de color o aumentan ligeramente su tamaño para indicar su interactividad.
- **Botones**: Bordes redondeados y colores vivos para destacarse claramente de otros elementos.
- **Feedback Visual**: Se proporciona retroalimentación inmediata cuando el usuario realiza acciones como enviar un formulario o hacer clic en un enlace.

---

### 🛠️ **Mejores Prácticas**

1. **Enfoque en la Legibilidad**: Asegúrate de que todos los textos sean claramente visibles, incluso para usuarios con dificultades visuales.
2. **Compatibilidad Responsive**: Diseña pensando en diferentes tamaños de pantalla, desde dispositivos móviles hasta monitores grandes.
3. **Jerarquía Visual Clara**: Usa tamaños de texto, colores y espaciado para guiar al usuario a través de la información más importante.
4. **Consistencia en Estilo**: Aplica los mismos esquemas de diseño en todas las páginas para reforzar la identidad visual de la aplicación.

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
