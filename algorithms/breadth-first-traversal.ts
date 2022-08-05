import { Node } from '../data-structures/binary-tree';
import { Queue } from '../data-structures/queue';

export function breadthFirstTraversal(root: Node): void {
	const queue = new Queue<Node>();
	queue.enqueue(root);

	while (!queue.isEmpty()) {
		const curr = queue.dequeue();
		console.log(curr?.val);

		if (curr?.left) {
			queue.enqueue(curr.left);
		}

		if (curr?.right) {
			queue.enqueue(curr.right);
		}
	}
}

const root = new Node(
	1,
	new Node(2, new Node(4), new Node(5)),
	new Node(3, null, new Node(6))
);

breadthFirstTraversal(root);
