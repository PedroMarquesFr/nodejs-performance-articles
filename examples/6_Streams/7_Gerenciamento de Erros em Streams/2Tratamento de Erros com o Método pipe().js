const fs = require('fs');
const { pipeline } = require('stream');

let readableStream = fs.createReadStream('input.txt');
let writableStream = fs.createWriteStream('output.txt');

pipeline(readableStream, writableStream, (error) => {
    if (error) {
        console.error('An error occurred:', error.message);
    } else {
        console.log('Pipeline succeeded.');
    }
});