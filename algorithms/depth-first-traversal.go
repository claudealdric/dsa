package algorithms

import (
	"fmt"

	data_structures "github.com/claudealdric/dsa/data-structures"
)

func DfsRecursive(node *data_structures.TreeNode[int]) {
	if node == nil {
		return
	}

	fmt.Println(node.Val)

	if node.Left == nil && node.Right == nil {
		return
	}

	DfsRecursive(node.Left)
	DfsRecursive(node.Right)
}
