/* 
Only the first item is considered sorted. Then, for each item in the sequence,
we "insert" that item into the sorted list by swapping it with the item before
it until the item is smaller than the current item. 
*/
export function insertionSort(array) {
	if (array.length < 2) {
		return array;
	}

	const swap = (firstIndex, secondIndex) => {
		[array[firstIndex], array[secondIndex]] = [
			array[secondIndex],
			array[firstIndex],
		];
	};

	for (let i = 1; i < array.length; i += 1) {
		let currentIndex = i;
		while (array[currentIndex] < array[currentIndex - 1]) {
			swap(currentIndex, currentIndex - 1);
			currentIndex -= 1;
		}
	}

	return array;
}

// console.log(insertionSort([5, 3, 1, 2, 4]);
