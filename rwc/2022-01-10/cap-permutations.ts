function convertToBinaryString(num: number): string {
	return num.toString(2);
}

function getBinaryStrings(str: string): string[] {
	const binaryStrings: string[] = [];

	for (let i = 0; i < 2 ** str.length; i += 1) {
		let binaryString = convertToBinaryString(i);
		binaryString = binaryString.padStart(str.length, '0');
		binaryStrings.push(binaryString);
	}

	return binaryStrings;
}

function getPermutations(str: string, binaryStrings: string[]): Set<string> {
	const permutations: Set<string> = new Set();
	const chars = str.split('');

	binaryStrings.forEach((binaryString) => {
		const shouldCapitalize = binaryString.split('').map(Number);
		const newChars = chars.map((char, i) =>
			shouldCapitalize[i] ? char.toUpperCase() : char.toLowerCase()
		);
		permutations.add(newChars.join(''));
	});

	return permutations;
}

export default function capPermutations(str: string): string[] {
	const binaryStrings = getBinaryStrings(str);
	const permutations = getPermutations(str, binaryStrings);
	return Array.from(permutations);
}
