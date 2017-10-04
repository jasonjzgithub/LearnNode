var express = require('express');
var bodyParser = require('body-parser');
app = express();

app.use(bodyParser.json());

port = process.env.PORT || 3000;

app.get('/', function(req,res){
    res.send('hello world');
})
app.get('/defaultContent', function(req,res){
    res.send('return default content');
})
app.get('/rest', function(req,res){
    res.send('return restful');
})
app.get('/rest/:restId', function(req,res){
    res.send('return restful with the position id: '+req.params.restId);
})
app.put('/rest/createData', function(req, res){
    res.send('You created a data object : '+ JSON.stringify(req.body));
})
app.listen(port);
console.log('todo list RESTful API server started on : ' + port);
