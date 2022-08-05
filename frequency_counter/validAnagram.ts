function validAnagram(str1: string, str2: string): boolean {
	// Check if the two strings have the same length
	if (str1.length !== str2.length) {
		return false;
	}

	// Convert strings to frequency objects
	const frequencies1: any = convertToFrequencies(str1);
	const frequencies2: any = convertToFrequencies(str2);

	// Check if the two strings consist of the same letters
	for (const char in frequencies1) {
		if (!(char in frequencies2) || frequencies1[char] !== frequencies2[char]) {
			return false;
		}
	}

	return true;
}

function convertToFrequencies(str: string): any {
	const frequencies: any = {};
	for (const char of str) {
		frequencies[char] = (frequencies[char] || 0) + 1;
	}
	return frequencies;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
