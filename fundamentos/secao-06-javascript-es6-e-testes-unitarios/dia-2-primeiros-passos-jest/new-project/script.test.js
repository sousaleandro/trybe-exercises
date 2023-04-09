const sum = require('./script');

it('Verifica se 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})