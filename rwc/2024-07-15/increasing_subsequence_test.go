package main

import "testing"

func TestIncreasingSubsequence(t *testing.T) {
	largeSlice := make([]int, 1000)
	for i := range largeSlice {
		largeSlice[i] = i
	}

	tests := []struct {
		nums []int
		want int
	}{
		{[]int{3, 1, 0, 0, 3, 0, 5, 0, 7, 0, 0, 9, 10}, 6},
		{[]int{10, 9, 2, 3, 7, 101, 18}, 4},
		{[]int{4, 4, 4, 4, 3}, 1},
		{[]int{1}, 1},
		{[]int{}, 0},
		{largeSlice, len(largeSlice)},
	}

	for _, tt := range tests {
		got := IncreasingSubsequence(tt.nums)
		if got != tt.want {
			t.Errorf(
				"IncreasingSubsequence(%v)\n wanted: %d; got: %d",
				tt.nums, tt.want, got,
			)
		}
	}
}
