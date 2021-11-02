package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(LongestPalindrome("xyzi_iizy"))
	fmt.Println(LongestPalindrome("abcb_cbcbafg"))
}

func LongestPalindrome(str string) string {
	wildcardChar := byte('_')
	fillerChar := byte('|')
	var maxRadius, maxCenter int
	modifiedStr := AddCharInBetween(str, fillerChar)

	// Iterate through each char of the modified string
	for center := 0; center < len(modifiedStr); center++ {
		currentRadius := 0

		// If the adjacent characters do not exceed the string's border,
		// AND the left char is the same as the right char
		left := center - currentRadius - 1
		right := center + currentRadius + 1
		for left >= 0 &&
			right < len(modifiedStr) &&
			(modifiedStr[left] == wildcardChar ||
				modifiedStr[right] == wildcardChar ||
				modifiedStr[left] == modifiedStr[right]) {
			// Increment the current palindrome radius
			currentRadius += 1
			left = center - currentRadius - 1
			right = center + currentRadius + 1
		}

		// If the current radius exceeds the max radius
		// Replace the max radius and the max radius index
		if currentRadius >= maxRadius {
			maxRadius = currentRadius
			maxCenter = center
		}
	}

	// Get the longest palindrome with the filler char in between
	start := maxCenter - maxRadius
	end := maxCenter + maxRadius + 1
	modifiedLongestPalindromeChars := []byte(modifiedStr[start:end])

	// Replace wildcard with the proper value
	for i := 1; i <= maxRadius; i++ {
		center := len(modifiedLongestPalindromeChars) / 2
		left := center - i
		right := center + i

		if modifiedLongestPalindromeChars[left] == wildcardChar {
			modifiedLongestPalindromeChars[left] = modifiedLongestPalindromeChars[right]
		} else if modifiedLongestPalindromeChars[right] == wildcardChar {
			modifiedLongestPalindromeChars[right] = modifiedLongestPalindromeChars[left]
		}
	}

	return strings.ReplaceAll(
		string(modifiedLongestPalindromeChars),
		string(fillerChar), "",
	)
}

func AddCharInBetween(str string, char byte) string {
	chars := make([]byte, 2*(len(str)-1)+1)

	for i, strIdx := 0, 0; i < len(chars); i++ {
		if i%2 == 0 {
			chars[i] = str[strIdx]
			strIdx++
		} else {
			chars[i] = char
		}
	}

	return string(chars)
}
