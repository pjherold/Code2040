var express = require("express");
var path = require("path");

var app = express();
var server_port = process.env.PORT || 7777;

app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(server_port,function(){
    console.log("Started listening on port", server_port);
})
