# Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

def almostIncreasingSequence(sequence):
    # Handle edge case: array of length 2
    if len(sequence) == 2:
        return True
        
    # Simple approach:
    # - Check if the sequence is strictly increasing (SI)
    is_strictly_increasing, offending_index = check_strictly_increasing(sequence)
    # - If sequence is SI, return True
    if is_strictly_increasing:
        return True
    
    # - If sequence is not SI
    # - Check if removal of left number would yield an SI sequence
    sequence2 = [*sequence]
    sequence2.pop(offending_index)
    is_strictly_increasing2, _ = check_strictly_increasing(sequence2)
    
    # - Check if removal of right number would yield an SI sequence
    sequence3 = [*sequence]
    sequence3.pop(offending_index + 1)
    is_strictly_increasing3, _ = check_strictly_increasing(sequence3) 
    
    # - If removal of either yields SI, return True, otherwise False
    return is_strictly_increasing2 or is_strictly_increasing3

def check_strictly_increasing(sequence):
    for i in range(len(sequence) - 1):
        if not (sequence[i + 1] > sequence[i]):
            return False, i
    
    return True, None
        
print(almostIncreasingSequence([1, 3, 2]))