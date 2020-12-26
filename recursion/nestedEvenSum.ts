// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects
function nestedEvenSum(obj: any, sum: number = 0): number {
  // Helper function
  const isEven = (num: number): boolean => num % 2 === 0

  // "Recursion"
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      if (typeof value === 'number' && isEven(value)) {
        sum += value
      } else if (typeof value === 'object') {
        sum += nestedEvenSum(value)
      }
    }
  }

  return sum
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
}

// Tests
console.log(nestedEvenSum(obj1) == 6) // 6
console.log(nestedEvenSum(obj2) == 10) // 10
