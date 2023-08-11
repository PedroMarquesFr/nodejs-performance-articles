const fs = require('fs');

let readableStream = fs.createReadStream('input.txt');

readableStream.on('data', function(chunk) {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on('end', function(){
    console.log('There is no more data to read.');
});

readableStream.on('error', function(error){
    console.error('An error occurred:', error.message);
});

readableStream.on('close', function(){
    console.log('The stream has been closed.');
});