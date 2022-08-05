import { Node } from '../data-structures/binary-tree';

function depthFirstTraversal(node: Node): void {
	console.log(node.val);

	if (node.left) {
		depthFirstTraversal(node.left);
	}

	if (node.right) {
		depthFirstTraversal(node.right);
	}
}

const root = new Node(
	1,
	new Node(2, new Node(4), new Node(5)),
	new Node(3, null, new Node(6))
);

depthFirstTraversal(root);
