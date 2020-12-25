def valid_anagram(str1, str2):
  # Check if the two strings have the same length
  if len(str1) != len(str2):
    return False
  
  # Convert strings to frequency dictionaries
  frequencies1 = convert_to_frequencies(str1)
  frequencies2 = convert_to_frequencies(str2)

  # Check if the two strings consist of the same letters
  for char in frequencies1:
    if char not in frequencies2 or frequencies1[char] != frequencies2[char]:
      return False

  return True

def convert_to_frequencies(string):
  frequencies = {}
  for char in string:
    frequencies[char] = frequencies[char] + 1 if char in frequencies else 1
  return frequencies

print(valid_anagram('', ''))
print(valid_anagram('aaz', 'zza'))
print(valid_anagram('anagram', 'nagaram'))
print(valid_anagram('rat', 'car'))
print(valid_anagram('awesome', 'awesom'))
print(valid_anagram('qwerty', 'qeywrt'))
print(valid_anagram('texttwisttime', 'timetwisttext'))
