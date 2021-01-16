def avg(*args):
    sum = 0
    for num in args:
        sum += num
    return sum / len(args)


print(avg(2, 5))