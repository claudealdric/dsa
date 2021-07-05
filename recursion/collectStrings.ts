// Write a function called collectStrings that accepts an object and returns an array of all the values in the object that have a type of string.
import _ from 'lodash';

function collectStrings(obj: any): string[] {
  const arr: string[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value: any = obj[key];
      if (typeof value === 'string') {
        arr.push(value);
      } else if (typeof value === 'object') {
        arr.push(...collectStrings(value));
      }
    }
  }

  return arr;
}

// Tests
let obj: any = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};
console.log(_.isEqual(collectStrings(obj), ['foo', 'bar', 'baz']));

obj = {
  outer: 'outer',
  inner: {
    num: 1,
    bool: true,
    str: 'yes',
  },
};
console.log(_.isEqual(collectStrings(obj), ['outer', 'yes']));

obj = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};
console.log(_.isEqual(collectStrings(obj), ['yup']));

obj = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};
console.log(_.isEqual(collectStrings(obj), ['ball', 'car']));
