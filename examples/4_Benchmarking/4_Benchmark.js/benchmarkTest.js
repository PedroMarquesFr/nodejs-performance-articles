// Importando o módulo Benchmark
const Benchmark = require('benchmark');

// Criando uma nova "suite" de benchmark
const suite = new Benchmark.Suite;

// Exemplo de array para os nossos loops
const array = Array(10000).fill(0);

// Adicionando testes
suite
  // Teste do loop for
  .add('For loop', function() {
    for(let i = 0; i < array.length; i++) {
      const temp = array[i];
    }
  })

  // Teste do loop for...of
  .add('For...of loop', function() {
    for(let item of array) {
      const temp = item;
    }
  })

  // Teste do loop forEach
  .add('forEach loop', function() {
    array.forEach(item => {
      const temp = item;
    });
  })

  // Teste do loop map
  .add('map loop', function() {
    array.map(item => {
      const temp = item;
    });
  })

  // Teste do loop reduce
  .add('reduce loop', function() {
    array.reduce((accumulator, item) => accumulator + item, 0);
  })

  // Adicionando evento para imprimir os testes
  .on('cycle', function(event) {
    console.log(String(event.target));
  })

  // Adicionando evento para imprimir a conclusão dos testes
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

  // Rodando os testes
  .run({ 'async': true });