const fs = require('fs');

let readableStream = fs.createReadStream('input.txt');

readableStream.on('readable', function() {
    let chunk;
    while (null !== (chunk = readableStream.read())) {
        console.log(`Received ${chunk.length} bytes of data.`);
    }
});