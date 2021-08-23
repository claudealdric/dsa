/*
  Problem: Given a string, return the longest palindromic substring in s.
*/

/** Add a filler character between each character of a string. */
const addFillerCharacters = (string: string, fillerChar = '|'): string =>
  string.split('').join(fillerChar);

/** Returns the value and index of the max element in a number array. */
const getValueAndIndexOfMaxNumber = (numbers: number[]): [number, number] => {
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

export const quadraticSolution = (s: string): string => {
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

  const [maxRadius, maxRadiusIndex] = getValueAndIndexOfMaxNumber(
    palindromicSubstringRadii
  );

  const longestPalindromicSubstring = modifiedStr
    .slice(maxRadiusIndex - maxRadius, maxRadiusIndex + maxRadius + 1)
    .split('')
    .filter((char) => char !== fillerChar)
    .join('');

  return longestPalindromicSubstring;
};

export const linearSolution = (s: string): string => {
  // The max radius of each palindromic substring centered on the corresponding index
  const palindromicSubstringRadii: number[] = new Array(s.length).fill(0);

  // Add filler character between each character of the original string
  // to handle both even and odd length cases
  const fillerChar = '|';
  const modifiedStr = addFillerCharacters(s, fillerChar);

  // Initialize center and radius, since we can't optimize yet
  let center = 0;
  let radius = 0;

  while (center < modifiedStr.length) {
    // Find the longest palindromic substring radius for the current center
    while (
      center - radius - 1 >= 0 && // left pointer lookahead
      center + radius + 1 < modifiedStr.length && // right pointer lookahead
      modifiedStr[center - radius - 1] === modifiedStr[center + radius + 1]
    ) {
      radius += 1;
    }

    palindromicSubstringRadii[center] = radius;

    const oldCenter = center;
    const oldRadius = radius;
    center += 1;

    // Apply optimizations when the new center is within the old palindrome
    while (center <= oldRadius + oldCenter) {
      const mirroredCenter = oldCenter - (center - oldCenter);
      const maxMirroredRadius = oldCenter + oldRadius - center;

      if (
        (palindromicSubstringRadii[mirroredCenter] as number) <
        maxMirroredRadius
      ) {
        // If the mirrored palindrome is fully contained within the old palindrome,
        // then the radius of the new center is the same as the radius of the mirrored center
        palindromicSubstringRadii[center] = palindromicSubstringRadii[
          mirroredCenter
        ] as number;
        center += 1;
      } else if (
        (palindromicSubstringRadii[mirroredCenter] as number) >
        maxMirroredRadius
      ) {
        // If the mirrored palindrome extends beyond the left boundary of the old palindrome,
        // then the radius of the new center cannot extend beyond the right boundary
        // of the old palindrome
        palindromicSubstringRadii[center] = maxMirroredRadius;
        center += 1;
      } else {
        // If the mirrored palindrome extends exactly to the left boundary of the old palindrome,
        // then the radius of the new center is at least the radius of the mirrored center.
        // The character(s) after the old palindrome might make the new palindrome longer.
        radius = palindromicSubstringRadii[mirroredCenter] as number;
        break;
      }
    }
  }

  const [maxRadius, maxRadiusIndex] = getValueAndIndexOfMaxNumber(
    palindromicSubstringRadii
  );

  const longestPalindromicSubstring = modifiedStr
    .slice(maxRadiusIndex - maxRadius, maxRadiusIndex + maxRadius + 1)
    .split('')
    .filter((char) => char !== fillerChar)
    .join('');

  return longestPalindromicSubstring;
};
