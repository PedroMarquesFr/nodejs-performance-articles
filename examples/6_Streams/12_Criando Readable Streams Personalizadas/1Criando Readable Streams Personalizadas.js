const { Readable } = require('stream');

class MyReadableStream extends Readable {
  constructor(options) {
    super(options);
    this.data = options.data;
  }

  _read(size) {
    let chunk;
    while (null !== (chunk = this.data.shift())) {
      if (!this.push(chunk)) {
        break;
      }
    }
    if (this.data.length === 0) {
      this.push(null);
    }
  }
}

const stream = new MyReadableStream({ data: ['a', 'b', 'c'], objectMode: true });
stream.on('data', (chunk) => console.log(chunk));

