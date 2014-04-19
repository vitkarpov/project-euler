function getMatrixSum() {
    var result = 0;
    var l = 100;
    for (var i = l; i > 0; i--) {
        for (var j = l; j > 0; j--) {
            if (i != j) {
                result += i*j;
            }
        }
    }
    return result;
}

module.exports = getMatrixSum;