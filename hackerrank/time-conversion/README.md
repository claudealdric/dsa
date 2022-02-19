# Time Conversion

## Question

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM
on a 12-hour clock is 12:00:00 on a 24-hour clock.

## Example

- `s = '12:01:00PM'`

  Return `'12:01:00'`

- `s = '12:01:00AM'`

  Return `'00:01:00'`

## Approach

Parse the components of the time string. Convert the hour component from a
string to a number, and apply an offset to the hour component based on the
patterns presented in these four groups: 01 - 11 AM, 01 - 11 PM, 12 AM, and 12
PM. Return the new hour component with the rest of the original string without
the AM/PM component (last two characters).
