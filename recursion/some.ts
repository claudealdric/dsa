// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise, it returns false.

type Callback = (val: number) => boolean;

function someRecursive(arr: number[], cb: Callback): boolean {
  // Base case
  if (arr.length === 1) {
    return cb(arr[0] as number);
  } else if (arr.length < 1) {
    return false;
  }

  // Recursion
  const currentNumber: number = arr[0] ?? 0;

  // Check what the callback returns with the current number
  if (cb(currentNumber)) {
    // If the callback returns true, return true and stop the recursion
    return true;
  }

  // Otherwise, return false and continue with the recursion on the new, smaller array
  const newArr: number[] = arr.slice(1);
  return false || someRecursive(newArr, cb);
}

const isOdd: Callback = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
console.log(someRecursive([4, 6, 8, 11], (val) => val > 10)); // true
console.log(someRecursive([4], isOdd)); // false
console.log(someRecursive([5], isOdd)); // true
console.log(someRecursive([], isOdd)); // false
