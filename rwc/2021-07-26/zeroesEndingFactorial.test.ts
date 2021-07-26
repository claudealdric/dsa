import zeroesEndingFactorial from './zeroesEndingFactorial';

describe('zeroesEndingFactorial()', () => {
  const cases = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [2, 10],
    [2, 11],
    [2, 12],
    [2, 13],
    [2, 14],
    [3, 15],
    [3, 16],
    [3, 17],
    [3, 18],
    [3, 19],
    [4, 20],
    [4, 21],
    [4, 22],
    [4, 23],
    [4, 24],
    [6, 25],
    [16, 73],
    [24, 100],
  ];

  test.each(cases)('returns %s when passed %s', (expected, number) => {
    expect(zeroesEndingFactorial(number)).toBe(expected);
  });
});
