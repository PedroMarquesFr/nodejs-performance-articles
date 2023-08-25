const EventEmitter = require('events');

class ActionEmitter extends EventEmitter {
  execute(action) {
    this.emit('execute', action);
  }
}

module.exports = ActionEmitter;

