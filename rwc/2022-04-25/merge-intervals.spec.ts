import { Interval, mergeIntervals } from './merge-intervals';

describe('mergeIntervals', () => {
  const testCases: Array<[Interval[], Interval[]]> = [
    [
      [
        [1, 6],
        [8, 10],
        [15, 20],
      ],
      [
        [1, 4],
        [2, 6],
        [8, 10],
        [15, 20],
      ],
    ],
    [
      [[1, 7]],
      [
        [1, 2],
        [2, 7],
      ],
    ],
    [
      [
        [1, 2],
        [3, 7],
      ],
      [
        [1, 2],
        [3, 7],
      ],
    ],
    [[], []],
    [[[1, 2]], [[1, 2]]],
  ];
  test.concurrent.each(testCases)(
    'merges intervals that overlap',
    async (expected, input) => {
      expect(mergeIntervals(input)).toStrictEqual(expected);
    }
  );
});
