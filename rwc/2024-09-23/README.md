# Interview question of the week

## Question

([Link to original email](https://buttondown.com/cassidoo/archive/show-me-your-friends-and-ill-show-you-your-future/))

> **You're designing a smart laundry sorting system. You have a list of clothing
> items, each with a color and a fabric type. Sort these items into the minimum
> number of loads n and return n, where items of the same color can be washed
> together, and some different fabric types cannot be mixed together. "Normal"
> fabric types can be mixed with "heavy", but "delicate" cannot be mixed with
> anything.**
>
> Example:
>
> ```js
> let load1 = [
> 	['red', 'normal'],
> 	['blue', 'normal'],
> 	['red', 'delicate'],
> 	['blue', 'heavy'],
> ];
>
> let load2 = [
> 	['white', 'normal'],
> 	['white', 'delicate'],
> 	['white', 'normal'],
> 	['white', 'heavy'],
> ];
>
> minLaundryLoads(load1); // 3; one delicate red, one normal red, and one with the blues
> minLaundryLoads(load2); // 2; one delicate white, one with everything else
> ```

## Solution

Create bins of "sets", assign each clothing to each set, and return the length
of each set. Each set represents the combination of colored vs white and
delicate vs normal/heavy. The length of each set represents the minimum number
of loads for each color/wash type combination.

```go
func MinLaundryLoads(load [][]string) int {
    coloredNormals := make(map[string]bool)
    coloredDelicates := make(map[string]bool)
    whites := make(map[string]bool)

    for _, clothing := range load {
        color := clothing[0]
        washType := clothing[1]

        if color == "white" {
            if washType == "delicate" {
                whites[washType] = true
            } else {
                whites["normal"] = true
            }
        } else {
            if washType == "delicate" {
                coloredDelicates[color] = true
            } else {
                coloredNormals[color] = true
            }
        }
    }

    return len(coloredNormals) + len(coloredDelicates) + len(whites)
}
```
