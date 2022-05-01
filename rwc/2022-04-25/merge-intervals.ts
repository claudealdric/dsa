export type Interval = [number, number];

export function mergeIntervals(intervals: Interval[]): Interval[] {
  const mergedIntervals = [];
  let prevInterval = <Interval>intervals[0];

  const isLastIndex = (idx: number): boolean => idx === intervals.length - 1;
  const intervalsOverlap = (prev: Interval, curr: Interval) => {
    const prevMax = prev[1];
    const currMin = curr[0];
    return currMin <= prevMax;
  };

  for (let i = 1; i < intervals.length; i += 1) {
    const currInterval = <Interval>intervals[i];

    if (intervalsOverlap(prevInterval, currInterval)) {
      const [prevMin, prevMax] = prevInterval;
      const [currMin, currMax] = currInterval;

      const newMin = Math.min(prevMin, currMin);
      const newMax = Math.max(prevMax, currMax);
      prevInterval = [newMin, newMax];
    } else {
      mergedIntervals.push(prevInterval);
      prevInterval = currInterval;
    }

    if (isLastIndex(i)) mergedIntervals.push(prevInterval);
  }

  return mergedIntervals;
}
