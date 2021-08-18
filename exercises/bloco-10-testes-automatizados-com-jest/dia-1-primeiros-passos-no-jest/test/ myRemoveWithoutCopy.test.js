const myRemoveWithoutCopy = require('../js/ myRemoveWithoutCopy');

describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  const array = [1, 2, 3, 4]
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const result = array.slice();
    myRemoveWithoutCopy(array, 3);
    expect(array).not.toBe(result);
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy(array, 5)).toEqual(array);
  });


}); //Describe