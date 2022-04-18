# Interview question of the week

## Question

([Link to original email](https://buttondown.email/cassidoo/archive/dreams-become-reality-when-we-put-our-minds-to-it/))

> **Given an unsorted array of integers and a number n, find the subarray of
> length n that has the largest sum.**
>
> Example:
>
> ```
> $ largestSubarraySum([3,1,4,1,5,9,2,6], 3)
> $ [9, 2, 6]
> ```

## Approach

Initialize the following variables: a pointer to the starting index with the
largest subarray sum, the max subarray sum, and the current subarray sum.
Iterate through the numbers, subtracting the previous number and adding the
newly seen number to keep track of the current subarray sum for the n elements.
If the current sum is larger than the maximum sum seen so far, replace the
maximum sum with the current sum and update the pointer. Once the iteration is
complete, return the subarray with the largest sum using the pointer as the
starting index and the size of the subarray to determine the ending index.
