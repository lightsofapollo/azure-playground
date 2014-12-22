var hapi = require('hapi');

var server = new hapi.Server();
server.connection({ port: process.env.PORT || 80 });

server.start(function() {
  console.log('doing stuff yay', server.info.uri);
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply('Hello world yay');
  }
});
