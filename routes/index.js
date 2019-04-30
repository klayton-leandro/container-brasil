// Requires
var express    = require("express");
var router     = express.Router();

var Mensagem = require("../models/mensagem");

// Tela Inicial
router.get("/", function(req, res) {
  res.render("site");
});

router.get("/equipamentos/dry", function(req, res) {
  res.render("equipamentosDry");
});

router.get("/equipamentos/reefer", function(req, res) {
  res.render("equipamentosReefer");
});

router.get("/equipamentos/personalizado", function(req, res) {
  res.render("equipamentosPersonalizado");
});

router.get('*', function(req, res) {
  res.redirect("/");
});

module.exports = router;