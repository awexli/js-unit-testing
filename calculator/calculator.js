function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	if(arr.length < 1) {
		return 0;
	}

	return arr.reduce((total, num) => total + num);
}

function multiply (arr) {
	return arr.reduce((total, num) => total * num);
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	if (num < 1) {
		return 1;
	}

	return num * factorial(num - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}