function binarySearch(arr: number[], num: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (!(left > right)) {
    const mid: number = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (<number>arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 1)); // 0
console.log(binarySearch([1, 2, 3, 4], 2)); // 1
console.log(binarySearch([1, 2, 3, 4], 3)); // 2
console.log(binarySearch([1, 2, 3, 4], 5)); // -1
console.log(binarySearch([1, 2, 3], 1)); // 0
console.log(binarySearch([1, 2, 3], 2)); // 1
console.log(binarySearch([1, 2, 3], 3)); // 2
console.log(binarySearch([1, 2, 3], 4)); // -1
