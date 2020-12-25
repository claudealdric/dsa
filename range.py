# Write a recursive function called recursive_range which accepts a number and adds up all the numbers from 0 to the number passed to the function.
def recursive_range(number):
    if number < 1:
        return 0
    return number + recursive_range(number - 1)


print(recursive_range(6))  # 21
print(recursive_range(10))  # 55
