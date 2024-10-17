package algorithms

import (
	"testing"
)

func TestBinarySearch(t *testing.T) {
	tests := []struct {
		nums        []int
		target      int
		wantIdx     int
		wantIsFound bool
	}{
		{
			nums:        []int{1, 2, 3},
			target:      1,
			wantIdx:     0,
			wantIsFound: true,
		},
		{
			nums:        []int{1, 2, 3},
			target:      2,
			wantIdx:     1,
			wantIsFound: true,
		},
		{
			nums:        []int{1, 2, 3},
			target:      3,
			wantIdx:     2,
			wantIsFound: true,
		},
		{
			nums:        []int{1, 2, 3},
			target:      4,
			wantIdx:     -1,
			wantIsFound: false,
		},
		{
			nums:        []int{1, 2},
			target:      1,
			wantIdx:     0,
			wantIsFound: true,
		},
		{
			nums:        []int{1, 2},
			target:      2,
			wantIdx:     1,
			wantIsFound: true,
		},
		{
			nums:        []int{1, 2},
			target:      3,
			wantIdx:     -1,
			wantIsFound: false,
		},
		{
			nums:        []int{1},
			target:      1,
			wantIdx:     0,
			wantIsFound: true,
		},
		{
			nums:        []int{1},
			target:      2,
			wantIdx:     -1,
			wantIsFound: false,
		},
		{
			nums:        []int{},
			target:      1,
			wantIdx:     -1,
			wantIsFound: false,
		},
	}

	for _, test := range tests {
		gotIdx, gotIsFound := BinarySearch(test.nums, test.target)
		if gotIdx != test.wantIdx {
			t.Errorf("Incorrect index. Want %d, but got %d", test.wantIdx, gotIdx)
		}

		if gotIsFound != test.wantIsFound {
			t.Errorf(
				"Incorrect found status. Want %v, but got %v",
				test.wantIsFound,
				gotIsFound,
			)
		}
	}

}
