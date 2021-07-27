const assert = require('assert');

function myFizzBuzz(num) {
	if (typeof num !== 'number') return false;
	if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
	if (num % 3 === 0) return 'fizz';
	if (num % 5 === 0) return 'buzz';
	return num;
}

// implemente seus testes aqui

// const expected = myFizzBuzz(15);
// assert.strictEqual(expected,'fizzbuzz','Erro: retorno esperado "fizzbuzz"');

// const expected = myFizzBuzz(9);
// assert.strictEqual(expected,'fizz','Erro: retorno esperado "fizz"');

// const expected = myFizzBuzz(10);
// assert.strictEqual(expected,'buzz','Erro: retorno esperado "buzz"');

// const expected = myFizzBuzz(17);
// assert.strictEqual(expected, 17 ,`Erro: retorno esperado 17`);

// const expected = myFizzBuzz('n');
// assert.strictEqual(expected, false ,`É um número`);




