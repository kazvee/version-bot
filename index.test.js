const nextVersion = require('./index');

it('Returns next version number as a string', () => {
  const result = nextVersion('1');
  expect(typeof result).toBe('string');
});

it('Increments version correctly', () => {
  const result = nextVersion('1.2.3');
  expect(result).toBe('1.2.4');
});

it('Increments correctly when current version section is at 9', () => {
  const result = nextVersion('0.9.9');
  expect(result).toBe('1.0.0');
});

it('Handles whole numbers', () => {
  const result = nextVersion('1');
  expect(result).toBe('2');
});

it('Handles many dots in the version', () => {
  const result = nextVersion('1.2.3.4.5.6.7.8');
  expect(result).toBe('1.2.3.4.5.6.7.9');
});

it('Maintains the same number of decimal points', () => {
  const result = nextVersion('9.9');
  expect(result).toBe('10.0');
});
