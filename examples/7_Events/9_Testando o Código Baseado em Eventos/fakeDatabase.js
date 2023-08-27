    // fakeDatabase.js
const EventEmitter = require('events');

class FakeDatabase extends EventEmitter {
  fetchData() {
    setTimeout(() => this.emit('data', { name: 'Alice' }), 500);
  }
}

module.exports = FakeDatabase;

