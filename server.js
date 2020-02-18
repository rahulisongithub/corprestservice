
var http = require('http');
var app = require('./app');

var server = http.createServer(app);
server.listen(80);

server.on('listening', onListening);
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' +  addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}