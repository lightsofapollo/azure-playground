var hapi = require('hapi');

var server = new hapi.Server();
server.connection({ port: 60023 });

server.start(function() {
  console.log('doing stuff', server.info.uri);
});
