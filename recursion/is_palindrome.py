# Write a recursive function is_palindrome which returns true if the string passed to it is a palindrome. Otherwise, it returns false.
def is_palindrome(str):
    # Base case
    if len(str) <= 1:
        return True

    # Recursion
    # Check if the first letter matches the last letter
    first_letter = str[0]
    last_letter = str[-1]
    if first_letter != last_letter:
        # If they are different, return false and stop the recursion
        return False

    # If they match, return true for this case and do the recursion on the string with the first and last letters removed
    return True and is_palindrome(str[1:-1])


print(is_palindrome("awesome"))  # false
print(is_palindrome("foobar"))  # false
print(is_palindrome("tacocat"))  # true
print(is_palindrome("amanaplanacanalpanama"))  # true
print(is_palindrome("amanaplanacanalpandemonium"))  # false
print(is_palindrome("a"))  # true
print(is_palindrome(""))  # true
