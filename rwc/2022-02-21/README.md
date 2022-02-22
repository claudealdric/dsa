# Interview question of the week

## Question

([Link to original email](https://buttondown.email/cassidoo/archive/no-act-of-kindness-no-matter-how-small-is-ever/))

> **Given an array of integers, find the length of the longest sub-sequence such
> that elements in the sub-sequence are consecutive integers, the consecutive
> numbers can be in any order.**
>
> Example:
>
> ```
> $ longestSubSeq([1, 9, 87, 3, 10, 4, 20, 2, 45])
> $ 4 // 1, 3, 4, 2
>
> $ longestSubSeq([36, 41, 56, 35, 91, 33, 34, 92, 43, 37, 42])
> $ 5 // 36, 35, 33, 34, 37
> ```

## Approach

Iterate through the numbers and create a hash map where each key is the number
and and the value is `false`. The value represents whether the number has been
seen as part of a sub-sequence. After the first iteration, iterate again through
the numbers. If the number is not yet part of a sub-sequence, check whether the
adjacent numbers are present in the hash map and continue expanding outwards and
updating the counts if so. Else, if the number is already pat of a sub-sequence,
skip to the next number. Once the sub-subsequence cannot be expanded, update the
max count if the current sub-sequence count is greater than the max count.

Since this solution iterates through the numbers twice and it generates a hash
map of the numbers, it should have an O(n) complexity for both time and space.
