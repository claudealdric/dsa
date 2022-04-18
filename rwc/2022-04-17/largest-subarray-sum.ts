export default function largestSubarraySum(
  numbers: number[],
  size: number
): number[] {
  let maxStartingIndex = 0;
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = numbers
    .slice(0, size - 1)
    .reduce((previous, current) => previous + current);
  let previousNumber = 0;

  for (let i = 0; i <= numbers.length - size; i += 1) {
    const currentNumber = <number>numbers[i + 2];
    currentSum = currentSum - previousNumber + currentNumber;
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStartingIndex = i;
    }
    previousNumber = <number>numbers[i];
  }

  return numbers.slice(maxStartingIndex, maxStartingIndex + size);
}
