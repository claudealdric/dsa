import quadraticSolution from './longestPalindromicSubstring';

describe('longestPalindromicSubstring', () => {
  test.each([
    ['aba', 'babad'],
    ['baab', 'baab'],
    ['baxabaxab', 'abaxabaxabb'],
    ['baxabybaxab', 'abaxabaxabybaxabyb'],
  ])('returns "%s" with the arg "%s"', (expectedValue, stringArg) => {
    expect(quadraticSolution(stringArg)).toBe(expectedValue);
  });
});
