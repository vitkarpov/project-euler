/**
 * sieve Erasthenes algorithm
 * @param  {Number} n
 * @return {Array}  prime numbers
 */
function sieveErasthenes(n) {
    var a = [];
    var primes = [];

    for (var i = 2; i <= n; i++) {
        a[i] = true;
    }

    a[0] = a[1] = false;

    var sqrtN = Math.sqrt(n);

    for (i = 2; i <= sqrtN; i++) {
        if (a[i]) {
            for (var j = i*i; j <= n; j += i) {
                a[j] = false;
            }
        }
    }

    for (i = 0; i <= n; i++) {
        if (a[i]) {
            primes.push(i);
        }
    }

    return primes;
}

/**
 * Get desired prime
 *
 * @param  {Number} count desired index of prime
 * @return {Number}       prime number
 */
function getThePrime(count) {
    var n = count - 1;
    var primes = [];
    var last = 0;

    while (count !== last) {
        primes = sieveErasthenes(n);
        last = primes.length;
        n++;
    }

    return primes[last - 1];
}

module.exports = getThePrime;