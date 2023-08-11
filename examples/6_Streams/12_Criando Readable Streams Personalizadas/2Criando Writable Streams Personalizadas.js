const { Writable } = require('stream');

class MyWritableStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
}

const stream = new MyWritableStream();
stream.write('a');
stream.write('b');
stream.write('c');
stream.end();