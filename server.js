var connect = require('connect');
var serveStatic = require('serve-static');
console.log("Server has started at 9090.");
connect().use(serveStatic(__dirname)).listen(9090);