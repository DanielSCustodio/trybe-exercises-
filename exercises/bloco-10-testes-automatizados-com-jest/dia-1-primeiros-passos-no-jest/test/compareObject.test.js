
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  test('Compare obj1 e obj 2', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Compare obj2 e obj 3 e verifique se não são iguais', () => {
    expect(obj2).not.toEqual(obj3);
  });
});// Describe