const fs = require('fs');
const util = require('util');
const pipeline = util.promisify(require('stream').pipeline);

async function compressFile(inputFile, outputFile) {
  const gzip = require('zlib').createGzip();

  await pipeline(
    fs.createReadStream(inputFile),
    gzip,
    fs.createWriteStream(outputFile)
  );

  console.log('File successfully compressed');
}

compressFile('input.txt', 'output.txt.gz').catch(console.error);

