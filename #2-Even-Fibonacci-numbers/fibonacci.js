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

exports.calc = fibonacci;