import longestSubsequence from './longest-subsequence';

describe('longestSubsequence', () => {
  test.concurrent.each([
    [[1, 9, 87, 3, 10, 4, 20, 2, 45], 4],
    [[36, 41, 56, 35, 91, 33, 34, 92, 43, 37, 42], 5],
  ])('longestSubsequence(%s) => %s', async (input, expected) => {
    expect(longestSubsequence(input)).toBe(expected);
  });
});
