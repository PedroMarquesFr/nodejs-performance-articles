const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  const stream = fs.createReadStream('image.jpg');
  stream.pipe(res);
});

server.listen(8000);

