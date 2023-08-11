const fs = require('fs');

let writableStream = fs.createWriteStream('output.txt');

let data = 'Hello, this is some data to write.';

writableStream.write(data, 'utf8', function(error){
    if(error){
        console.error('An error occurred:', error.message);
    } else {
        console.log('Writing completed');
    }
});