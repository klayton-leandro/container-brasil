// Requires
var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var cookieParser   = require("cookie-parser");

// Configuration
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())

app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
var paginasRoutes    = require("./routes/index");


// Routes Configuration
app.use("/", paginasRoutes);     // Rotas principais


// API
var APIMensagem = require("./routes/API/mensagem");
app.use("/API", APIMensagem);      // Rotas API/Mensagem

// Mongoose Configuration

//mongoose.connect("MONGODB-URL");
mongoose.connect("mongodb://");


// env.DEV 
// app.listen(3000,function(){
// console.log("Site da Containers Brasil no ar.");

//Run
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("dev rodando container");
});