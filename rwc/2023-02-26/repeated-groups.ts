export function repeatedGroups(numbers: number[]): number[][] {
	const output: number[][] = [];

	let left = 0;
	let right = left + 1;

	while (right <= numbers.length) {
		if (numbers[left] !== numbers[right]) {
			if (right - left > 1) {
				output.push(Array(right - left).fill(numbers[left]));
			}

			left = right;
			right = left + 1;
		} else {
			right += 1;
		}
	}

	return output;
}

