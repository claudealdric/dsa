import containedItems from './contained-items';

describe('containedItems', () => {
  const inputStr = '|**|*|*';
  const testCases: Array<[number, string, number, number]> = [
    [0, inputStr, 1, 1],
    [0, inputStr, 1, 2],
    [0, inputStr, 1, 3],
    [0, inputStr, 4, 7],
    [1, inputStr, 1, 7],
    [1, inputStr, 2, 6],
    [2, inputStr, 0, 5],
    [3, inputStr, 0, 6],
  ];

  test.concurrent.each(testCases)(
    'returns %s for the input (%s, %s, %s)',
    async (expected, str, start, end) => {
      expect(containedItems(str, start, end)).toBe(expected);
    }
  );
});
