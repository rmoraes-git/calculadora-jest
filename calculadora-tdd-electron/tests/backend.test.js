const { somar, subtrair } = require('../main/operacoes');

test('somar 5 + 3 deve retornar 8', () => {
  expect(somar(5, 3)).toBe(8);
});

test('subtrair 5 - 3 deve retornar 2', () => {
  expect(subtrair(5, 3)).toBe(2);
});