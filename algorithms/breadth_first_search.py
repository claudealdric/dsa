from collections import deque

class TreeNode:
    def __init__(self, value="", left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def bfs(root):
    queue = deque([root])

    while queue:
        node = queue.popleft()
        print(node.value, end=" ")
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

# Constructing a sample binary tree
#        A
#       / \
#      B   C
#     / \
#    D   E
root = TreeNode('A', TreeNode('B', TreeNode('D'), TreeNode('E')), TreeNode('C'))

bfs(root) # A B C D E
print("")
