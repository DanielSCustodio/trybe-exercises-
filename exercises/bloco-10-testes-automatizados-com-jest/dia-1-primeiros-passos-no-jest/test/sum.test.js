const sum = require('../js/sum');

describe('Testes para a função de soma de 2 números', () => {
  test('Adicionando 4+5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Adicionando 0+0= 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Teste para verificar se a função lança um erro quando existe uma string como parÂmetro', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('Teste para verificar a mensagem de erro', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });

});

