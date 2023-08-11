const fs = require('fs');

let data = 'Escrevendo este texto para o arquivo output.txt';
let writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function(){
    console.log('Escrita concluída');
});

writeStream.on('error', function(err){
   console.log(err.stack);
});

