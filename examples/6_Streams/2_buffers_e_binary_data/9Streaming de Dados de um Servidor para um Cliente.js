const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./largefile.txt');
  stream.pipe(res);
});

server.listen(8000);