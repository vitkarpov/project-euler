var 
		// значения не должны быть больше миллиона
		maxTerm = 1e+6;
		
var total = 0, n = 1,
		fibonacci = require('./fibonacci');

while(fibonacci.calc(n) < maxValue) {
	total += (fibonacci.calc(n) % 2 == 0) ? fibonacci.calc(n) : 0;
	n++;
}

console.log(total);
