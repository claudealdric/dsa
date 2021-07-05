// Write a function called stringifyNumbers that takes in an object and finds all of the values that are numbers and converts them to strings.
import _ from 'lodash';

function stringifyNumbers(obj: any): any {
  const objCopy = JSON.parse(JSON.stringify(obj));
  for (const key in objCopy) {
    if (Object.prototype.hasOwnProperty.call(objCopy, key)) {
      const value: any = objCopy[key];
      if (typeof value === 'number') {
        objCopy[key] = String(value);
      } else if (typeof value === 'object') {
        objCopy[key] = stringifyNumbers(value);
      }
    }
  }
  return objCopy;
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
};

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
};

console.log(stringifyNumbers(obj));
console.log(_.isEqual(stringifyNumbers(obj), convertedObj));
