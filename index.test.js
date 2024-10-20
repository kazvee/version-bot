const nextVersion = require('./index');

describe('nextVersion function', () => {
  it('returns next version number as a string', () => {
    const result = nextVersion('1');
    expect(typeof result).toBe('string');
  });

  it('increments version correctly', () => {
    const result = nextVersion('1.2.3');
    expect(result).toBe('1.2.4');
  });

  it('increments correctly when current version section is at 9', () => {
    const result = nextVersion('0.9.9');
    expect(result).toBe('1.0.0');
  });

  it('handles whole numbers', () => {
    const result = nextVersion('1');
    expect(result).toBe('2');
  });

  it('handles many dots in the version', () => {
    const result = nextVersion('1.2.3.4.5.6.7.8');
    expect(result).toBe('1.2.3.4.5.6.7.9');
  });

  it('maintains the same number of decimal points', () => {
    const result = nextVersion('9.9');
    expect(result).toBe('10.0');
  });

  it('maintains the same number of zeros at the beginning of the version', () => {
    const result = nextVersion('0.0.9.0.9');
    expect(result).toBe('0.0.9.1.0');
  });
});
