package algorithms

import (
	"fmt"

	datastructs "github.com/claudealdric/dsa/data-structures"
)

func BfsQueue(root *datastructs.TreeNode[int]) {
	q := datastructs.NewQueue[*datastructs.TreeNode[int]]()
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
