/* 
 * Вычисляет n-й член последовательности Фибоначчи
 *
 * @params {number} n Номер члена последовательности
 */
function fibonacci(n) {
    if (!fibonacci.cache) {
        fibonacci.cache = {
            "1": 1,
            "2": 2
        }
    }

    if (!fibonacci.cache.hasOwnProperty(n)) {
        fibonacci.cache[n] =  fibonacci(n - 1) + fibonacci(n - 2);
    }

    return fibonacci.cache[n];
}

function findFibonacci(maxValue) {
    var total = 0;
    var n = 1;

    while(fibonacci(n) < maxValue) {
        total += (fibonacci(n) % 2 == 0) ? fibonacci(n) : 0;
        n++;
    }

    return total;
}

module.exports = function() {
    findFibonacci(1e+6);
}