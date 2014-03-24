var
        // правая граница интервала поиска
        termMax = 1e+6,
        // текущий четный член последовательности, начинаем поиски с первого
        termStart = 2,
        // предел отношения двух соседних четных членов
        PROP_COEFF = 4.23606,
        total = 0;

/* Функция рекурсивно считает сумму четных членов последовательности
 * значения которых не превосходят termMax
 *
 * @params {number} termCurrent член последовательности с которого суммировать
 */
function getSum(termCurrent) {
    if (termCurrent < termMax) {
        total += termCurrent;
        termCurrent = Math.round(termCurrent*PROP_COEFF);
        getSum(termCurrent);
    }
    return total;
}

module.exports = function() {
    getSum(termStart);
}