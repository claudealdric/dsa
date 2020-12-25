# Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

def same(arr1, arr2):
  dict1, dict2 = {}, {}

  # Check if both arrays have the same length
  if len(arr1) != len(arr2):
    return False

  # Convert arr1 to dictionary of frequencies
  for num in arr1:
    dict1[num] = dict1[num] + 1 if num in dict1 else 1

  # Convert arr2 to dictionary of frequencies
  for num in arr2:
    dict2[num] = dict2[num] + 1 if num in dict2 else 1

  for num in dict1:
    if num ** 2 not in dict2 or dict1[num] != dict2[num ** 2]:
      return False
      
  return True

# Tests
print(same([1, 2, 3, 4, 1], [1, 1, 4, 9, 16]))
print(same([1, 2, 3], [1, 2]))
