package algorithms

import (
	"slices"
	"testing"
)

func TestSpiralOrder(t *testing.T) {
	tests := []struct {
		matrix [][]int
		want   []int
	}{
		{
			matrix: [][]int{
				{1, 2, 3},
				{4, 5, 6},
				{7, 8, 9},
			},
			want: []int{1, 4, 7, 8, 9, 6, 3, 2, 5},
		},
		{
			matrix: [][]int{{1}},
			want:   []int{1},
		},
		{
			matrix: [][]int{
				{1, 2, 3},
				{4, 5, 6},
			},
			want: []int{1, 4, 5, 6, 3, 2},
		},
		{
			matrix: [][]int{
				{1, 2},
				{3, 4},
				{5, 6},
			},
			want: []int{1, 3, 5, 6, 4, 2},
		},
		{
			matrix: [][]int{},
			want:   []int{},
		},
	}

	for _, test := range tests {
		got := SpiralOrder(test.matrix)
		if !slices.Equal(got, test.want) {
			t.Errorf("got %v, want %v", got, test.want)
		}
	}
}
