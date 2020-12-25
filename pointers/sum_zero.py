# Write a function called sum_zero that accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.


def sum_zero(int_array, target_sum=0):
    # Approach: have two pointers and go from the outside in

    # Assign the left and right pointers (indices)
    left_pointer = 0
    right_pointer = len(int_array) - 1

    # Compare the two numbers (until the two pointers meet)
    while left_pointer < right_pointer:
        left_number = int_array[left_pointer]
        right_number = int_array[right_pointer]
        current_sum = left_number + right_number

        # If the sum is equal to the target, return the pair
        if current_sum == target_sum:
            return [left_number, right_number]
        # If the sum is greater than the target, move the right pointer to the left
        elif current_sum > target_sum:
            right_pointer -= 1
        # If the sum is less than the target, move the left pointer to the right
        else:
            left_pointer += 1


# Test cases
print(sum_zero([-10, -7, 3, 5, 7, 9, 13]))  # [-7, 7]
print(sum_zero([-3, -2, -1, 0, 1, 2, 4]))  # [-2, 2]
print(sum_zero([-2, 0, 1, 3]))  # None
print(sum_zero([-2, 2, 3]))  # [-2, 2]
print(sum_zero([1, 2, 3]))  # None
print(sum_zero([-2, 2]))  # [-2, 2]
print(sum_zero([]))  # None
