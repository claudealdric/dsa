package algorithms

import (
	"fmt"

	data_structures "github.com/claudealdric/dsa/data-structures"
)

func DfsRecursive(node *data_structures.TreeNode[int], nums *[]int) {
	if node == nil {
		return
	}

	*nums = append(*nums, node.Val)

	if node.Left == nil && node.Right == nil {
		return
	}

	DfsRecursive(node.Left, nums)
	DfsRecursive(node.Right, nums)
}

func DfsIterative(node *data_structures.TreeNode[int]) {
	var stack data_structures.Stack[*data_structures.TreeNode[int]]
	if node != nil {
		stack.Push(node)
	}

	for len(stack) > 0 {
		curr, _ := stack.Pop()
		fmt.Println(curr.Val)

		if curr.Right != nil {
			stack.Push(curr.Right)
		}
		if curr.Left != nil {
			stack.Push(curr.Left)
		}
	}
}
