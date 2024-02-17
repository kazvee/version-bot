const sayHello = require('./index');

test('returns "Hello World! 🌎"', () => {
  expect(sayHello()).toBe('Hello World! 🌎');
});
