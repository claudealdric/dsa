function getLetterCounts(word: string): Record<string, number> {
	const letterCounts: Record<string, number> = {};

	for (let i = 0; i < word.length; i += 1) {
		const letter = (<string>word[i]).toLowerCase();
		letterCounts[letter] = letterCounts[letter] ?? 0 + 1;
	}

	return letterCounts;
}

function mapLetterCountsToString(letterCounts: Record<string, number>): string {
	const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const letterCountsFromAToZ: number[] = [];

	alphabet.forEach((letter) =>
		letterCountsFromAToZ.push(letterCounts[letter] ?? 0)
	);

	return letterCountsFromAToZ.join(',');
}

function groupAnagrams(words: string[]): string[][] {
	const anagramGroups: Record<string, string[]> = {};

	words.forEach((word) => {
		const letterCounts = getLetterCounts(word);
		const letterCountsKey = mapLetterCountsToString(letterCounts);

		if (!(letterCountsKey in anagramGroups)) {
			anagramGroups[letterCountsKey] = [];
		}

		(<string[]>anagramGroups[letterCountsKey]).push(word);
	});

	return Object.values(anagramGroups);
}

console.log(groupAnagrams(['eat', 'tea', 'ten', 'poop', 'net', 'ate']));
