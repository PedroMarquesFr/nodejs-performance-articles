const fs = require('fs');

const readStream = fs.createReadStream('./largefile.txt');

readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
  console.log('No more data.');
});

