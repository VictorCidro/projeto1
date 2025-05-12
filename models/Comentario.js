const db = require('../db');
const logger = require('../logger');

class Comentario {
  static criar({ texto, idUsuario, idVideo }) {
    return new Promise((resolve, reject) => {
      if (!texto || !idUsuario || !idVideo) {
        const erro = new Error("Campos obrigatórios ausentes em Comentario");
        logger.error(erro.message);
        return reject(erro);
      }

      const sql = "INSERT INTO comentarios (texto, idUsuario, idVideo) VALUES (?, ?, ?)";
      db.query(sql, [texto, idUsuario, idVideo], (err, results) => {
        if (err) {
          logger.error(err.message);
          return reject(err);
        }
        resolve(results.insertId);
      });
    });
  }

  static buscarPorId(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM comentarios WHERE id = ?", [id], (err, results) => {
        if (err) {
          logger.error(err.message);
          return reject(err);
        }
        resolve(results[0]);
      });
    });
  }

  static deletar(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM comentarios WHERE id = ?", [id], (err, results) => {
        if (err) {
          logger.error(err.message);
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}

module.exports = Comentario;