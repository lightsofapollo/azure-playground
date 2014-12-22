var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write('woot');
  res.end();
}).listen(process.env.PORT || 80);
