const { Duplex } = require('stream');

const duplexStream = new Duplex({
  read(size) {
    console.log(size)
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },

  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);
