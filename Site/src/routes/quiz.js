var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/computarResultado", function (req, res) {
    quizController.computarResultado(req, res);
});


router.put("/inserirFkQuiz/:jogadas:idUsuario", function (req, res) {
    quizController.inserirFkQuiz(req, res);
});




module.exports = router;