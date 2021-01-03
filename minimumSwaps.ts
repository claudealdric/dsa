// Source: https://www.hackerrank.com/challenges/minimum-swaps-2/problem
export const minimumSwaps = (arr: number[]): number => {
  // Instantiate swaps
  let swaps: number = 0

  // Create mapping of index <-> value using objects
  const indexToValue: any = {}
  const valueToIndex: any = {}
  for (let i = 0; i < arr.length; ++i) {
    indexToValue[i] = arr[i]
    valueToIndex[arr[i]] = i
  }

  // Iterate through each index
  for (let currentIndex = 0; currentIndex < arr.length; ++currentIndex) {
    // If index does not contain proper value
    if (arr[currentIndex] !== currentIndex + 1) {
      // Swap the current value with the proper one with the help of the map
      const targetIndex: number = valueToIndex[currentIndex + 1]
      ;[arr[currentIndex], arr[targetIndex]] = [
        arr[targetIndex],
        arr[currentIndex],
      ]
      swaps += 1

      // Update the map values
      ;[indexToValue[currentIndex], indexToValue[targetIndex]] = [
        arr[currentIndex],
        arr[targetIndex],
      ]
      ;[valueToIndex[arr[currentIndex]], valueToIndex[arr[targetIndex]]] = [
        currentIndex,
        targetIndex,
      ]
    }
  }

  // Return swaps
  return swaps
}
