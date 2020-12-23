function maxSubarraySum(arr: number[], n: number): number | null {
  // Handle edge case: n is greater than array length
  if (arr.length < n) {
    return null;
  }

  let tempSum: number = arr.slice(0, n).reduce((a, b) => a + b);
  let maxSum: number = tempSum;

  for (let i = n; i < arr.length; ++i) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
