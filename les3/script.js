var express = require("express");
var app   = express();
app.get("/",function(req, res){

    res.send("hw");
});
app.get("/:name",function(req, res){
    var name = req.params.name;
    res.send(name);
});
app.listen(3005,function(){
    console.log("3005");
});