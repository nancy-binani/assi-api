let express = require("express");

let data = require("./data.json");
let server = express();

server.get("/assi",function(req,res){
    res.json(data);
})



