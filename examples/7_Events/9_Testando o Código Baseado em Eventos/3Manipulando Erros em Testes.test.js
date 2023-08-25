const assert = require('assert');
const EventEmitter = require('events');

describe('Error Handling', () => {
    it('should emit an error event', (done) => {
      const emitter = new EventEmitter();
  
      emitter.on('error', (err) => {
        assert(err instanceof Error);
        assert.strictEqual(err.message, 'Ops!');
        done();
      });
  
      emitter.emit('error', new Error('Ops!'));
    });
  });
  