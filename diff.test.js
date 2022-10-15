const math = require('./math');

test('diff 10 - 2 to equal 8', () => {
  expect(math.diff(10, 2)).toBe(8);
});