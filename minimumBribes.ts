// Source: https://www.hackerrank.com/challenges/new-year-chaos/problem
export const minimumBribes = (arr: number[]): number | string => {
  // Initialize number of bribes
  let bribes: number = 0

  // Iterate through the array, start with the last one
  for (let i = arr.length - 1; i >= 0; i--) {
    const pos: number = i + 1

    // Check if it's NOT in the right position
    if (arr[i] !== pos) {
      if (i - 1 >= 0 && arr[i - 1] === pos) {
        // If the adjacent neighbor is the correct position,
        // swap the two and increment bribe by 1
        ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
        bribes += 1
      } else if (i - 2 >= 0 && arr[i - 2] === pos) {
        // If the second left adjacent neighbor is the correct position,
        // "reverse" the swap and increment the bribe by 2
        ;[arr[i - 2], arr[i - 1], arr[i]] = [arr[i - 1], arr[i], arr[i - 2]]
        bribes += 2
      } else {
        // If neither of these two cases are true, it's too chaotic
        return 'Too chaotic'
      }
    }
  }

  // Return number of bribes
  return bribes
}
