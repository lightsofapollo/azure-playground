var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(JSON.stringify(process.env));
  res.end();
}).listen(process.env.PORT || 80);
