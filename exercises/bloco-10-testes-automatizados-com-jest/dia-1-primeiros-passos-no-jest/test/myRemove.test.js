const myRemove = require('../js/myRemove');
const array = [1, 2, 3, 4]
describe('Testes para a função que elimina um elemento do array', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1,2,4]', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado ', () => {
    expect(myRemove(array, 5)).toEqual(array);
  });

});//Describe