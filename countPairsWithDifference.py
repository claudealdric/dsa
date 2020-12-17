# Given an array a of positive integers, find the number of pairs of integers for which the difference between the two numbers is equal to a given number k. Since the number of pairs could be quite large, take it module 10^9 + 7 for your output.

def countPairsWithDifference(k, a):
    max_pairs = 10 ** 9 + 7
    
    # Approach: store the numbers in a dictionary/set,
    # loop through all of the numbers, and check whether its partner is there
    # Expected time complexity: O(N)
    # Complication: how do you prevent double counting pairs?
    # Solution: count all of the pairs, then divide the answer by two
    # Must use dictionary since there may be duplicate values
    
    # Initialize tracking variables
    nums_dict = {}
    pairs = 0
    
    # Store the array numbers in a frequencies dictionary
    for num in a:            
        nums_dict[num] = 1 if num not in nums_dict else nums_dict[num] + 1
        
    # Loop through the numbers in the dictionary
    for num in nums_dict:
        # Check whether its partner is there
        # When checking for the partner, must check the higher and lower partner
        # If partner is there, add count by the frequencies of both numbers
        if num + k in nums_dict:
            pairs += (nums_dict[num] * nums_dict[num + k]) % max_pairs
            
    return pairs



print(countPairsWithDifference(3, [1, 6, 8, 2, 4, 9, 12]))
print(countPairsWithDifference(2, [1, 3, 1, 8]))