const fs = require('fs');
const zlib = require('zlib');

let readableStream = fs.createReadStream('input.txt');
let writableStream = fs.createWriteStream('output.txt.gz');

let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writableStream);