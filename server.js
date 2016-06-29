var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('../sim-racing-connection'));
app.listen(8000);
console.log("Listening on port 8000");
console.log("Access site at http://localhost:8000/index.html")
