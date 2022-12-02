var database = require("../database/config")

// SELECT url FROM Desenho ORDER BY idDesenho Desc;

function computarResultado(vitoria, pontos) {

    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function computarResultado()", vitoria, pontos);
    var instrucao = `
        INSERT INTO Quiz (vitoria, pontos) VALUES (${vitoria}, ${pontos});
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirFkQuiz(jogadas, idUsuario) {

    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirFkQuiz()", jogadas, idUsuario);
    var instrucao = `
        UPDATE Usuario SET fkQuiz = ${jogadas} WHERE idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    computarResultado,
    inserirFkQuiz
}