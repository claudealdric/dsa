# Interview question of the week

## Question

([Link to original email](https://buttondown.email/cassidoo/archive/frustration-is-fuel-that-can-lead-to-the/))

> **Given a string that represents items as asterisks (\*) and compartment walls
> as pipes (|), a start index, and an end index, return the number of items in a
> closed compartment.**
>
> Example:
>
> ```
> let str = '|**|*|*'
>
> containedItems(str, 0, 5)
> > 2
>
> containedItems(str, 0, 6)
> > 3
>
> containedItems(str, 1, 7)
> > 1
> ```

## Approach

Using the start and end indices provided in the arguments, use a two-pointer
approach. Keep moving the left pointer to the right until the left pointer
points to a wall or if it crosses the right pointer. Then, keep moving the right
pointer to the left until the right pointe points to a wall or if it crosses the
left pointer. Finally, count only the items between the left and right pointers.
