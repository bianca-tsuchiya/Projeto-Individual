var express = require("express");
var router = express.Router();

var desenhoController = require("../controllers/desenhoController");

router.get("/listarDesenhos", function (req, res) {
    desenhoController.listarDesenhos(req, res);
});

router.post("/curtir/:idUsuario:identificacao_desenho", function (req, res) {
    desenhoController.curtir(req, res);
});

module.exports = router;