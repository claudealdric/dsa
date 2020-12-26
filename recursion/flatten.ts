// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

type ArrayOfArrays = Array<number | ArrayOfArrays>

function flatten(arr: ArrayOfArrays) {
  let flattenedArr: number[] = []

  for (const elem of arr) {
    if (typeof elem === 'number') {
      flattenedArr.push(elem)
    } else if (Array.isArray(elem)) {
      flattenedArr = flattenedArr.concat(flatten(elem))
    }
  }

  return flattenedArr
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
