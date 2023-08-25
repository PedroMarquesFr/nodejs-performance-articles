const fs = require('fs');

const readStream = fs.createReadStream('big-file.txt', 'utf-8');

readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
  console.log('Finished reading the file.');
});