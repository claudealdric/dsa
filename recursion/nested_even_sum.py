# Write a recursive function called nested_even_sum. Return the sum of all even numbers in an object which may contain nested objects
def nested_even_sum(dictionary, sum=0):
    is_even = lambda num: num % 2 == 0
    for value in dictionary.values():
        if type(value) == int and is_even(value):
            sum += value
        elif type(value) == dict:
            sum += nested_even_sum(value)
    return sum


# Tests
obj1 = {
    "outer": 2,
    "obj": {
        "inner": 2,
        "otherObj": {
            "superInner": 2,
            "notANumber": True,
            "alsoNotANumber": "yup",
        },
    },
}

obj2 = {
    "a": 2,
    "b": {"b": 2, "bb": {"b": 3, "bb": {"b": 2}}},
    "c": {"c": {"c": 2}, "cc": "ball", "ccc": 5},
    "d": 1,
    "e": {"e": {"e": 2}, "ee": "car"},
}

print(nested_even_sum(obj1) == 6)
print(nested_even_sum(obj2) == 10)
