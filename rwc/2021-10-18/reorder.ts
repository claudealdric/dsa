export function reorderCheck<T>(elements: T[], indices: number[]): T[] {
	const reorderedArray = Array(elements.length);

	for (let i = 0; i < elements.length; i += 1) {
		const element = elements[i];
		const index = indices[i] as number;
		reorderedArray[index] = element;
	}

	return reorderedArray;
}

export function reorder<T>(elements: T[], indices: number[]): T[] {
	// Start with checking the 0th element
	let currentIndex = 0;

	for (let iteration = 0; iteration < elements.length - 1; iteration += 1) {
		// Keep a while loop counter
		let whileIterations = 0;
		let targetIndex = indices[currentIndex] as number;

		while (currentIndex === targetIndex) {
			// Move to the next element if the current element is already in the right order
			// Let the next element be the first element if the previous element is the last
			currentIndex = (currentIndex + 1) % elements.length;
			targetIndex = indices[currentIndex] as number;

			whileIterations += 1;

			if (whileIterations + 1 >= elements.length) {
				// Return the elements array if the order has been correct for one complete loop
				return elements;
			}
		}

		// Perform reordering swaps
		[elements[currentIndex], elements[targetIndex]] = [
			elements[targetIndex] as T,
			elements[currentIndex] as T,
		];

		[indices[currentIndex], indices[targetIndex]] = [
			indices[targetIndex] as number,
			indices[currentIndex] as number,
		];
	}

	return elements;
}
