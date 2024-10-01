# Interview question of the week

## Question

([Link to original email](https://buttondown.com/cassidoo/archive/happiness-makes-up-in-height-for-what-it-lacks-in/))

**Implement your own String split() function in your preferred programming
language.**

Example usage:

```js
const str = 'This is so, so silly!';

> str.split(' ');
> ["This", "is", "so,", "so", "silly!"]

> str.split('');
> ["T", "h", "i", "s", " ", "i", "s", " ", "s", "o", ",", " ", "s", "o", " ", "s", "i", "l", "l", "y", "!"]

> str.split(',');
> ["This is so", " so silly!"]
```

## Solution

```go
func Split(str string, sep string) []string {
    var splits []string

    if sep == "" {
        for _, char := range str {
            splits = append(splits, string(char))
        }
        return splits
    }

    var counter int
    remainingChars := []rune(str)

    for i := 0; i <= len(str)-len(sep); i++ {
        window := str[i : i+len(sep)]
        if window != sep {
            counter++
            continue
        }
        word := remainingChars[0:counter]
        splits = append(splits, string(word))
        remainingChars = remainingChars[counter+len(sep):]
        counter = 0
        i += len(sep) - 1
    }
    splits = append(splits, string(remainingChars))

    return splits
}
```
