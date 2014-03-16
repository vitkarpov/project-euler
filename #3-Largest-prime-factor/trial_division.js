var NUMBER_TO_TEST = 600851475143;

/**
 * Find the largest prime factor
 * for the given number
 * @param  {Number} n
 * @return {Number}
 */
console.log((function getTheLargestPrimeFactorFor(n) {
    var result = 0;
    for (var i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
        // if i is factor and it's prime
        // than we've reached the goal
        if ((n % i === 0) && isPrime(i)) {
            result = i;
            break;
        }
    }
    return result;
}(NUMBER_TO_TEST)));


// util function

/**
 * Check is given number a prime
 * @param  {Number}  n number
 * @return {Boolean}   is it prime
 */
function isPrime(n){
  // first check
  // is it even?
  // so we can reduce future efforts
  if (n % 2 === 0) {
    return false;
  }
  // we know that it's odd
  // so we don't need to check even numbers
  for (var i = 3; i <= Math.sqrt(n); i = i+2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
