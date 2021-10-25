# Interview question of the week

## Question

> **Given an array of object A, and an array of indexes B, reorder the objects
> in array A with the given indexes in array B**
>
> Example:
>
> ```js
> let a = [C, D, E, F, G, H];
> let b = [3, 0, 4, 1, 2, 5];
>
> $ reorder(a, b) // a is now [D, F, G, C, E, H]
> ```

## Approach

My first approach is to create a simple solution that would solve the problem:
assuming that `a` and `b` have the same length, create a new array having the
same length as `a` and `b`, then assign the current element to the corresponding
`b`-th index of the new array. For example, on the new array, C would be on
index 3, D would be on index 0, E would be on index 4 (at this step, the new
array would be as such: `[D, _, _, C, E, _, _]`), and so on. Repeat this process
for all the elements in `a`, then return the new array.

To optimize this further, instead of creating a new array, my new approach now
systematically switches the elements of the old array in place.
