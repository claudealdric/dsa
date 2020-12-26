# Write a function called collect_strings that accepts an object and returns an array of all the values in the object that have a type of string.
def collect_strings(dictionary):
    string_list = []
    for value in dictionary.values():
        if type(value) == str:
            string_list.append(value)
        elif type(value) == dict:
            string_list.extend(collect_strings(value))
    return string_list


# Tests
obj = {
    "stuff": "foo",
    "data": {
        "val": {
            "thing": {
                "info": "bar",
                "moreInfo": {
                    "evenMoreInfo": {
                        "weMadeIt": "baz",
                    },
                },
            },
        },
    },
}
print(collect_strings(obj) == ["foo", "bar", "baz"])

obj = {
    "outer": "outer",
    "inner": {
        "num": 1,
        "bool": True,
        "str": "yes",
    },
}
print(collect_strings(obj) == ["outer", "yes"])

obj = {
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
print(collect_strings(obj) == ["yup"])

obj = {
    "a": 2,
    "b": {"b": 2, "bb": {"b": 3, "bb": {"b": 2}}},
    "c": {"c": {"c": 2}, "cc": "ball", "ccc": 5},
    "d": 1,
    "e": {"e": {"e": 2}, "ee": "car"},
}
print(collect_strings(obj) == ["ball", "car"])
