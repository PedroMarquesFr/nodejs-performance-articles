const StreamTest = require('streamtest');
const { MyTransformStream } = require('./myTransformStream');

describe('MyTransformStream', () => {
  StreamTest.versions.forEach((version) => {
    it('should transform data correctly in version ' + version, (done) => {
      const transformStream = new MyTransformStream();

      StreamTest[version].fromChunks(['a', 'b', 'c'])
        .pipe(transformStream)
        .pipe(StreamTest[version].toText((err, text) => {
          if (err) {
            done(err);
          } else {
            expect(text).toEqual('ABCEND OF STREAM');
            done();
          }
        }));
    });
  });
});

