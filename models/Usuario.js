const db = require('../db');
const logger = require('../logger');

class Usuario {
  static criar({ nome, email, senha }) {
    return new Promise((resolve, reject) => {
      if (!nome || !email || !senha) {
        const erro = new Error("Campos obrigatórios ausentes em Usuario");
        logger.error(erro.message);
        return reject(erro);
      }

      const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
      db.query(sql, [nome, email, senha], (err, results) => {
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
      db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
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
      db.query("DELETE FROM usuarios WHERE id = ?", [id], (err, results) => {
        if (err) {
          logger.error(err.message);
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}

module.exports = Usuario;