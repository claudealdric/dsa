# Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.

def fib(num):
    nth_fib = {1: 1, 2: 1}

    def helper(num):
        if num in nth_fib:
            return nth_fib[num]
        else:
            new_fib = helper(num - 1) + helper(num - 2)
            nth_fib[num] = new_fib
            return new_fib
    
    return helper(num)

print(fib(1)) # 1
print(fib(2)) # 1
print(fib(3)) # 2
print(fib(4)) # 3
print(fib(6)) # 8
print(fib(10)) # 55
print(fib(28)) # 317,811
print(fib(35)) # 9,227,465