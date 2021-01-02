# Source: https://www.hackerrank.com/challenges/new-year-chaos/problem
def minimumBribes(q):
    # Initialize number of bribes
    bribes = 0

    # Iterate through the array, start with the last one
    for i in reversed(range(1, len(q))):
        orig_pos = i + 1

        # Check if it's NOT in the right position
        if q[i] != orig_pos:
            # Check if the adjacent neighbor is the correct position
            if i - 1 >= 0 and q[i - 1] == orig_pos:
                # If it is, swap the two and increment bribe by 1
                q[i - 1], q[i] = q[i], q[i - 1]
                bribes += 1
            # Check if the second left adjacent neighbor is the correct position
            elif i - 2 >= 0 and q[i - 2] == orig_pos:
                # If it is, "reverse" the double-swap and increment bribe by w
                q[i - 2], q[i - 1], q[i] = q[i - 1], q[i], q[i - 2]
                bribes += 2
            # If neither of these two cases are true, it's too chaotic
            else:
                print("Too chaotic")
                return

    # Return number of bribes
    print(bribes)


minimumBribes([2, 5, 1, 3, 4])
minimumBribes([2, 1, 5, 3, 4])
