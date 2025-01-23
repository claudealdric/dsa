class TreeNode:
    def __init__(self, value="", left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def pre_order(root):
    if root is None:
        return
    print(root.value, end=" ")
    pre_order(root.left)
    pre_order(root.right)

def inorder(root):
    if root is None:
        return
    inorder(root.left)
    print(root.value, end=" ")
    inorder(root.right)

def inorder_iterative(root):
    stack = []
    curr = root

    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        print(curr.value, end=" ")
        curr = curr.right

def postorder(root):
    if root is None:
        return
    postorder(root.left)
    postorder(root.right)
    print(root.value, end=" ")

# Constructing a sample binary tree
#        A
#       / \
#      B   C
#     / \
#    D   E
root = TreeNode('A', TreeNode('B', TreeNode('D'), TreeNode('E')), TreeNode('C'))

pre_order(root) # A B D E C
print("")
inorder(root) # D B E A C
print("")
inorder_iterative(root) # D B E A C
print("")
postorder(root) # D E B C A
print("")
