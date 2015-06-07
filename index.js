var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

//The following three lines are needed for parsing the body of the request; which is needed for request.body.key below.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());

//Note that key is the name of the variable; nothing magic with the variable key here.
app.post('/:key',function(request,response){
console.log('received params:'+request.params.key);
console.log('received body:'+request.body.key);
response.send('received params:'+ request.params.key +'; received body:'+request.body.key);
});

app.listen(3000);
