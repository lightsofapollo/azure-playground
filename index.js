var http = require('http');
var debug = require('debug')('azure deubg');

http.createServer(function(req, res) {
  debug('made request');
  res.writeHead(200);
  res.write(JSON.stringify(process.env));
  res.end();
}).listen(process.env.PORT || 80);
