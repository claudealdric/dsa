// Write a function called isSubsequence, which takes in two strings and checks whether the charaters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(substring, string) {
  // Create pointer for the substring
  let idx = 0;

  // Loop through the string
  for (const letter of string) {
    // If letter matches the current letter of substring, move substring pointer to the right
    if (letter === substring[idx]) idx += 1;
    // Stop iterating if substring has been found
    if (idx === substring.length) break;
  }

  // Check substring pointer position
  // If substring pointer isn't at the last position, return false
  // Else, return true
  return idx === substring.length ? true : false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'string')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
