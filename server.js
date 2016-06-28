var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('../sim-racing-connection'));
app.listen(8000);
