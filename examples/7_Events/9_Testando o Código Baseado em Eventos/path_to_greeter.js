const EventEmitter = require('events');

class Greeter extends EventEmitter {
  greet(name) {
    this.emit('greeting', `Olá, ${name}!`);
  }
}

module.exports = Greeter;
