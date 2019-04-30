// Requires
var express    = require("express");
var router     = express.Router();

var Mensagem = require("../../models/mensagem");

router.post("/mensagem", function(req, res) {
    
    req.query.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    Mensagem.create(req.query, function(err, Mensagem) {
        if (err) {
            return res.send(JSON.stringify(err), {
               'Content-Type': 'application/json'
            }, 404);
        }
        
        res.send(Mensagem, {
           'Content-Type': 'appication/json'
        }, 200);
    });
    
    
});

module.exports = router;