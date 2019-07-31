import getRandomInt from './math';

describe('Test getRandomInt', async (): Promise<void> => {
  it('Test random 0 - 1', (): void => {
    expect(getRandomInt(0, 1)).toBeLessThanOrEqual(1);
    expect(getRandomInt(0, 1)).toBeGreaterThanOrEqual(0);
  });
  it('Test random 0 - 100', (): void => {
    expect(getRandomInt(0, 100)).toBeLessThanOrEqual(100);
    expect(getRandomInt(0, 100)).toBeGreaterThanOrEqual(0);
  });
  it('Test random 50 - 100', (): void => {
    expect(getRandomInt(50, 100)).toBeLessThanOrEqual(100);
    expect(getRandomInt(50, 100)).toBeGreaterThanOrEqual(50);
  });
  it('Test random 0 - 9999999', (): void => {
    expect(getRandomInt(0, 9999999)).toBeLessThanOrEqual(9999999);
    expect(getRandomInt(0, 9999999)).toBeGreaterThanOrEqual(0);
  });
  it('Test random -50 - 100', (): void => {
    expect(getRandomInt(-50, 100)).toBeLessThanOrEqual(100);
    expect(getRandomInt(-50, 100)).toBeGreaterThanOrEqual(-50);
  });
  it('Test random -100 - -50', (): void => {
    expect(getRandomInt(-100, -50)).toBeLessThanOrEqual(-50);
    expect(getRandomInt(-100, -50)).toBeGreaterThanOrEqual(-100);
  });
});
