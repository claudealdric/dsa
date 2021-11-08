package reorder

func Reorder(elements []string, indices []int) []string {
	currentIndex := 0

	for i := 0; i < len(elements)-1; i++ {
		// Keep a while loop counter
		whileIterations := 0
		targetIndex := indices[currentIndex]

		for currentIndex == targetIndex {
			// Move to the next element if the current element is already in the right order
			// Let the next element be the first element if the previous element is the last
			currentIndex = (currentIndex + 1) % len(elements)
			targetIndex = indices[currentIndex]

			whileIterations++

			if whileIterations+1 >= len(elements) {
				// Return the elements array if the order has been correct for one complete loop
				return elements
			}
		}

		// Perform reordering swaps
		elements[currentIndex], elements[targetIndex] = elements[targetIndex], elements[currentIndex]
		indices[currentIndex], indices[targetIndex] = indices[targetIndex], indices[currentIndex]
	}

	return elements
}
