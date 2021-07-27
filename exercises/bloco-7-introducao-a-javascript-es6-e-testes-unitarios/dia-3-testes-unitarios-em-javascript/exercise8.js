const assert = require('assert');
const sumAllNumbers = (numbers) => {
	let expected = 0;
	for (let index = 0; index < numbers.length; index += 1) {
		expected += numbers[index];
	}
	return expected;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);