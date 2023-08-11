const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./largefile.txt');
const writeStream = fs.createWriteStream('./compressed.gz');

const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);