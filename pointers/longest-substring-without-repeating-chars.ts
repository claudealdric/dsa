export function longestSubstring(str: string): string {
	if (str.length < 2) {
		return str;
	}

	let left = 0;
	let right = 0;
	let longestLength = 0;
	let longestIndex = 0;
	const seen = new Set<string>();

	while (right < str.length) {
		if (!seen.has(<string>str[right])) {
			seen.add(<string>str[right]);
			right += 1;
		} else {
			while (seen.has(<string>str[right])) {
				seen.delete(<string>str[left]);
				left += 1;
			}
		}

		if (seen.size > longestLength) {
			longestLength = seen.size;
			longestIndex = left;
		}
	}

	return str.slice(longestIndex, longestIndex + longestLength);
}

console.log(longestSubstring('abcdbea'));
