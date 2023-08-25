const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
  console.log('Hello world!');
});

myEmitter.emit('greet');  // Output: Hello world!

