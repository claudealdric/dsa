/* Given a direction and a number of columns, write a function that outputs an arrow of asterisks (see the pattern in the examples below)!
 *
 * printArrow('right', 3)
 * Output:
 * *
 *  *
 *   *
 *  *
 * *
 *
 * printArrow('left', 5)
 * Output:
 *     *
 *    *
 *   *
 *  *
 * *
 *  *
 *   *
 *    *
 *     *
 */

const printAsterisk = (spaces: number): void => {
  console.log(' '.repeat(spaces) + '*');
};

const printBackslash = (size: number, offset: number = 0): void => {
  for (let spaces = 0; spaces < size; spaces += 1) {
    printAsterisk(spaces + offset);
  }
};

const printSlash = (size: number): void => {
  for (let spaces = size - 1; spaces >= 0; spaces -= 1) {
    printAsterisk(spaces);
  }
};

const printArrow = (direction: 'left' | 'right', size: number): void => {
  switch (direction) {
    case 'right':
      printBackslash(size);
      printSlash(size - 1);
      break;
    case 'left':
      printSlash(size);
      printBackslash(size - 1, 1);
      break;
    default:
      throw new Error('Direction not found');
  }
};

// Test cases
printArrow('left', 5);
printArrow('right', 3);

printArrow('left', 2);
printArrow('right', 6);
printArrow('left', 1);
printArrow('left', 0);
