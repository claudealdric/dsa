export function removeDuplicates(arr: number[]): number[] {
	if (arr.length < 2) {
		return arr;
	}

	let slow = 0;
	let fast = 0;

	while (fast !== arr.length - 1) {
		if (arr[slow] === arr[fast]) {
			fast += 1;
		} else {
			slow += 1;
			arr[slow] = <number>arr[fast];
		}
	}

	return arr.slice(0, slow + 1);
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2]));
