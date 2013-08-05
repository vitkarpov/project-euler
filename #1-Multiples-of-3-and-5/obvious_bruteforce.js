function getSumBelow (limit) {
	var sum = 0, i = 0;

	for ( ; i < limit; i++) {
		if (!(i % 5) || !(i % 3)) sum += i; 
	}

	return sum;
}

console.log(getSumBelow(1000));
