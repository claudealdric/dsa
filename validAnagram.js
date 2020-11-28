function validAnagram(str1, str2) {
  // Check if the two strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to frequency objects
  const frequencies1 = convertToFrequencies(str1);
  const frequencies2 = convertToFrequencies(str2);

  // Check if the two strings consist of the same letters
  for (const char in frequencies1) {
    if (!(char in frequencies2) || frequencies1[char] !== frequencies2[char]) {
      return false;
    }
  }

  return true;
}

function convertToFrequencies(string) {
  const frequencies = {};
  for (const char of string) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  return frequencies;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
