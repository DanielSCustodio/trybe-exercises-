const assert = require('assert');
const greetPeople = (people) => {
	let arrayGreeting = [];
	let greeting = 'Hello ';

	for (let index = 0; index < people.length; index += 1) {
		arrayGreeting.push(greeting+people[index]);
	}
	return arrayGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const expected = greetPeople(parameter);
assert.deepStrictEqual(expected, result,"Esperado: ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa']");