// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr: number[], targetAvg: number): boolean {
	// Establish left and right pointers
	let left: number = 0;
	let right: number = arr.length - 1;

	// Keep looping and stop once the left and right pointers cross
	while (left < right) {
		// Check the value of the current average
		const currentAvg: number = (<number>arr[left] + <number>arr[right]) / 2;
		// Compare current average to target average
		if (currentAvg === targetAvg) {
			// If current average is equal to the target, return true
			return true;
		} else if (currentAvg > targetAvg) {
			// If current average is bigger than target, move right pointer to the left
			right -= 1;
		} else {
			// If current average is smaller than target, move left pointer to the right
			left += 1;
		}
	}

	// If the loop ends and the average isn't found, return false
	return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
