export default function longestSubsequence(numbers: number[]): number {
  let maxCount = 1;
  const seen = {} as Record<number, boolean>;

  numbers.forEach((number) => {
    seen[number] = false;
  });

  numbers.forEach((number) => {
    let count = 1;

    if (!seen[number]) {
      seen[number] = true;

      let lowerBound = number;
      let upperBound = number;

      while (lowerBound - 1 in seen) {
        count += 1;
        seen[lowerBound - 1] = true;
        lowerBound -= 1;
      }

      while (upperBound + 1 in seen) {
        count += 1;
        seen[upperBound + 1] = true;
        upperBound += 1;
      }

      maxCount = Math.max(count, maxCount);
    }
  });

  return maxCount;
}
