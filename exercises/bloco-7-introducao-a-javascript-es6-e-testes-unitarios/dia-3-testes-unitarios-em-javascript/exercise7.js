const assert = require('assert');
const wordLengths = (words) =>{
	let expected = [];
	for (let index = 0; index < words.length; index +=1) {
		expected.push(words[index].length);
	}
	return expected;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);