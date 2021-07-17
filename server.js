let express = require("express");

let data = require("./data.json");
let server = express();

server.get("/test",function(req,res){
    res.json(data);
})



