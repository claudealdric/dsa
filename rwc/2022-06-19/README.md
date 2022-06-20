# Interview question of the week

## Question

([Link to original email](https://buttondown.email/cassidoo/archive/it-takes-a-lot-of-hard-work-to-remain-positive/))

> Given a Fibonacci number, give the previous Fibonacci number. If the number
> given is not a Fibonacci, return -1.

## Approach

Initialize the first two Fibonacci numbers (i.e., 1 and 1) as an array of only
two elements. This array shall store the Fibonacci number prior to the latest as
the first element and the latest Fibonacci number as the second element. While
the latest Fibonacci number is less than the input number, get the next
Fibonacci number and update the array accordingly. At this point, the input
number will be either less than or equal to the latest Fibonacci number. If it
is the former, then the input number is not a Fibonacci number, so the function
should return -1. Otherwise, the input number is a Fibonacci number and the
function should return the first element of the array.
