const { myRemove, myFizzBuzz } = require('./exercicio');

describe('Test function myRemove.', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Test function myFizzBuzz', () => {
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz('GG')).toBeFalsy();
  });
});