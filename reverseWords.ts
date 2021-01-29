/**
 * Reverses the order of the words in a phrase or sentence.
 * @param {string} sentence The phrase that is to be reversed.
 * @return {string} The reversed phrase.
 */
function reverseWords(sentence: string): string {
  // Split the string into a words array using the space as the delimiter
  const words: string[] = sentence.split(' ');

  // Build reversed words array, which is going to be the words in reversed order
  const reversedWords: string[] = [];

  // Iterate through the words in the sentence in reverse order
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }

  // Rebuild the reversed words as a string and return
  return reversedWords.join(' ');
}

console.log(reverseWords('Hello darkness my old friend')); // returns 'friend old my darkness Hello'
console.log(reverseWords('A man, a plan, a canal: Panama')); // returns 'Panama canal: a plan, a man, A'
