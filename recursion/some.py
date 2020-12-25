# Write a recursive function called some_recursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise, it returns false.
def some_recursive(num_list, callback):
    # Base case
    if len(num_list) == 1:
        return callback(num_list[0])
    elif len(num_list) == 0:
        return False

    # Recursion
    if callback(num_list[0]):
        return True

    return False or some_recursive(num_list[1:], callback)


is_odd = lambda num: num % 2 == 1

print(some_recursive([], is_odd))  # false
print(some_recursive([4], is_odd))  # false
print(some_recursive([5], is_odd))  # true
print(some_recursive([1, 2, 3, 4], is_odd))  # true
print(some_recursive([4, 6, 8, 9], is_odd))  # true
print(some_recursive([4, 6, 8], is_odd))  # false
print(some_recursive([4, 6, 8], lambda val: val > 10))  # false
print(some_recursive([4, 6, 8, 11], lambda val: val > 10))  # true
