const uppercase = require('../js/uppercase');
describe('Teste da função upercase', (done) => {
  test('Verifique se o texto será transformado em uppercase', (done) => {
    uppercase('daniel', (callback) => {
      try {
        expect(callback).toBe('DANIEL');
        done();
      } catch (error) {
        done(error)
      }
    }); //uppercase
  });

  test('Verifique se o texto não será transformado em uppercase', (done) => {
    uppercase('daniel', (callback) => {
      try {
        expect(callback).not.toBe('daniel');
        done();
      } catch (error) {
        done(error)
      }
    }); //uppercase
  });
}); //Descibre