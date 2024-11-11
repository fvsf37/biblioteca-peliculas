const peliculasData = require("./data.json");
const usuariosData = require("./usuarios.json");

// Función para obtener todas las películas
function getAllPeliculas() {
  return peliculasData.peliculas || []; // Asegúrate de que devuelve un array
}

// Función para obtener una película por ID
function getPeliculaById(id) {
  // Verifica que peliculasData.peliculas esté definido
  if (!peliculasData || !peliculasData.peliculas) {
    console.error("El array de películas no está definido en peliculasData");
    return null; // O lanza un error según el caso
  }
  return peliculasData.peliculas.find((pelicula) => pelicula.id == id);
}

// Función para obtener todas las copias de una película específica
function getCopiasByPeliculaId(peliculaId) {
  let copias = [];
  usuariosData.usuarios.forEach((usuario) => {
    const copiasUsuario = usuario.copias.filter(
      (copia) => copia.pelicula_id == peliculaId
    );
    copiasUsuario.forEach((copia) => {
      copias.push({
        usuario: usuario.nombre,
        fecha_adquirida: copia.fecha_adquirida,
        estado: copia.estado,
        formato: copia.formato,
      });
    });
  });
  return copias;
}

// Función para obtener las películas recientes (últimas añadidas por los usuarios)
function getPeliculasRecientes(limit) {
  let peliculasRecientes = [];
  const peliculasMap = {};

  // Recorrer los usuarios y sus copias para encontrar las películas más recientes
  usuariosData.usuarios.forEach((usuario) => {
    usuario.copias.forEach((copia) => {
      const pelicula = getPeliculaById(copia.pelicula_id);
      if (pelicula && !peliculasMap[copia.pelicula_id]) {
        peliculasMap[copia.pelicula_id] = {
          ...pelicula,
          fecha_adquirida: copia.fecha_adquirida,
        };
      }
    });
  });

  // Ordenar por fecha y limitar los resultados
  peliculasRecientes = Object.values(peliculasMap)
    .sort((a, b) => new Date(b.fecha_adquirida) - new Date(a.fecha_adquirida))
    .slice(0, limit);

  return peliculasRecientes;
}

// Función para obtener todos los usuarios
function getAllUsuarios() {
  return usuariosData.usuarios;
}

// Función para obtener un usuario por ID
function getUsuarioById(id) {
  return usuariosData.usuarios.find((usuario) => usuario.id == id);
}

module.exports = {
  getAllPeliculas,
  getPeliculaById,
  getCopiasByPeliculaId,
  getPeliculasRecientes,
  getAllUsuarios,
  getUsuarioById,
};
