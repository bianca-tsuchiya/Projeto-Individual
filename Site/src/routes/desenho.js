var express = require("express");
var router = express.Router();

var desenhoController = require("../controllers/desenhoController");

router.get("/listarDesenhos", function (req, res) {
    desenhoController.listarDesenhos(req, res);
});

module.exports = router;