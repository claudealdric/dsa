package algorithms

import (
	"fmt"

	datastructs "github.com/claudealdric/dsa/data-structures"
)

func DfsRecursive(node *datastructs.TreeNode[int], nums *[]int) {
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

func DfsIterative(node *datastructs.TreeNode[int]) {
	var stack datastructs.Stack[*datastructs.TreeNode[int]]
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
