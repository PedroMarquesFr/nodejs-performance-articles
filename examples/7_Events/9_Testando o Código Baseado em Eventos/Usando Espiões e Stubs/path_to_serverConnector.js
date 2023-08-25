const EventEmitter = require('events');

class ServerConnector extends EventEmitter {
  connect() {
    // Simulando uma chamada de API
    setTimeout(() => this.emit('connected'), 1000);
  }
}

module.exports = ServerConnector;

