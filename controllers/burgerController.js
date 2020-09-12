
//prepare express for use
let express = require("express")

//???????
let router = express.Router(); 

//???? import the burger model to utilize it's db functions
var burger = require("../models/burger.js");

//routes - res/req handlers
router.get("/", function(req, res) {
    

}) 