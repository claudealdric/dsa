# Write a recursive function called reverse which accepts a string and returns a new string in reverse
def reverse(str):
    # Base case
    if len(str) <= 1:
        return str

    # Recursion
    return str[-1] + reverse(str[:-1])


print(reverse("awesome"))  # emosewa
print(reverse("rithmschool"))  # loohcsmhtir
print(reverse(""))  # ''
print(reverse("a"))  # a
