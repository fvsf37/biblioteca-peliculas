const express = require("express");
const router = express.Router();
const dataProvider = require("../data/dataProvider.js");

/* Middleware para verificar autenticación */
function verificarAutenticacion(req, res, next) {
  if (req.session && req.session.usuarioAutenticado) {
    next();
  } else {
    res.redirect("/login");
  }
}

/* Página de Inicio */
router.get("/", (req, res) => {
  const peliculas = dataProvider.getPeliculasRecientes(5);
  res.render("inicio", { peliculas });
});

/* Ruta para la página de login (GET) */
router.get("/login", (req, res) => {
  res.render("login");
});

/* Ruta para el procesamiento del formulario de login (POST) */
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (dataProvider.validarCredenciales(username, password)) {
    req.session.usuarioAutenticado = username;
    res.redirect("/peliculas");
  } else {
    res.render("login", { error: "Credenciales incorrectas" });
  }
});

/* Ruta para cerrar sesión */
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error al cerrar sesión");
    }
    res.redirect("/login");
  });
});

/* Rutas protegidas */
router.get("/peliculas", verificarAutenticacion, (req, res) => {
  const peliculas = dataProvider.getAllPeliculas();
  res.render("peliculas", { peliculas });
});

router.get("/peliculas/:id", verificarAutenticacion, (req, res) => {
  const pelicula = dataProvider.getPeliculaById(req.params.id);
  if (!pelicula) {
    return res.status(404).send("Película no encontrada");
  }
  const copias = dataProvider.getCopiasByPeliculaId(req.params.id);
  res.render("detallePelicula", { pelicula, copias });
});

/* Ruta para ver las copias de películas de un usuario específico */
router.get("/copias/:id", verificarAutenticacion, (req, res) => {
  const usuario = dataProvider.getUsuarioById(req.params.id);
  if (!usuario) {
    return res.status(404).send("Usuario no encontrado");
  }

  const peliculas = usuario.copias.map((copia) =>
    dataProvider.getPeliculaById(copia.pelicula_id)
  );
  res.render("copiasUsuario", { usuario, peliculas });
});

/* Ruta para ver los detalles de una copia específica de una película */
router.get("/copia/:id", verificarAutenticacion, (req, res) => {
  const pelicula = dataProvider.getPeliculaById(req.params.id);
  if (!pelicula) {
    return res.status(404).send("Película no encontrada");
  }
  res.render("detalleCopia", { pelicula });
});

/* Ruta para la página de contacto */
router.get("/contacto", (req, res) => {
  res.render("contacto");
});

router.post("/contacto", (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    res.send(`Gracias, ${name}, hemos recibido tu mensaje: "${message}"`);
  } else {
    res.redirect("/contacto");
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (dataProvider.validarCredenciales(username, password)) {
    req.session.usuarioAutenticado = username;
    res.redirect("/peliculas");
  } else {
    res.render("login", { error: "Credenciales incorrectas" });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error al cerrar sesión");
    }
    res.redirect("/login");
  });
});

module.exports = router;
