/* 
During each cycle, we find the smallest item from the unsorted pile and add it 
to the sorted pile.
*/
function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i += 1) {
		let minIndex = i;

		for (let j = i; j < array.length; j += 1) {
			if (array[j] < array[minIndex]) {
				minIndex = j;
			}
		}

		if (i !== minIndex) {
			[array[i], array[minIndex]] = [array[minIndex], array[i]];
		}
	}

	return array;
}

console.log(selectionSort([1, 3, 5, 2, 4]));
