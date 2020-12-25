# Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.


def flatten(num_list):
    flattened = []

    for element in num_list:
        if type(element) == int:
            flattened.append(element)
        elif type(element) == list:
            flattened.extend(flatten(element))

    return flattened


print(flatten([1, 2, 3, [4, 5]]))  # [1, 2, 3, 4, 5]
print(flatten([1, [2, [3, 4], [[5]]]]))  # [1, 2, 3, 4, 5]
print(flatten([[1], [2], [3]]))  # [1,2,3]
print(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))  # [1,2,3]
