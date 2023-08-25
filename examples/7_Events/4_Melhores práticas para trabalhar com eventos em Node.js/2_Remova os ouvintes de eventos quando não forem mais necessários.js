const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const listener = () => {
  console.log('Evento acionado!');
  myEmitter.off('event', listener);  // Removendo o ouvinte
};

myEmitter.on('event', listener);

myEmitter.emit('event');  // Output: Evento acionado!
myEmitter.emit('event');  // Sem saída

