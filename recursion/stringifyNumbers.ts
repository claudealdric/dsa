// Write a function called stringifyNumbers that takes in an object and finds all of the values that are numbers and converts them to strings.
import _ from 'lodash'

function stringifyNumbers(obj: any): any {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value: any = obj[key]
      if (typeof value === 'number') {
        obj[key] = String(value)
      } else if (typeof value === 'object') {
        obj[key] = stringifyNumbers(value)
      }
    }
  }
  return obj
}

// Test
const obj: any = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
}

const convertedObj: any = {
  num: '1',
  test: [],
  data: {
    val: '4',
    info: {
      isRight: true,
      random: '66',
    },
  },
}

console.log(_.isEqual(stringifyNumbers(obj), convertedObj))
