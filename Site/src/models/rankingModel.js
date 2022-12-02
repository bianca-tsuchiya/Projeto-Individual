var database = require("../database/config")

function listarRanking() {

    console.log("ACESSEI O RANKING  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarRanking()");
    var instrucao = `
        SELECT u.username, q.pontos FROM Usuario as u
        JOIN Quiz as q ON u.fkQuiz = q.idQuiz ORDER BY pontos DESC limit 7;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarRanking
}