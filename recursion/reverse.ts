// Write a recursive function called reverse which accepts a string and returns a new string in reverse

function reverse(str: string): string {
	// Base case
	if (str.length <= 1) {
		return str;
	}

	// Recursion
	const lastChar: string = str[str.length - 1] as string;
	const newStr: string = str.slice(0, str.length - 1);
	return lastChar + reverse(newStr);
}

console.log(reverse('awesome')); // emosewa
console.log(reverse('rithmschool')); // loohcsmhtir
console.log(reverse('')); // ''
console.log(reverse('a')); // a
