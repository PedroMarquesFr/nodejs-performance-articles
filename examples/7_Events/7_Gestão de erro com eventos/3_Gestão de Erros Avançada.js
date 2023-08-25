const EventEmitter = require('events');

class CustomErrorEmitter extends EventEmitter {}

const myEmitter = new CustomErrorEmitter();

// Ouvir o evento de erro
myEmitter.on('error', (err) => {
  console.error(`Ocorreu um erro: ${err.message}`);
});

// Emitir um erro
myEmitter.emit('error', new Error('Ops! Algo deu errado.'));

myEmitter.on('error', (err) => {
    // Logar o erro
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  });
  
  myEmitter.on('error', (err) => {
    // Enviar um email para o administrador
    sendErrorEmail('admin@example.com', err.message);
  });
  
  myEmitter.on('error', (err) => {
    // Guardar o erro em um sistema de monitoramento
    storeErrorInMonitoringSystem(err);
  });
  