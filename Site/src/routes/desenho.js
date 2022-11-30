var express = require("express");
var router = express.Router();

var desenhoController = require("../controllers/desenhoController");

router.get("/listarDesenhos", function (req, res) {
    desenhoController.listarDesenhos(req, res);
});

router.post("/inserirCurtidaFalsa:idUsuario", function (req, res) {
    desenhoController.inserirCurtidaFalsa(req, res);
});

module.exports = router;