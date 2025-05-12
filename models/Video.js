const db = require('../db');
const logger = require('../logger');

class Video {
  static criar({ titulo, descricao, url, idUsuario }) {
    return new Promise((resolve, reject) => {
      if (!titulo || !url || !idUsuario) {
        const erro = new Error("Campos obrigatórios ausentes em Video");
        logger.error(erro.message);
        return reject(erro);
      }

      const sql = "INSERT INTO videos (titulo, descricao, url, idUsuario) VALUES (?, ?, ?, ?)";
      db.query(sql, [titulo, descricao, url, idUsuario], (err, results) => {
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
      db.query("SELECT * FROM videos WHERE id = ?", [id], (err, results) => {
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
      db.query("DELETE FROM videos WHERE id = ?", [id], (err, results) => {
        if (err) {
          logger.error(err.message);
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}

module.exports = Video;