// Prompt: write a function to find the longest common prefix string in an array of strings

const longestPrefix = (words: string[]): string => {
  // Determine the number of maximum iterations within a particular string
  // (this would be the length of the shortest string)
  const maxPrefixLength = Math.min(...words.map((word) => word.length));

  let charIndex = 0;
  let wordIndex = 1;
  let allCharsAtIndexMatch = true;

  // Iterate through the characters of each word in the array
  while (charIndex < maxPrefixLength && allCharsAtIndexMatch) {
    // If the first word serves as the basis, then we don't need to check it
    wordIndex = 1;
    const currentChar = (words[0] as string)[charIndex];

    while (wordIndex < words.length && allCharsAtIndexMatch) {
      const currentWord = words[wordIndex] as string;

      // If the characters in the current index don't match, exit early
      allCharsAtIndexMatch = currentWord[charIndex] === currentChar;

      // Else, continue iterating through the words
      wordIndex += 1;
    }

    // If all characters at an index still match, check for the next prefix length
    if (allCharsAtIndexMatch) {
      charIndex += 1;
    }
  }

  // Return the longest prefix from the iteration
  return (words[0] as string).slice(0, charIndex);
};

export default longestPrefix;
