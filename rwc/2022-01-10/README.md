# Interview question of the week

## Question

([Link to original email](https://buttondown.email/cassidoo/archive/i-had-chosen-to-use-my-work-as-a-reflection-of-my/))

> **Given a string `s`, you can transform every letter individually to be
> lowercase or uppercase. Return a list of all possible permutations you could
> create from `s`.**
>
> Example:
>
> ```
> $ capPermutations('ab2')
> $ ['ab2', 'aB2', 'Ab2', 'AB2']
>
> $ capPermutations('35p')
> $ ['35p', '35P']
> ```

## Approach

First, generate an array of binary strings. Each binary string represents the
rules for whether to capitalize the corresponding character in `s` to generate a
permutation. For example, a binary string of `'101'` for `s = 'abc'` would
generate a permutation of `'AbC'`.

Then, use the array of binary strings to create a mapping from the original
string `s` to its permutations. To remove duplicate permutations for strings
with non-alphabet characters, store the permutations in a Set.
