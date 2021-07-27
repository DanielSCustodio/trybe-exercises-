const assert = require('assert');

function myRemove(arr, item) {
	let newArr = [];
	for (let index = 0; index < arr.length; index += 1) {
		if (item !== arr[index]) {
			newArr.push(arr[index]);
		}
	}
	return newArr;
}

// implemente seus testes aqui
let numbers = [1,2,3,4];

// const expected = myRemove(numbers,3);
// assert.deepStrictEqual(expected,[1,2,4],'Erro: Expected,[1,2,4] '); //depp é para objetos
// const expected = myRemove(numbers,3);
// assert.notDeepStrictEqual(expected,numbers,'Não deve retornar [1,2,3,4]');
// const expected = myRemove(numbers,5);
// assert.deepStrictEqual(expected,[1,2,3,4,5],"Errou!") //Erro porposital!