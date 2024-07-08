# Interview question of the week

## Question

Write a function that takes an array of integers representing the number of flowers planted in a line, and an integer `k` representing the number of additional flowers you want to plant. Return whether it's possible to plant all `k` flowers without planting any two flowers adjacent to each other.

Example:

```
> canPlantFlowers([1, 0, 0, 0, 1], 1)
> true // you can plant 1 flower between the others

> canPlantFlowers([1, 0, 0, 0, 1], 2)
> false

> canPlantFlowers([0, 0, 0, 0, 0], 3)
> true

> canPlantFlowers([1, 0, 1, 0, 1], 1)
> false
```

## Approach

Set a counter that counts the maximum number of flowers that can be planted given the above rule. Iterate through the array of planted flowers. Check the adajacent positions to see whether they are empty and handle the edge cases when an adjacent space need not be checked. Return `true` if the max number of flowers that can be planted is at least the count provided in the function arguments.
