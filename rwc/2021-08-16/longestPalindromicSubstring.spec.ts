import {
  linearSolution,
  quadraticSolution,
} from './longestPalindromicSubstring';

describe('longestPalindromicSubstring', () => {
  const testCases = [
    ['aba', 'babad'],
    ['baab', 'baab'],
    ['baxabaxab', 'abaxabaxabb'],
    ['baxabybaxab', 'abaxabaxabybaxabyb'],
  ];

  describe('quadratic time complexity solution', () => {
    test.each(testCases)(
      'returns "%s" with the arg "%s"',
      (expectedValue, stringArg) => {
        expect(quadraticSolution(stringArg)).toBe(expectedValue);
      }
    );
  });

  describe('linear time complexity solution', () => {
    test.each(testCases)(
      'returns "%s" with the arg "%s"',
      (expectedValue, stringArg) => {
        expect(linearSolution(stringArg)).toBe(expectedValue);
      }
    );
  });
});
