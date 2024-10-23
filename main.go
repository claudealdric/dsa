package main

import (
	"fmt"

	"github.com/claudealdric/dsa/algorithms"
)

func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}

	result := algorithms.SpiralOrder(matrix)
	fmt.Println(result) // Output: [1 4 7 8 9 6 3 2 5]
}
