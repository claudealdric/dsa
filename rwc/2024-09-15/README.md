# Interview question of the week

## Question

([Link to original email](https://buttondown.com/cassidoo/archive/no-matter-what-happens-in-life-be-good-to-people/))

> **You are given an integer n representing the total points a team wants to
> score in an American football game. You need to determine the number of unique
> ways the team can achieve exactly n points using any combination of touchdowns
> (6 points), field goals (3 points), or safeties (2 points).**
>
> Example:
>
> ```
> > waysToScore(5)
> > 1
>
> > waysToScore(12)
> > 6
>
> > waysToScore(6)
> > 3
> ```

## Solution

```go
func WaysToScore(target int) int {
    // The underlying equation is 6x + 3y + 2z = n
    count := 0

    // Loop over possible values for x
    for x := 0; x <= target/6; x++ {
        remainingAfterX := target - 6*x

        // Loop over possible values for y
        for y := 0; y <= remainingAfterX/3; y++ {
            remainingAfterY := remainingAfterX - 3*y

            if remainingAfterY%2 == 0 {
                count++
            }
        }
    }

    return count
}
```
