const { findUserById, getUserName } = require('../js/bd');


describe('Verifique se o usuário existe ou não no banco de dados', () => {
  test('Verifique se o usuário existe no banco de dados', () => {
    expect.assertions(1);
    return findUserById(1).then((resposta) => {
      expect(resposta).toEqual({ id: 1, name: 'Mark' });
    })//findUserbyId
  });//test

  test('Verifique se o usuário não existe no banco de dados', () => {
    const id = 3;
    expect.assertions(1);
    return findUserById(id).catch((resposta) => {
      expect(resposta).toEqual(Error(`User with ${id} not found.`));
    })//findUserbyId
  });//test
})//Describe

describe(' Verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.', () => {
  test('Retorne o nome do usuário, caso seja encontrado', () => {
    expect.assertions(1);
    return getUserName(2).then((resposta) => {
      expect(resposta).toBe('Paul');
    })//getUserName;
  })//Test

  test('Retorne a mensagem de erro, caso  o usuário não seja encontrado', () => {
    const id = 3;
    expect.assertions(1);
    return getUserName(id).catch((resposta) => {
      expect(resposta).toStrictEqual(Error(`User with ${id} not found.`));
    })//getUserName;
  })//Test
})//Describe

describe('Verifique se o usuário existe ou não no banco de dados usando async/await', () => {
  it('Verifique se o usuário existe no banco de dados usando async/await', async () => {
    expect.assertions(1);
    const resposta = await findUserById(2);
    expect(resposta).toStrictEqual({ id: 2, name: 'Paul' });
  });//it

  it('Verifique se o usuário não existe no banco de dados', async () => {
    const id = 3;
    expect.assertions(1);
    try {
      const resposta = await findUserById(id);
    } catch (error) {
      expect(error).toStrictEqual(Error(`User with ${id} not found.`));
    }
  });//it
});//Describe