const isPalindrome = (str: string): boolean => {
  // Helper function
  const isLetter = (char: string): boolean =>
    char.length === 1 && char.toLowerCase() !== char.toUpperCase();

  // Pointer variables
  let left: number = 0;
  let right: number = str.length - 1;

  while (left < right) {
    // Move pointers until a letter is found
    while (!isLetter(<string>str[left]) && left < right) {
      left += 1;
    }
    while (!isLetter(<string>str[right]) && left < right) {
      right -= 1;
    }

    if (left >= right) break;

    if (
      (str[left] as string).toLowerCase() !==
      (str[right] as string).toLowerCase()
    )
      return false;
    left += 1;
    right -= 1;
  }

  return true;
};

console.log(isPalindrome('Amore, Roma') === true);
console.log(isPalindrome('A slut nixes sex in Tulsa.') === true);
console.log(isPalindrome('no devil lived on') === true);
console.log(isPalindrome('aa') === true);
console.log(isPalindrome('a') === true);
console.log(isPalindrome('') === true);
console.log(isPalindrome('"') === true);
console.log(isPalindrome('""a"') === true);
console.log(isPalindrome('not a palindrome') === false);
console.log(isPalindrome('banana') === false);

export {};
