var express = require('express');
const app = express();
const http = require('http');

var path = require('path');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

//var db = mongoose.connect("ptorswftest.mysql.db	")

var fs = require('fs');

//Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
 
//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});


//Get environment port or use 3000
const port = process.env.PORT || '3000';
app.set('port', port);
 
//Create HTTP server.
const server = http.createServer(app);
 
//Listen on port
server.listen(port, () => console.log(`API running on localhost:${port}`));

app.get('/gacha',function(req,res){
        fs.readdir('D:/Docs/les-produits/src/assets',(err,files)=>{
        res.send(files)
        });
    }
)