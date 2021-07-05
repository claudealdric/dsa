const countUniqueValues = (arr: number[]): number => {
  let uniqueValues: number = 0;
  let previousValue: number | undefined;

  for (const num of arr) {
    if (num !== previousValue) uniqueValues += 1;
    previousValue = num;
  }

  return uniqueValues;
};

console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -2, -1, 0, 1])); // 4
