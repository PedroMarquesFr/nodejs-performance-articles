const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('input.txt');
const gzipStream = zlib.createGzip();
const writeStream = fs.createWriteStream('input.txt.gz');

readStream.on('error', handleError);
gzipStream.on('error', handleError);
writeStream.on('error', handleError);

readStream.pipe(gzipStream).pipe(writeStream);

function handleError(err) {
  console.error('An error occurred:', err);
  readStream.destroy();
  gzipStream.destroy();
  writeStream.end();
}

