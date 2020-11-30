# Write a function called same_frequency. Given two positive integers, find out if the two numbers have the same frequency of digits. The solution must have a time complexity of O(N)


def same_frequency(num1, num2):
    num1_frequencies = convert_to_frequencies(num1)

    for digit in str(num2):
        if digit not in num1_frequencies or num1_frequencies[digit] == 0:
            return False
        else:
            num1_frequencies[digit] -= 1

    return True


def convert_to_frequencies(num):
    frequencies = {}

    for digit in str(num):
        frequencies[digit] = frequencies[digit] + 1 if digit in frequencies else 1
        
    return frequencies


print(same_frequency(182, 281))  # true
print(same_frequency(122333, 333221))  # true
print(same_frequency(122333, 111223))  # false
print(same_frequency(34, 14))  # false
print(same_frequency(12345, 53241))  # true
print(same_frequency(22, 222))  # false
