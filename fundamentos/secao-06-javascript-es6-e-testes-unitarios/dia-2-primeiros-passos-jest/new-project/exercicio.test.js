const { myRemove } = require('./exercicio');

describe('Test function myRemove.', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});