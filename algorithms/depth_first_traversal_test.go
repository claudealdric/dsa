package algorithms

import (
	"slices"
	"testing"

	data_structures "github.com/claudealdric/dsa/data-structures"
)

func TestDfs(t *testing.T) {
	tree := data_structures.GetSampleTree()
	var nums []int
	DfsRecursive(tree, &nums)
	want := []int{1, 2, 4, 5, 3, 6, 7}
	if !slices.Equal(nums, want) {
		t.Errorf("got %v, want %v", nums, want)
	}
}
