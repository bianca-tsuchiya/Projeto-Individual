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

CREATE TABLE Desenho(
	idDesenho INT PRIMARY KEY auto_increment,
    url VARCHAR(100),
    nome_artista VARCHAR(45),
    descricao VARCHAR(150),
    categoria VARCHAR(45)
);

CREATE TABLE Curtida(
	fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    fkDesenho INT, FOREIGN KEY (fkDesenho) REFERENCES Desenho(idDesenho),
    qtd_curtidas INT,
    dt_hora_curtida DATETIME NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (fkUsuario, fkDesenho)
);

CREATE TABLE Visualizacao(
	idVisualizacao INT auto_increment,
	fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    fkDesenho INT, FOREIGN KEY (fkDesenho) REFERENCES Desenho(idDesenho),
    qtd_visualizacoes INT,
    dt_hora_visualizacao DATETIME NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (idVisualizacao, fkUsuario, fkDesenho)
);

SELECT * FROM Desenho;
SELECT * FROM Usuario;

INSERT INTO Desenho (url, descricao, categoria) VALUES
('desenho1_publicacoes.jpg', 'uma flor', 'plantas'),
('desenho2_publicacoes.jpg', 'um retrato', 'pessoas'),
('desenho3_publicacoes.jpg', 'um retrato', 'pessoas'),
('desenho4_publicacoes.jpg', 'um retrato', 'pessoas'),
('desenho5_publicacoes.jpg', 'uma flor', 'plantas'),
('desenho6_publicacoes.jpg', 'um retrato', 'pessoas'),
('desenho7_publicacoes.jpg', 'um retrato', 'pessoas'),
('desenho8_publicacoes.jpg', 'um retrato', 'pessoas'),
('desenho9_publicacoes.jpg', 'um retrato', 'pessoas');

TRUNCATE TABLE Desenho;

INSERT INTO Usuario (nome, sobrenome, username, data_nasc, email, senha) VALUES
('Fábio', 'Garcia', 'fabioGR', '2003-01-27', 'fabio.garcia@gmail.com', '123456');

INSERT INTO Usuario (nome, sobrenome, username, data_nasc, email, senha) VALUES
('Bianca', 'Tsuchiya', 'bihnamie', '2002-09-28', 'bianca.tsuchiya@sptech.school', '1234');

SELECT * FROM Usuario WHERE (username = 'bianca' OR email = 'bianca.tsuchiya@sptech.school') AND senha = '1234';


-- Quando clicar no botão para curtir (curtir apenas uma vez - CurtidaValida = false - if curtidaValida == false (adiciona e recebe true e preenche coração))
-- INSERT INTO //Curtir
INSERT INTO Curtida (fkUsuario, fkDesenho, qtd_curtidas) VALUES
(1, 1, 1);
INSERT INTO Curtida (fkUsuario, fkDesenho, qtd_curtidas) VALUES
(2, 1, 1);

-- INSERT INTO //Visualizar
INSERT INTO Visualizacao (fkUsuario, fkDesenho, qtd_visualizacoes) VALUES
(1, 1, 1),
(1, 1, 1);

INSERT INTO Visualizacao (fkUsuario, fkDesenho, qtd_visualizacoes) VALUES
(2, 1, 1),
(1, 1, 1);

-- SELECT para ver todas as curtidas/visualizações de determinado desenho
SELECT SUM(qtd_curtidas) FROM Curtida WHERE fkDesenho = 1;
SELECT * FROM Visualizacao;

SELECT SUM(qtd_visualizacoes) FROM Visualizacao WHERE fkDesenho = 1;
SELECT SUM(qtd_visualizacoes) FROM Visualizacao WHERE fkDesenho = 1 AND fkUsuario = 1;

-- Mostrar desenho na tela
SELECT url FROM Desenho ORDER BY idDesenho Desc;
SELECT url FROM Desenho WHERE idDesenho = 2; -- contador for
SELECT url FROM Desenho ORDER BY idDesenho Desc;

-- Mostrar descricao e categoria -- Criar session storage idDesenho quando é clicado