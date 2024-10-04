package algorithms

import (
	"fmt"

	data_structures "github.com/claudealdric/dsa/data-structures"
)

func BfsQueue(root *data_structures.TreeNode[int]) {
	q := data_structures.NewQueue[*data_structures.TreeNode[int]]()
	if root != nil {
		q.Enqueue(root)
	}
	for q.Size() > 0 {
		curr, _ := q.Dequeue()
		fmt.Println(curr.Val)

		if curr.Left != nil {
			q.Enqueue(curr.Left)
		}

		if curr.Right != nil {
			q.Enqueue(curr.Right)
		}
	}
}
