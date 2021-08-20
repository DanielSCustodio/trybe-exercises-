const divisao = require('../js/divisao');


describe('Teste simples', () => {
  test('Verifique se 10/5 é igual a 2', () => {
    expect(divisao.div(10, 5)).toBe(2);
  });//Test
});//Describe

describe('Testes com mock', () => {
  test('Verifique se a função é chamada somente uma vez', () => {
    divisao.div = jest.fn();
    divisao.div(10, 5);
    expect(divisao.div).toHaveBeenCalledTimes(1);
  });
});//Describe