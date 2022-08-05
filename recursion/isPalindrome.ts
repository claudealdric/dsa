// Write a recursive function isPalindrome which returns true if the string passed to it is a palindrome. Otherwise, it returns false.

function isPalindrome(str: string): boolean {
	// Base case
	if (str.length <= 1) {
		return true;
	}

	// Recursion
	// Check if first letter is the same as the last letter
	const firstLetter: string = str[0] as string;
	const lastLetter: string = str[str.length - 1] as string;
	if (firstLetter != lastLetter) {
		// If they are different, return false and stop the recursion
		return false;
	}

	// Generate new string to do the recursion on
	const newStr: string = str.slice(1, str.length - 1);

	// If they are the same, return true and do the recursion on the string with the
	// first and last letters removed
	return true && isPalindrome(newStr);
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('a')); // true
console.log(isPalindrome('')); // true
