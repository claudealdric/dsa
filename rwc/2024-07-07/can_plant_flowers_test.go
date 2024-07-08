package main

import "testing"

func TestCanPlantFlowers(t *testing.T) {
	tests := []struct {
		plantedFlowers []int
		count          int
		want           bool
	}{
		{[]int{0}, 1, true},
		{[]int{0}, 2, false},
		{[]int{1}, 1, false},
		{[]int{0, 0}, 1, true},
		{[]int{0, 0}, 2, false},
		{[]int{1, 0}, 1, false},
		{[]int{0, 1}, 1, false},
		{[]int{0, 0, 0}, 1, true},
		{[]int{0, 0, 0}, 2, true},
		{[]int{0, 0, 0}, 3, false},
		{[]int{1, 0, 1}, 1, false},
		{[]int{0, 0, 0, 0}, 1, true},
		{[]int{0, 0, 0, 0}, 2, true},
		{[]int{0, 0, 0, 0}, 3, false},
		{[]int{0, 0, 0, 0, 0}, 1, true},
		{[]int{0, 0, 0, 0, 0}, 2, true},
		{[]int{0, 0, 0, 0, 0}, 3, true},
		{[]int{0, 0, 0, 0, 0}, 4, false},
		{[]int{1, 0, 0, 0, 1}, 1, true},
		{[]int{1, 0, 0, 0, 1}, 2, false},
		{[]int{1, 0, 1, 0, 1}, 1, false},
	}

	for _, tt := range tests {
		got := CanPlantFlowers(tt.plantedFlowers, tt.count)
		if got != tt.want {
			t.Errorf(
				"CanPlantFlowers(%v, %d)\n wanted: %t; got: %t",
				tt.plantedFlowers, tt.count, tt.want, got,
			)
		}
	}
}
