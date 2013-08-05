var 
		// правая граница интервала поиска
		maxTerm = 1e+6,
		// текущий четный член последовательности, начинаем поиски с первого
		currentEvenTerm = 2,
		// предел отношения двух соседних четных членов
		PROP_COEFF = 4.23606,
		total = 0;

/* Функция рекурсивно считает сумму четных членов последовательности
 * значения которых не превосходят maxTerm
 *
 * @params {number} currentTerm член последовательности с которого суммировать
 */
function getSum(currentTerm) {
	if (currentTerm < maxTerm) {
		total += currentTerm;
		currentTerm = Math.round(currentTerm*PROP_COEFF);
		getSum(currentTerm);
	} 

	return total;
}

console.log(getSum(currentEvenTerm));