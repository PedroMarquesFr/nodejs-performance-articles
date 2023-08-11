const fs = require('fs');

let readableStream = fs.createReadStream('input.txt');
let writableStream = fs.createWriteStream('output.txt');

readableStream.on('error', function(error) {
    console.error('An error occurred:', error.message);
});

writableStream.on('error', function(error) {
    console.error('An error occurred:', error.message);
});

readableStream.pipe(writableStream);