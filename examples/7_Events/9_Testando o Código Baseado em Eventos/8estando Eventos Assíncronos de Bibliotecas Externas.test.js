const sinon = require('sinon');
const assert = require('assert');
const FakeDatabase = require('./fakeDatabase');

describe('FakeDatabase', () => {
  it('should fetch data', (done) => {
    const db = new FakeDatabase();

    sinon.stub(db, 'fetchData').callsFake(() => {
      db.emit('data', { name: 'Bob' });
    });

    db.on('data', (data) => {
      assert.strictEqual(data.name, 'Bob');
      done();
    });

    db.fetchData();
  });
});

