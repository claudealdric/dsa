# Write a recursive function called capitalize_first. Given an array of strings, capitlize the first letter of each string in the array.
def capitalize_first(string_list):
    # Base case
    if len(string_list) == 0:
        return []
    # Recursion
    new_string = string_list[0].capitalize()
    return [new_string, *capitalize_first(string_list[1:])]


print(capitalize_first([]) == [])
print(capitalize_first(["car", "taco", "banana"]) == ["Car", "Taco", "Banana"])
