const fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  const lines = data.split('\n');
  for (let line of lines) {
    console.log(`Linha do arquivo: ${line}`);
  }
});

