const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Imagine que este ouvinte de evento é uma função que responde a uma mensagem de chat em tempo real
myEmitter.on('message', (message) => {
  console.log(`New message: ${message}`);
});