function sameFrequency(num1: number, num2: number): boolean {
	const num1Frequencies: any = {};

	for (const digit of String(num1)) {
		num1Frequencies[digit] = (num1Frequencies[digit] || 0) + 1;
	}

	for (const digit of String(num2)) {
		if (!(digit in num1Frequencies) || num1Frequencies[digit] === 0) {
			return false;
		} else {
			num1Frequencies[digit] -= 1;
		}
	}

	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(122333, 333221)); // true
console.log(sameFrequency(122333, 111223)); // false
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(12345, 53241)); // true
console.log(sameFrequency(22, 222)); // false
