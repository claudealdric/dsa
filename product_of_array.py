# Write a recursive function called product_of_array which takes in an array of numbers and returns the product of them all.


def product_of_array(num_list):
    if len(num_list) == 0:
        return 1
    return num_list[0] * product_of_array(num_list[1:])


print(product_of_array([1, 2, 3]))  # 6
print(product_of_array([2, 3, 5]))  # 30
