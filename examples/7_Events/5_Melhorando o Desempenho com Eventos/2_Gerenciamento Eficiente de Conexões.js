const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  // Lidar com a solicitação de maneira assíncrona
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
