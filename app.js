
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Ray', 'Morten', 'James']
    });
});

app.get('/me', function(req, res) {
    res.send('<H1>Hello me! I AM COOL</H1>');
});

//example - http://localhost:3000/you/kenroy
app.get('/you/:name?', function(req, res) {
    var name = req.params.name;
    res.send('<H1>Hello</H1>' + name);
});


//start server

var server = app.listen(3000, function() {
    console.log("I am listening on 3000");
});