// model banco de dados contato cliente mongoose forms

var mongoose   = require("mongoose");
var timestamps = require('mongoose-timestamp');

var MensagemSchema = new mongoose.Schema({
    nome: String,
    email: String,
    celular: String,
    assunto: String,
    equipamento: String,
    mensagem: String,
    ip: String
});

MensagemSchema.plugin(timestamps);

module.exports = mongoose.model("Mensagem", MensagemSchema);