const fs = require('fs');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Registrar um listener para o evento 'read'
myEmitter.on('read', (data) => {
  console.log(data);
});

// Lendo um arquivo de maneira assíncrona
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  // Emitir o evento 'read'
  myEmitter.emit('read', data);
});

console.log('Lendo o arquivo...');

