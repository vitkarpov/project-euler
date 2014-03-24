/**
 * should find the largest palindrome
 * made from the product of 3-digit numbers
 */
function getTheLargestPalindrome() {

    var n = 999;
    var products = [];
    var current = 0;

    while (n >= 100) {
        for (var m = 999; m >= 100; m--) {
            current = n * m;
            if (isPalindrome(current)) {
                products.push(current);
            }
        }
        n--;
    }

    return Math.max.apply(null, products);
};

/**
 * check is given number a palindrome number,
 * for instance 121, 1331, ...
 * @param  {Number}  n
 * @return {Boolean}
 */
function isPalindrome(n) {
    var digits = n.toString().split('');
    var l = digits.length - 1;
    var result = true;

    for (var i = l; i >= 0; i--) {
        if (digits[i] !== digits[l - i]) {
            result = false;
            break;
        }
    }

    return result;
}

module.exports = getTheLargestPalindrome;