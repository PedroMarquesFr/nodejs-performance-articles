const assert = require('assert');
const Greeter = require('./path_to_greeter');

describe('Greeter', () => {
  it('should emit a greeting event', (done) => {
    const greeter = new Greeter();

    greeter.on('greeting', (message) => {
      assert.strictEqual(message, 'Olá, Alice!');
      done();
    });

    greeter.greet('Alice');
  });
});
