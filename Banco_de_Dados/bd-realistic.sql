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
    nome_artista VARCHAR(45) DEFAULT 'Artista Desconhecido',
    descricao VARCHAR(150),
    categoria VARCHAR(45)
);

DROP TABLE Desenho;
DROP TABLE Curtida;
DROP TABLE Visualizacao;

CREATE TABLE Curtida(
	fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    fkDesenho INT, FOREIGN KEY (fkDesenho) REFERENCES Desenho(idDesenho),
    qtd_curtidas INT,
    dt_hora_curtida DATETIME NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (fkUsuario, fkDesenho)
);

INSERT INTO Curtida (fkUsuario, fkDesenho, qtd_curtidas) VALUES
(1, 1, 1),
(1, 2, 1),
(2, 2, 1);

SELECT * FROM Curtida;

INSERT INTO Curtida (fkUsuario, fkDesenho, qtd_curtidas) VALUES
(1, 0, 0);
        
UPDATE Curtida SET fkDesenho = 1, qtd_curtidas = (CASE WHEN qtd_curtidas = 0 THEN qtd_curtidas = 1
ELSE qtd_curtidas = 0 END) WHERE fkUsuario = 2;

SELECT c.qtd_curtidas, d.idDesenho, d.url, d.nome_artista, v.qtd_visualizacoes FROM Usuario as u
JOIN Curtida as c
ON c.fkUsuario = u.idUsuario RIGHT JOIN Desenho as d
ON c.fkDesenho = d.idDesenho LEFT JOIN Visualizacao as v
ON v.fkDesenho = d.idDesenho
ORDER BY d.idDesenho Desc;


-- ORDER BY idDesenho Desc;

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

INSERT INTO Desenho (url, nome_artista, descricao, categoria) VALUES
('desenho1_publicacoes.jpg', 'Bianca', 'uma flor', 'plantas'),
('desenho2_publicacoes.jpg', 'Bianca','um retrato', 'pessoas'),
('desenho3_publicacoes.jpg', 'Hiro' ,'um retrato', 'pessoas'),
('desenho4_publicacoes.jpg', null, 'um retrato', 'pessoas'),
('desenho5_publicacoes.jpg', null,'uma flor', 'plantas'),
('desenho6_publicacoes.jpg', null,'um retrato', 'pessoas'),
('desenho7_publicacoes.jpg', null,'um retrato', 'pessoas'),
('desenho8_publicacoes.jpg', null,'um retrato', 'pessoas'),
('desenho9_publicacoes.jpg', 'AJ','um retrato', 'pessoas');

TRUNCATE TABLE Visualizacao;

INSERT INTO Usuario (nome, sobrenome, username, data_nasc, email, senha) VALUES
('F??bio', 'Garcia', 'fabioGR', '2003-01-27', 'fabio.garcia@gmail.com', '123456');

INSERT INTO Usuario (nome, sobrenome, username, data_nasc, email, senha) VALUES
('Bianca', 'Tsuchiya', 'bihnamie', '2002-09-28', 'bianca.tsuchiya@sptech.school', '1234');

SELECT * FROM Usuario WHERE (username = 'bianca' OR email = 'bianca.tsuchiya@sptech.school') AND senha = '1234';


-- Quando clicar no bot??o para curtir (curtir apenas uma vez - CurtidaValida = false - if curtidaValida == false (adiciona e recebe true e preenche cora????o))
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

-- SELECT para ver todas as curtidas/visualiza????es de determinado desenho
SELECT SUM(qtd_curtidas) FROM Curtida WHERE fkDesenho = 1;
SELECT * FROM Visualizacao;

SELECT SUM(qtd_visualizacoes) FROM Visualizacao WHERE fkDesenho = 1;
SELECT SUM(qtd_visualizacoes) FROM Visualizacao WHERE fkDesenho = 1 AND fkUsuario = 1;

-- Mostrar desenho na tela
SELECT url FROM Desenho ORDER BY idDesenho Desc;
SELECT url FROM Desenho WHERE idDesenho = 2; -- contador for
SELECT url FROM Desenho ORDER BY idDesenho Desc;

-- Mostrar descricao e categoria -- Criar session storage idDesenho quando ?? clicado