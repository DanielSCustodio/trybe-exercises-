const assert = require('assert');
const findTheNeedle = (array, word) => {
	expected = array[0];
	for (let index = 0; index < array.length; index++) {
		if (word === array[index]) {
			expected = index;
		}
		return expected;
	}
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);