package datastructs

type TreeNode[T any] struct {
	Val   T
	Left  *TreeNode[T]
	Right *TreeNode[T]
}

func GetSampleTree() *TreeNode[int] {
	two := TreeNode[int]{
		Val:   2,
		Left:  &TreeNode[int]{Val: 4},
		Right: &TreeNode[int]{Val: 5},
	}
	three := TreeNode[int]{
		Val:   3,
		Left:  &TreeNode[int]{Val: 6},
		Right: &TreeNode[int]{Val: 7},
	}
	one := TreeNode[int]{
		Val:   1,
		Left:  &two,
		Right: &three,
	}
	return &one
}
