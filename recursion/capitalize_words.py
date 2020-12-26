# Write a recursive function called capitalize_words. Given a list of words, return a new list containing each word capitalized.
def capitalize_words(string_list):
    # Base case
    if len(string_list) == 1:
        return [string_list[0].upper()]
    elif len(string_list) == 0:
        return []

    # Recursion
    return [string_list[0].upper(), *capitalize_words(string_list[1:])]

# Tests
print(capitalize_words([]) == [])
print(capitalize_words(['what', 'is', 'recursion']) == ['WHAT', 'IS', 'RECURSION'])
print(capitalize_words(['it', 'is']) == ['IT', 'IS'])
print(capitalize_words(['recursion']) == ['RECURSION'])