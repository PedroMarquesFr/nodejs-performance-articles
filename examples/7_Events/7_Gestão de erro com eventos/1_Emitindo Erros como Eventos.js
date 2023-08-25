const EventEmitter = require('events');

class CustomErrorEmitter extends EventEmitter {}

const myEmitter = new CustomErrorEmitter();

// Ouvir o evento de erro
myEmitter.on('error', (err) => {
  console.error(`Ocorreu um erro: ${err.message}`);
});

// Emitir um erro
myEmitter.emit('error', new Error('Ops! Algo deu errado.'));
