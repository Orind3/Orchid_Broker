const mosca = require('mosca');

const settings = {
  port: parseInt(process.env.PORT) || 1883,
};

const server = new mosca.Server(settings);
server.on('ready', function() {
  console.log('Mosca server is up and running!');
});