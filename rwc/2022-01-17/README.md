# Interview question of the week

## Question

([Link to original email](https://buttondown.email/cassidoo/archive/the-time-is-always-right-to-do-what-is-right-dr/))

> **Using the rules of Wordle, given a `guessWord` and a `solutionWord`, return
> a set of emojis returned from the `guessWord`.**
>
> Example:
>
> ```
> $ wordleGuess("reads", solutionWord)
> $ "⬛🟨⬛🟨⬛"
>
> $ wordleGuess("lodge", solutionWord)
> $ "⬛⬛🟩🟩🟩"
> ```

## Approach

Use an Object where the keys are the letters used in the solution word and the
values are a Set of the indices in which the letter occurs in the solution word.
Using the word "pass" as an example:

```json
{
  "p": {0},
  "a": {1},
  "s": {2, 3}
}
```

For each letter used in the guess word, if the letter does not exist as a key in
the Object (i.e., the letter does not occur in the solution word), return a
black emoji. If it does exist, but the letter's index is not in the Set (i.e.,
the letter has an incorrect position), return a yellow emoji. Finally, if it
exists _and_ the letter's index is in the Set (i.e., the letter is in the
correct position), return a green emoji.
