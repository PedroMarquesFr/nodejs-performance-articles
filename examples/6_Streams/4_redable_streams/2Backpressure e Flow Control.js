const fs = require('fs');

let readableStream = fs.createReadStream('largefile.txt');
let writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

readableStream.on('end', function(){
    console.log('Read completed');
});

writableStream.on('finish', function(){
    console.log('Write completed');
});