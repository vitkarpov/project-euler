function getSumBelow (limit) {
	var sum = 0;

	for (var i = 0; i < limit; i++) {
		if (!(i % 5) || !(i % 3)) sum += i;
	}

	return sum;
}

module.exports = function() {
    getSumBelow(1000);
};
