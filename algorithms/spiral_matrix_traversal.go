package algorithms

func SpiralOrder(matrix [][]int) []int {
	if len(matrix) == 0 {
		return []int{}
	}

	rows := len(matrix)
	cols := len(matrix[0])
	result := make([]int, 0, rows*cols)

	// Define boundaries
	top, left, bottom, right := 0, 0, rows-1, cols-1

	for top <= bottom && left <= right {
		// Traverse down the left column
		for i := top; i <= bottom; i++ {
			result = append(result, matrix[i][left])
		}
		left++

		// Traverse right along the bottom row
		for j := left; j <= right; j++ {
			result = append(result, matrix[bottom][j])
		}
		bottom--

		// Make sure there's a remaining row to traverse up and right
		if top <= bottom {
			// Traverse up the right column
			for i := bottom; i >= top; i-- {
				result = append(result, matrix[i][right])
			}
			right--
		}

		// Make sure there's a remaining column to traverse left
		if left <= right {
			// Traverse left along the top row
			for j := right; j >= left; j-- {
				result = append(result, matrix[top][j])
			}
			top++
		}
	}

	return result
}
