# Source: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
def miniMaxSum(arr):
    # Initialize the min and max sums
    min_sum, max_sum = float("inf"), float("-inf")

    # Find the sum of all numbers in the array
    total_sum = sum(arr)

    # Loop through the array, subtract the current number for each step
    for num in arr:
        # Obtain the current sum
        current_sum = total_sum - num

        # Compare the current sum with the min and max sums
        if current_sum < min_sum:
            min_sum = current_sum
        if current_sum > max_sum:
            max_sum = current_sum

    # Return the min and max sums
    return [min_sum, max_sum]


print(miniMaxSum([1, 2, 3, 4, 5]))
