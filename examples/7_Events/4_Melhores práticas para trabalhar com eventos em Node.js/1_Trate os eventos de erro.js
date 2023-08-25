const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('error', (err) => {
  console.error('Ocorreu um erro:', err);
});

myEmitter.emit('error', new Error('Algo deu errado!'));