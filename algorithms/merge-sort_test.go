package algorithms

import (
	"slices"
	"testing"
)

func TestMergeSort(t *testing.T) {
	nums := []int{1, 3, 5, 7, 2, 4, 6, 8}
	got := MergeSort(nums)
	want := []int{1, 2, 3, 4, 5, 6, 7, 8}

	if !slices.Equal(got, want) {
		t.Errorf("got %v, want %v", got, want)
	}
}
