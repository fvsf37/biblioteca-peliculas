const fs = require("fs");
const path = require("path");

// Cargar datos de películas
const peliculasData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data.json"), "utf-8")
);
// Cargar datos de usuarios
const usuariosData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "usuarios.json"), "utf-8")
);

/* Obtener todas las películas */
function getAllPeliculas() {
  return peliculasData.peliculas || [];
}

/* Obtener película por ID */
function getPeliculaById(id) {
  return peliculasData.peliculas.find(
    (pelicula) => pelicula.id === parseInt(id)
  );
}

/* Validar credenciales del usuario */
function validarCredenciales(username, password) {
  const usuario = usuariosData.usuarios.find(
    (user) => user.username === username && user.password === password
  );
  return usuario !== undefined;
}

/* Obtener usuario por ID */
function getUsuarioById(id) {
  return usuariosData.usuarios.find((usuario) => usuario.id === parseInt(id));
}

/* Obtener usuario por nombre de usuario */
function getUsuarioByUsername(username) {
  return usuariosData.usuarios.find((usuario) => usuario.username === username);
}

/* Obtener las copias de películas de un usuario específico */
function getCopiasByUsuarioId(id) {
  const usuario = getUsuarioById(id);
  return usuario ? usuario.copias : [];
}

/* Obtener copias de una película específica por ID */
function getCopiasByPeliculaId(peliculaId) {
  const copias = [];
  usuariosData.usuarios.forEach((usuario) => {
    usuario.copias.forEach((copia) => {
      if (copia.pelicula_id === parseInt(peliculaId)) {
        copias.push({
          ...copia,
          usuario: usuario.username,
        });
      }
    });
  });
  return copias;
}

/* Obtener las películas recientes */
function getPeliculasRecientes(limit = 5) {
  return peliculasData.peliculas.slice(-limit).reverse(); // Devuelve las últimas películas agregadas
}

module.exports = {
  getAllPeliculas,
  getPeliculaById,
  validarCredenciales,
  getUsuarioById,
  getUsuarioByUsername,
  getCopiasByUsuarioId,
  getCopiasByPeliculaId,
  getPeliculasRecientes,
};
