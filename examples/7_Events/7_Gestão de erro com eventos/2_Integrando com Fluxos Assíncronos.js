const fs = require('fs');
const EventEmitter = require('events');

class FileErrorEmitter extends EventEmitter {}

const fileEmitter = new FileErrorEmitter();

fileEmitter.on('error', (err) => {
  console.error(`Erro ao ler o arquivo: ${err.message}`);
});

fs.readFile('./nonexistent-file.txt', 'utf-8', (err, data) => {
  if (err) {
    fileEmitter.emit('error', err);
    return;
  }
  console.log(data);
});
