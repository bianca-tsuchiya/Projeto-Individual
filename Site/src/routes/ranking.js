var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/listarRanking", function (req, res) {
    rankingController.listarRanking(req, res);
});

module.exports = router;