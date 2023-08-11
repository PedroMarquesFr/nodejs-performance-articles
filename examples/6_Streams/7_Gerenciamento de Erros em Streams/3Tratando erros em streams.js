const fs = require('fs');

const stream = fs.createReadStream('nonexistent.txt');

stream.on('error', (err) => {
  console.error('An error occurred:', err);
});

