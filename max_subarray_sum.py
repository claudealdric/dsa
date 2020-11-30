# Write a function called max_subarray_sum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.


def max_subarray_sum(arr, n):
    # Handle edge case: n is greater than array length
    if len(arr) < n:
        return
    temp_sum = sum(arr[:n])
    max_sum = temp_sum

    for i in range(n, len(arr)):
        temp_sum = temp_sum - arr[i - n] + arr[i]
        max_sum = max(temp_sum, max_sum)

    return max_sum


print(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 2))  # 10
print(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 4)) # 17
print(max_subarray_sum([4, 2, 1, 6], 1)) # 6
print(max_subarray_sum([4, 2, 1, 6, 2], 4)) # 13
print(max_subarray_sum([], 4)) # null
