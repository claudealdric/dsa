import largestSubarraySum from './largest-subarray-sum';

describe('largestSubarraySum', () => {
  test('returns the correct size subarray with the largest sum', () => {
    const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
    const size = 3;
    const expected = [9, 2, 6];
    expect(largestSubarraySum(numbers, size)).toStrictEqual(expected);
  });
});
