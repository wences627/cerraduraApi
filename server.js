
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var port=8085;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.send('<html><body><h1>Hello world niño xD</h1></body></html>');
});
app.post('/user', function(req, res){
  let json = req.body;
  console.log(json);
  console.log(json.tagId);
  res.status(200).send({status:"OK"});
});
app.listen(port);
console.log('servidor iniciado');
