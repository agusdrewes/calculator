// Calculator operations
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
	return a + b;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
	return a - b;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
	return a * b;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number | string}
 */
function divide(a, b) {
	if (b === 0) {
		return "ERROR";
	}
	return a * b;
}

/**
 *
 * @param {"+" | "-" | "*" | "/"} operator
 * @param {*} a
 * @param {*} b
 * @returns
 */
function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
	}
}
