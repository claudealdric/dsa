// Write a function called sum_zero that accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(
  intArray: number[],
  targetSum: number = 0
): [number, number] | undefined {
  // Approach: have two pointers and go from the outside in

  // Assign the left and right pointers (indices)
  let leftPointer: number = 0;
  let rightPointer: number = intArray.length - 1;

  // Compare the two numbers (until the two pointers meet)
  while (leftPointer < rightPointer) {
    const leftNumber: number = intArray[leftPointer];
    const rightNumber: number = intArray[rightPointer];
    const currentSum: number = leftNumber + rightNumber;

    if (currentSum === targetSum) {
      // If the sum is equal to the target, return the pair
      return [leftNumber, rightNumber];
    } else if (currentSum > targetSum) {
      // If the sum is greater than the target, move the right pointer to the left
      rightPointer -= 1;
    } else {
      // If the sum is less than the target, move the left pointer to the right
      leftPointer += 1;
    }
  }
}

// Test cases
console.log(sumZero([-10, -7, 3, 5, 7, 9, 13])); // [-7, 7]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 4])); // [-2, 2]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([-2, 2, 3])); // [-2, 2]
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-2, 2])); // [-2, 2]
console.log(sumZero([])); // undefined
