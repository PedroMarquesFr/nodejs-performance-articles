
// primes.js
function calculatePrimes(iterations, multiplier) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
      var candidate = i * (multiplier * Math.random());
      var isPrime = true;
      for (var j = 0; j < primes.length; j++) {
        if (candidate % primes[j] == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(candidate);
      }
    }
  }
  
  console.time('Total Execution Time');
  calculatePrimes(Math.pow(4,8), 10000);
  console.timeEnd('Total Execution Time');
  console.log('Done!');
  
  