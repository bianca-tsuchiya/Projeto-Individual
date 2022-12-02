var quizModel = require("../models/quizModel");

function computarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var vitoria = req.body.vitoria;
    var pontos = req.body.pontos;

    // Faça as validações dos valores
    if (vitoria == undefined) {
        res.status(400).send("A vitória está undefined!");
    }
    else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.computarResultado(vitoria, pontos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function inserirFkQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var jogadas = req.params.jogadas;
    var idUsuario = req.params.idUsuario;

    // Faça as validações dos valores
    if (jogadas == undefined) {
        res.status(400).send("O jogadas está undefined!");
    }
    else if(idUsuario == undefined){
        res.status(400).send("O idUsuario está undefined!");
    }
    else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.inserirFkQuiz(jogadas, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    computarResultado,
    inserirFkQuiz
}