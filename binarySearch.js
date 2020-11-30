function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (!(left > right)) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
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
