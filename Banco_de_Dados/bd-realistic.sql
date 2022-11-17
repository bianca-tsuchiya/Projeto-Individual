CREATE DATABASE BD_Realistic;
USE BD_Realistic;

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
    nome_user VARCHAR(45),
    data_nasc date,
    email VARCHAR(45),
    senha VARCHAR(20)
);