CREATE DATABASE BD_Realistic;
USE BD_Realistic;

DROP DATABASE BD_Realistic;

CREATE TABLE Contato(
	idContato INT PRIMARY KEY auto_increment,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    email VARCHAR(45),
    assunto VARCHAR(60),
    mensagem VARCHAR(500)
);

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY auto_increment,
	nome VARCHAR(45),
    sobrenome VARCHAR(45),
    username VARCHAR(45),
    data_nasc date,
    email VARCHAR(45),
    senha VARCHAR(20)
);

SELECT * FROM Usuario; 

INSERT INTO Usuario (nome, sobrenome, username, data_nasc, email, senha) VALUES
('Bianca', 'Tsuchiya', 'bihnamie', '2002-09-28', 'bianca.tsuchiya@sptech.school', '1234');

SELECT * FROM Usuario WHERE (username = 'bianca' OR email = 'bianca.tsuchiya@sptech.school') AND senha = '1234';