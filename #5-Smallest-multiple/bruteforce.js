/**
 * 2520 is the smallest evenly divisable number
 * for every number from 1 to 10.
 * It means that we should find above 2520
 */

function getTheSmallestEvenlyDivisable() {
    var found = false;
    var current = 2520;
    var divisors = [24, 36, 20, 14, 16, 11, 13, 17, 19];

    while (!found) {
        divisors.passedCount = 0;
        divisors.forEach(function(divisor) {
            if (current % divisor) {
                return current += 10;
            }
            divisors.passedCount++;
        });
    
        if (9 === divisors.passedCount) {
            found = true;
        }
    }

    return current;
}

module.exports = getTheSmallestEvenlyDivisable;