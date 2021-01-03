# Source: https://www.hackerrank.com/challenges/minimum-swaps-2/problem
def minimumSwaps(nums):
    swaps = 0
    index_to_value, value_to_index = {}, {}

    for current in range(len(nums)):
        index_to_value[current] = nums[current]
        value_to_index[nums[current]] = current

    for current in range(len(nums)):
        if nums[current] != current + 1:
            # Do a swap
            target = value_to_index[current + 1]
            nums[current], nums[target] = nums[target], nums[current]
            swaps += 1

            # Update dictionaries
            index_to_value[current], index_to_value[target] = (
                nums[current],
                nums[target],
            )
            value_to_index[nums[current]], value_to_index[nums[target]] = (
                current,
                target,
            )

    # Return swaps
    return swaps


print(minimumSwaps([5, 1, 3, 2, 6, 4, 7]) == 4)
print(minimumSwaps([3, 7, 6, 9, 1, 8, 10, 4, 2, 5]) == 9)
