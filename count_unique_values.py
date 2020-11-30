# Implement a function called count_unique_values, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

def count_unique_values(arr):
    # Space complexity: O(1)
    # Time complexity: O(n)
    unique_values = 0
    previous_value = None

    for num in arr:
        if num != previous_value:
            unique_values += 1
        previous_value = num

    return unique_values

print(count_unique_values([1, 1, 1, 2])) # 2
print(count_unique_values([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) # 7
print(count_unique_values([])) # 0
print(count_unique_values([-2, -2, -1, 0, 1])) # 4
