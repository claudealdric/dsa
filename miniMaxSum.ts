export const miniMaxSum = (arr: number[] = []): [number, number] => {
  // Throw error if the array length is smaller than 5
  if (arr.length < 5) throw new Error('Array length must be at least 5')

  // Initialize the minSum and maxSum variables
  let minSum: number = Number.POSITIVE_INFINITY
  let maxSum: number = Number.NEGATIVE_INFINITY

  // Find the total sum
  const totalSum: number = arr.reduce((sum, num) => sum + num)

  // Iterate through the array
  for (const num of arr) {
    // Find the current sum
    const currentSum: number = totalSum - num

    // Compare the current sum with the min and max sums
    minSum = Math.min(minSum, currentSum)
    maxSum = Math.max(maxSum, currentSum)
  }

  // Return the min and max sums
  return [minSum, maxSum]
}
