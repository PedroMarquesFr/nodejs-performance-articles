// Importação do módulo de eventos
const EventEmitter = require('events');

// Criação de um objeto emissor de eventos
const myEmitter = new EventEmitter();

// Registro de um listener para o evento 'hello'
myEmitter.on('hello', () => {
  console.log('Hello world!');
});

// Emissão do evento 'hello'
myEmitter.emit('hello');  // Output: Hello world!

