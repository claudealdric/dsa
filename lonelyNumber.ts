/* 
Given three numbers, return their product. But, if one of the numbers is the same as another, it does not count: If two numbers are similar, return the lonely number. If all numbers are same, return 1.
*/

const lonelyNumber = (...numbers: number[]): number => {
  const frequencies: Record<number, number> = {};

  numbers.forEach(
    (number) => (frequencies[number] = (frequencies[number] ?? 0) + 1)
  );

  return Object.keys(frequencies).reduce((accumulator, numberStr) => {
    const number = parseInt(numberStr, 10);
    accumulator *= frequencies[number] === 1 ? number : 1;
    return accumulator;
  }, 1);
};

console.log(lonelyNumber(1, 2, 3) === 6);
console.log(lonelyNumber(6, 6, 4) === 4);
console.log(lonelyNumber(7, 7, 7) === 1);
