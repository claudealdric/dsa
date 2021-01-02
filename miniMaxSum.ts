export const miniMaxSum = (arr: number[] = []): [number, number] => {
  // Throw error if the array length is not equal to 5
  if (arr.length !== 5) throw new Error('Array length must be equal to 5')

  // Initialize the minSum and maxSum variables
  let minSum: number = Number.POSITIVE_INFINITY
  let maxSum: number = Number.NEGATIVE_INFINITY

  // Find the total sum of the numbers in the array
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
