def factorial(num):
    if num <= 1:
        return 1
    
    return num * factorial(num - 1)

for i in range(6):
    print(factorial(i))