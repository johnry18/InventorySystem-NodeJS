var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path = require('path');

app.use(express.static(__dirname + "/assets"));

app.get('/', function(req, res){
  console.log(req.headers)
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
