const { Transform } = require('stream');

class MyTransformStream extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }

  _flush(callback) {
    this.push('END OF STREAM');
    callback();
  }
}

const stream = new MyTransformStream();
stream.on('data', (chunk) => console.log(chunk.toString('utf8')));
stream.write('a');
stream.write('b');
stream.write('c');
stream.end();

