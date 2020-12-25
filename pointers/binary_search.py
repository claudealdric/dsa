# Given a sorted array of integers, write a function called binary_search, which accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.


# Iterative version
def binary_search(arr, num):
    left = 0
    right = len(arr) - 1

    # Keep going until the two pointers cross
    while not left > right:
        # Find the midpoint
        mid = (left + right) // 2
        # Check if the midpoint matches the number being searched
        if arr[mid] == num:
            # If equal, return index
            return mid
        elif arr[mid] > num:
            # If midpoint is greater, move new search to the left
            right = mid - 1
        else:
            # If midpoint is less, move new search to the right
            left = mid + 1

    return -1


# # Recusive version
# def binary_search(arr, num):
#     left = 0
#     right = len(arr) - 1
#     return binary_search_helper(arr, num, left, right)


# def binary_search_helper(arr, num, left, right):
#     if left > right:
#         return -1

#     mid = (left + right) // 2

#     if arr[mid] == num:
#         return mid
#     elif arr[mid] > num:
#         return binary_search_helper(arr, num, left, mid - 1)
#     else:
#         return binary_search_helper(arr, num, mid + 1, right)


print(binary_search([1, 2, 3, 4], 1))  # 0
print(binary_search([1, 2, 3, 4], 2))  # 1
print(binary_search([1, 2, 3, 4], 3))  # 2
print(binary_search([1, 2, 3, 4], 4))  # 2
print(binary_search([1, 2, 3, 4], 5))  # -1
print(binary_search([1, 2, 3], 1))  # 0
print(binary_search([1, 2, 3], 2))  # 1
print(binary_search([1, 2, 3], 3))  # 2
print(binary_search([1, 2, 3], 4))  # -1
