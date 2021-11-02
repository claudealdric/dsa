# Interview question of the week

## Question

> **Given a string `s` where some of the letters can be “wilds” (denoted by an
> underscore `_`), find the longest palindrome possible from the letters of `s`
> in order, where the wilds can be any character.**
>
> Example:
>
> ```js
> $ longestPalindrome('abcb_cbcbafg')
> $ 'abcbccbcba'
>
> $ longestPalindrome('xyzi_iizy')
> $ 'yziiiizy'
> ```

## Approach

I first approach the problem as if I'm just looking for the longest palindrome
without wildcards. To deal with odd and even character count cases, I add a
filler character `|` between every character of the input string `str`. I
iterate through each character of the string and set it as the new center of the
palindrome. If the adjacent characters form a palindrome, I expand the radius
outwards by moving the left pointer to the left and the right pointer to the
right. Once I find the longest possible palindrome within the current center, I
store the max radius and the corresponding index that I've seen so far. At the
end of the iteration, I take the max radius and its index and use them to obtain
the longest palindromic substring.

Once the longest palindrome problem has been solved, to account for the
wildcards, I expand the radius of the current center when either the left
pointer or the right pointer points to a wildcard character (`_`).
