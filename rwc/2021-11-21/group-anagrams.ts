function getLetterComposition(word: string): Record<string, number> {
  const letterComposition: Record<string, number> = {};

  for (let i = 0; i < word.length; i += 1) {
    const letter = word[i] as string;
    letterComposition[letter] = letterComposition[letter] ?? 0 + 1;
  }

  return letterComposition;
}

function findLetterCompositionIndexInArray(
  letterComposition: Record<string, number>,
  arr: Record<string, number>[]
): number {
  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i] as Record<string, number>;

    const letterCompositionsMatch = Object.keys(letterComposition).every(
      (letter) =>
        letter in current && letterComposition[letter] === current[letter]
    );

    if (letterCompositionsMatch) {
      return i;
    }
  }

  return -1;
}

function groupAnagrams(words: string[]): string[][] {
  const letterCompositions: Record<string, number>[] = [];
  const anagramGroups: string[][] = [];

  // Loop through each word in the word list
  words.forEach((word) => {
    // For each word...
    // Create word breakdown
    const letterComposition = getLetterComposition(word);

    // Check if the letter breakdown is already present in the array
    const letterCompositionIndex = findLetterCompositionIndexInArray(
      letterComposition,
      letterCompositions
    );

    // If it is not yet present...
    if (letterCompositionIndex === -1) {
      // Add it to the dictionaries array
      letterCompositions.push(letterComposition);

      // Create new anagram group
      anagramGroups.push([word]);
    } else {
      (anagramGroups[letterCompositionIndex] as string[]).push(word);
    }
  });

  return anagramGroups;
}

console.log(groupAnagrams(['eat', 'tea', 'ten', 'poop', 'net', 'ate']));
