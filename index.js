 var express = require('express');
 var app = express();
 
 /*app.get('/', function(req,res) {
       res.send('Nep-Nep!');
 });
 app.get('/students', function(req,res) {
       res.send('Nepgear!');
 });*/
 
 app.use(require('body-parser')());              //require npm installation first
 app.use(require('method-override')());
 app.use(require(__dirname+'/config/router')(express.Router()));
 
 var server = app.listen(5000, function() {
       var host = server.address().address;
       var port = server.address().port;
       console.log('Example app listening at http://%s:%s', host, port);
 });
 
 