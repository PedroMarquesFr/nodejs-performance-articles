const sinon = require('sinon');
const { Readable } = require('stream');
const { processStream } = require('./myModule');

describe('processStream', () => {
  it('should call _read on the input stream', () => {
    const mockStream = new Readable({
      read() {},
    });

    const spy = sinon.spy(mockStream, '_read');

    processStream(mockStream);

    expect(spy.called).toBe(true);
  });
});

