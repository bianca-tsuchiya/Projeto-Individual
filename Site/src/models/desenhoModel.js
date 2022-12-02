var database = require("../database/config")

// SELECT url FROM Desenho ORDER BY idDesenho Desc;

function listarDesenhos() {

    console.log("ACESSEI O DESENHO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT url, artista FROM Desenho ORDER BY idDesenho Desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarDesenhos
}