const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
	for (let index = 0, len = arr.length; index < len; index += 1) {
		if (arr[index] === item) {
			arr.splice(index, 1);
			index -= 1;
			len -= 1;
		}
	}

	return arr;
}


// implemente seus testes aqui
// const expected = myRemoveWithoutCopy([1, 2, , 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 4], "Erro! Esperado [1, 2, 3, 4]")

// const expected = myRemoveWithoutCopy([1,2,3,4], 7); //Erro proposital
// assert.notDeepStrictEqual(expected,[1,2,3,4], 'Não deve retornar[1,2,3,4]');

// const numbers = [1,2,3,4,5];
// const expected = myRemoveWithoutCopy(numbers,2);
// assert.deepStrictEqual(expected, numbers.length,'Sofreu alteração');

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],5),[1,2,3,4],'Erro! Array esperado [1,2,3,4');

