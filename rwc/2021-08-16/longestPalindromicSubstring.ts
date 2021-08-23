/** Add a filler character between each character of a string. */
const addFillerCharacters = (string: string, fillerChar = '|'): string =>
  string.split('').join(fillerChar);

/** Returns the value and index of the max element in a number array. */
const getValueAndIndexOfMaxElement = (numbers: number[]): [number, number] => {
  let maxNumber = Number.NEGATIVE_INFINITY;
  let maxIndex = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    const currentNumber = numbers[i] as number;

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
      maxIndex = i;
    }
  }

  return [maxNumber, maxIndex];
};

const quadraticSolution = (s: string): string => {
  // The max radius of each palindromic substring centered on the corresponding index
  const palindromicSubstringRadii: number[] = new Array(s.length).fill(0);

  // Add filler character between each character of the original string
  // to handle both even and odd length cases
  const fillerChar = '|';
  const modifiedStr = addFillerCharacters(s, fillerChar);

  // Find the longest radius of the palindromic substring centered on each character
  for (let center = 0; center < modifiedStr.length; center += 1) {
    let radius = 0;

    while (
      center - radius - 1 >= 0 && // left pointer lookahead
      center + radius + 1 < modifiedStr.length && // right pointer lookahead
      modifiedStr[center - radius - 1] === modifiedStr[center + radius + 1]
    ) {
      radius += 1;
    }

    palindromicSubstringRadii[center] = radius;
  }

  const [maxRadius, maxRadiusIndex] = getValueAndIndexOfMaxElement(
    palindromicSubstringRadii
  );

  const longestPalindromicSubstring = modifiedStr
    .slice(maxRadiusIndex - maxRadius, maxRadiusIndex + maxRadius + 1)
    .split('')
    .filter((char) => char !== fillerChar)
    .join('');

  return longestPalindromicSubstring;
};

export default quadraticSolution;
