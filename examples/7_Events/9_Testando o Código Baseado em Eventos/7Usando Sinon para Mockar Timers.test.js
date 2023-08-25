const sinon = require('sinon');
const EventEmitter = require('events');

class DelayedEmitter extends EventEmitter {
  delayedEmit() {
    setTimeout(() => {
      this.emit('delayed', 'Delayed Hello!');
    }, 5000);
  }
}

describe('DelayedEmitter', () => {
  let clock;

  before(() => {
    clock = sinon.useFakeTimers();
  });

  after(() => {
    clock.restore();
  });

  it('should emit a delayed event', (done) => {
    const emitter = new DelayedEmitter();

    emitter.on('delayed', (msg) => {
      assert.strictEqual(msg, 'Delayed Hello!');
      done();
    });

    emitter.delayedEmit();
    clock.tick(5000);
  });
});
