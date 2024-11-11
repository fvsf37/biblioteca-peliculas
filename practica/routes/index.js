const express = require("express");
const router = express.Router();
const dataProvider = require("../data/dataProvider.js");

/* Página de Inicio */
router.get("/", (req, res) => {
  // Obtener las películas recientes, por ejemplo, las últimas 5
  const peliculas = dataProvider.getPeliculasRecientes(5);
  res.render("inicio", { peliculas });
});

/* Ruta para ver el catálogo de películas */
router.get("/peliculas", (req, res) => {
  const peliculas = dataProvider.getAllPeliculas();
  res.render("peliculas", { peliculas });
});

/* Ruta para ver los detalles de una película específica */
router.get("/peliculas/:id", (req, res) => {
  const pelicula = dataProvider.getPeliculaById(req.params.id);
  if (!pelicula) {
    return res.status(404).send("Película no encontrada");
  }
  const copias = dataProvider.getCopiasByPeliculaId(req.params.id);
  res.render("detallePelicula", { pelicula, copias });
});

/* Ruta para ver las copias de películas de un usuario específico */
router.get("/copias/:id", (req, res) => {
  const usuario = dataProvider.getUsuarioById(req.params.id);
  if (!usuario) {
    return res.status(404).send("Usuario no encontrado");
  }

  // Filtramos las películas que el usuario posee usando pelicula_id
  const peliculas = usuario.copias.map((copia) =>
    dataProvider.getPeliculaById(copia.pelicula_id)
  );
  res.render("copiasUsuario", { usuario, peliculas });
});

/* Ruta para ver los detalles de una copia específica de una película */
router.get("/copia/:id", (req, res) => {
  const pelicula = dataProvider.getPeliculaById(req.params.id);
  if (!pelicula) {
    return res.status(404).send("Película no encontrada");
  }
  res.render("detalleCopia", { pelicula });
});

/* Ruta para la página de login (GET) */
router.get("/login", (req, res) => {
  res.render("login");
});

/* Ruta para el procesamiento del formulario de login (POST) */
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Aquí podrías agregar lógica para verificar el usuario y la contraseña
  if (username && password) {
    res.send(`Bienvenido, ${username}!`); // Mensaje de bienvenida temporal
  } else {
    res.redirect("/login"); // Redirige de nuevo a login si falta información
  }
});

/* Ruta para la página de contacto (GET) */
router.get("/contacto", (req, res) => {
  res.render("contacto");
});

/* Ruta para el procesamiento del formulario de contacto (POST) */
router.post("/contacto", (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    res.send(`Gracias, ${name}, hemos recibido tu mensaje: "${message}"`);
  } else {
    res.redirect("/contacto");
  }
});

module.exports = router;
