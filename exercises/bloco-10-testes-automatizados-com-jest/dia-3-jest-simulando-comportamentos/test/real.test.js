const fetch = require('node-fetch');
const fetchJokePromise = require('../js/real');

// describe('Teste direto a API', () => {
//   test('Teste de acesso a API', () => {
//     return fetchJokePromise()
//       .then((response) => expect(typeof (response.joke)).toBe('string'));
//   })//Describe
// });//Describe

jest.mock('node-fetch');
describe('Teste via mock', () => {
  test('Teste de acesso via mock', () => {
    const data = {
      'id': '9843535457',
      'joke': "Why can't you trust an atom? Because they make up everything",
      'status': '200',
    }
    fetch.mockImplementation((url) => Promise.resolve({
      json: () => Promise.resolve(data),
    }));//Implementation

    return fetchJokePromise()
      .then((data) => expect(data.joke).toEqual("Why can't you trust an atom? Because they make up everything"));
  });//Test
});//Describe