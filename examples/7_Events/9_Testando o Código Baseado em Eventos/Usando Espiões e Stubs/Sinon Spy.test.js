const sinon = require('sinon');
const assert = require('assert');
const ActionEmitter = require('./path_to_actionEmitter');

describe('ActionEmitter', () => {
  it('should call the execute action', () => {
    const emitter = new ActionEmitter();
    const spy = sinon.spy();

    emitter.on('execute', spy);

    emitter.execute('myAction');

    assert.strictEqual(spy.calledOnce, true);
    assert.strictEqual(spy.calledWith('myAction'), true);
  });
});

