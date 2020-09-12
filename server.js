let express = require("express");
let port = 8080;
let app = express();
//Serve public folder


app.use(express.static("public"));

//?????? Used for Post, lets browser return post as json to server
app.use(express.urlencoded({ extended: true}));
//Ajax json handler
app.use(express.json());

// ???????? Set handlebars
var exphbs = require("express-handlebars");

//Sets settings for render engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
//sets view/render engine to handlebars
app.set("view engine", "handlebars");



let routes = require("./controllers/burgerController")