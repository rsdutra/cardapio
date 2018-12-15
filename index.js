const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
var mysql = require('./connection.js');

var app = express();

var server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
// var server = app.listen(8081, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
//  });

app.get('/',function(req,res){
    mysql.start();
    mysql.run();
    res.send({resposta: "Teste"});
});