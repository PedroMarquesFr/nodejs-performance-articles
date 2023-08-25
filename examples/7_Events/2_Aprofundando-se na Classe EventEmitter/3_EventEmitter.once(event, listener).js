const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.once('greet', () => {
  console.log('Hello world!');
});

myEmitter.emit('greet');  // Output: Hello world!
myEmitter.emit('greet');  // Sem saída

