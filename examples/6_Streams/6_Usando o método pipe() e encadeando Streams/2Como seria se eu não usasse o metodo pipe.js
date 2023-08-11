const fs = require('fs');

let readableStream = fs.createReadStream('input.txt');
let writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', function(chunk) {
    const result = writableStream.write(chunk);
    if (!result) {
        console.log('Backpressure detected');
        readableStream.pause();
    }
});

writableStream.on('drain', function() {
    console.log('Drained, resuming read');
    readableStream.resume();
});

readableStream.on('end', function() {
    writableStream.end();
});
