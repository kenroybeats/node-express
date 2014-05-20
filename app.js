
var express = require('express');

var app = express();

app.locals.pagetitle = "Awesome Website";

app.set('view engine', 'ejs');



app.get('/', routes.index);

app.get('/about', routes.about);

app.get('*', function(req, res) {
    res.send('Bad Route');
});


////example - http://localhost:3000/you/kenroy
//app.get('/you/:name?', function(req, res) {
//    var name = req.params.name;
//    res.send('<H1>Hello</H1>' + name);
//});
//

//start server

var server = app.listen(3000, function() {
    console.log("I am listening on 3000");
});