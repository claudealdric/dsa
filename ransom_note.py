"""
Source: https://www.hackerrank.com/challenges/ctci-ransom-note/problem

Given the words in the magazine and the words in the ransom note, return Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, return No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is .
"""


def check_magazine(magazine, note):
    # Convert magazine to dictionary of frequencies
    frequencies = {}
    for word in magazine:
        frequencies[word] = frequencies[word] + 1 if word in frequencies else 1

    # Iterate through the words in the note
    for word in note:
        # If the word is in the magazine, "remove" word from magazine
        if word in frequencies and frequencies[word] > 0:
            frequencies[word] -= 1
        else:
            # Else, return "No"
            return "No"

    # If all the words are in the magazine, return "Yes"
    return "Yes"


# Checks
magazine = "give me one grand today night".split(" ")
note = "give one grand today".split(" ")
print(check_magazine(magazine, note) == "Yes")

magazine = "two times three is not four".split(" ")
note = "two times two is four".split(" ")
print(check_magazine(magazine, note) == "No")

magazine = "ive got a lovely bunch of coconuts".split(" ")
note = "ive got some coconuts".split(" ")
print(check_magazine(magazine, note) == "No")
