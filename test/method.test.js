const { fibonacci, factorial } = require('../src/methods'); // غيّر المسار حسب ملفك

test('fibonacci function works correctly', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(6)).toBe(8);
  expect(fibonacci(7)).toBe(13);
});

test('factorial function works correctly', () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
});
