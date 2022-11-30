var desenhoModel = require("../models/desenhoModel");

function listarDesenhos(req, res) {
    
    desenhoModel.listarDesenhos()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os desenhos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function inserirCurtidaFalsa(req, res) {
    var idUsuario = req.params.idUsuario;
    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está indefinido!");
    } else {
        desenhoModel.inserirCurtidaFalsa(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    listarDesenhos,
    inserirCurtidaFalsa
}