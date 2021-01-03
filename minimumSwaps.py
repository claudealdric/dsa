# Source: https://www.hackerrank.com/challenges/minimum-swaps-2/problem
def minimumSwaps(arr):
    swaps = 0
    d1, d2 = {}, {}

    for i in range(len(arr)):
        d1[i] = arr[i]
        d2[arr[i]] = i

    for i in range(len(arr)):
        if d1[i] != i + 1:
            # Do a swap
            target = d2[i + 1]
            arr[i], arr[target] = arr[target], arr[i]
            swaps += 1

            # Update dictionaries
            d1[i], d1[target] = arr[i], arr[target]
            d2[arr[i]], d2[arr[target]] = i, target

    # Return swaps
    return swaps


print(minimumSwaps([5, 1, 3, 2, 6, 4, 7]) == 4)
print(minimumSwaps([3, 7, 6, 9, 1, 8, 10, 4, 2, 5]) == 9)
