var database = require("../database/config")

// SELECT url FROM Desenho ORDER BY idDesenho Desc;

function listarDesenhos() {

    console.log("ACESSEI O DESENHO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT c.qtd_curtidas, d.idDesenho, d.url, d.nome_artista, v.qtd_visualizacoes FROM Usuario as u
        JOIN Curtida as c
        ON c.fkUsuario = u.idUsuario RIGHT JOIN Desenho as d
        ON c.fkDesenho = d.idDesenho LEFT JOIN Visualizacao as v
        ON v.fkDesenho = d.idDesenho
        ORDER BY d.idDesenho Desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function curtir(idUsuario, identificacao_desenho) {
    console.log("ACESSEI O DESENHO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario);
    var instrucao = `
        INSERT INTO Curtida (fkUsuario, fkDesenho, qtd_curtidas) VALUES (${idUsuario}, ${identificacao_desenho}, 1) ON DUPLICATE KEY UPDATE qtd_curtidas = 0;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarDesenhos,
    curtir
}