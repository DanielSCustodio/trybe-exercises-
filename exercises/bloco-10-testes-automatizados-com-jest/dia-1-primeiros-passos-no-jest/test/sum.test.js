const sum = require('../js/sum');


test('Adicionando 4+5 = 9', () => {
  expect(sum(4, 5)).toBe(9);
});
