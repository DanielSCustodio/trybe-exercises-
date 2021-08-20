const random = require('../js/random');
describe('Teste simples', () => {
  test('Verificando se o resultado é diferente de 10', () => {
    const result = random.random();
    expect(result).not.toEqual(10);
  })//Test
})//Describe


describe('Testes com mock na função random', () => {
  test('Verifique se a função foi chamada', () => {
    random.random = jest.fn();
    random.random();
    expect(random.random).toHaveBeenCalled();
  });//Test

  test('Verifique se o retorno da função é igual a 10', () => {
    random.random = jest.fn().mockReturnValue(10);
    const result = random.random();
    expect(result).toBe(10);
  })//Test

  test('Verifique quantas vezes a função foi chamada', () => {
    random.random = jest.fn();
    random.random();
    expect(random.random).toHaveBeenCalledTimes(1);
  });//Test
});//Describe