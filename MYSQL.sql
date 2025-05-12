CREATE DATABASE IF NOT EXISTS streaming;
USE streaming;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  senha VARCHAR(255)
);

CREATE TABLE videos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  descricao TEXT,
  url VARCHAR(255),
  idUsuario INT,
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texto TEXT,
  idUsuario INT,
  idVideo INT,
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
  FOREIGN KEY (idVideo) REFERENCES videos(id)
);