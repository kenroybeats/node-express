
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<H1>Hello mannnnnnn</H1> Express');
});



app.get('/me', function(req, res) {
    res.send('<H1>Hello me! I AM COOL</H1>');
});

app.get('/you/:name?', function(req, res) {
    var name = req.params.name;
    res.send('<H1>Hello</H1>' + name);
});


var server = app.listen(3000, function() {
    console.log("I am listening on 3000");
});