// Source: https://www.hackerrank.com/challenges/minimum-swaps-2/problem
export const minimumSwaps = (arr: number[]): number => {
  // Instantiate swaps
  let swaps: number = 0

  // Create mapping of index <-> value using objects
  const idxToVal: any = {}
  const valToIdx: any = {}
  for (let i = 0; i < arr.length; ++i) {
    idxToVal[i] = arr[i]
    valToIdx[arr[i]] = i
  }

  // Iterate through each index
  for (let current = 0; current < arr.length; ++current) {
    // If index does not contain proper value
    if (arr[current] !== current + 1) {
      // Swap the current value with the proper one with the help of the map
      const target: number = valToIdx[current + 1]
      ;[arr[current], arr[target]] = [arr[target], arr[current]]
      swaps += 1

      // Update the map values
      ;[idxToVal[current], idxToVal[target]] = [arr[current], arr[target]]
      ;[valToIdx[arr[current]], valToIdx[arr[target]]] = [current, target]
    }
  }

  // Return swaps
  return swaps
}
