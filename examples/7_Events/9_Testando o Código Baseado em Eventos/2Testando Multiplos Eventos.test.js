const assert = require('assert');
const EventEmitter = require('events');

describe('Multiple Events', () => {
    it('should emit multiple events in sequence', (done) => {
      const emitter = new EventEmitter();
      let firstEventFired = false;
  
      emitter.on('first', () => {
        firstEventFired = true;
      });
  
      emitter.on('second', () => {
        assert.strictEqual(firstEventFired, true);
        done();
      });
  
      emitter.emit('first');
      emitter.emit('second');
    });
  });
  