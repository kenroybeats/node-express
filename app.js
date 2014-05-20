var http = require('http');

var myServer = http.createServer( function (request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<b>HELLLOOOOOO WORLD!</b>");
    response.end();
});

myServer.listen(3000);

console.log("go to http://localhost:3000 on your browser");