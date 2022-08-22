/*
For each pass, we use a pointer to point at the first element of the list. For 
each cycle, we compare it to the next element in the list and swap them if the 
current item is greater, then move the pointer by one until it reaches the end 
of the list. Repeat this process until the list becomes sorted.
*/
export function bubbleSort(array) {
	for (let i = 0; i < array.length - 1; i += 1) {
		let hasSwapped = false;

		for (let j = 0; j < array.length - 1 - i; j += 1) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				hasSwapped = true;
			}
		}

		if (!hasSwapped) {
			break;
		}
	}

	return array;
}

// console.log(bubbleSort([5, 3, 1, 2, 4]));
