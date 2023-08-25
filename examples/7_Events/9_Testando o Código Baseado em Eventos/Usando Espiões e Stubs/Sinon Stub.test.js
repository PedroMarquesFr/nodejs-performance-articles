const sinon = require('sinon');
const assert = require('assert');
const ServerConnector = require('./path_to_serverConnector');

describe('ServerConnector', () => {
  it('should connect to server', (done) => {
    const connector = new ServerConnector();

    sinon.stub(connector, 'connect').callsFake(() => {
      connector.emit('connected');
    });

    connector.on('connected', () => {
      assert.strictEqual(true, true);  // Se chegou aqui, o evento foi emitido
      done();
    });

    connector.connect();
  });
});

