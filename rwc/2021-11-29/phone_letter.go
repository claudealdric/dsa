package phoneLetter

import (
	"fmt"
)

func GetLetterCombinations(digits string) []string {
	var combinations [][]byte
	digitsToLetters := map[byte][]byte{
		'2': {'a', 'b', 'c'},
		'3': {'d', 'e', 'f'},
		'4': {'g', 'h', 'i'},
		'5': {'j', 'k', 'l'},
		'6': {'m', 'n', 'o'},
		'7': {'p', 'q', 'r', 's'},
		'8': {'t', 'u', 'v'},
		'9': {'w', 'x', 'y', 'z'},
	}

	for i := 0; i < len(digits); i++ {
		digit := digits[i]
		lettersForDigit := digitsToLetters[digit]
		var newCombinationsAfterNewDigit [][]byte

		digitIsTheFirst := i == 0

		if digitIsTheFirst {
			for _, letterForDigit := range lettersForDigit {
				combinations = append(combinations, []byte{letterForDigit})
			}
			continue
		}

		for _, combination := range combinations {
			for _, letterForDigit := range lettersForDigit {
				newCombination := append(combination, letterForDigit)
				newCombinationsAfterNewDigit = append(
					newCombinationsAfterNewDigit,
					newCombination,
				)
			}
		}

		combinations = newCombinationsAfterNewDigit
	}

	return mapByteSliceToString(combinations)
}

func mapByteSliceToString(input [][]byte) []string {
	var transformed []string
	for _, byteSlice := range input {
		transformed = append(transformed, string(byteSlice))
	}

	return transformed
}

func GetTestCases() []struct {
	arg      string
	expected []string
} {
	testCases := []struct {
		arg      string
		expected []string
	}{
		{"9", []string{"w", "x", "y", "z"}},
		{"23", []string{"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}},
	}

	return testCases
}

func PrintTestCases() {
	testCases := GetTestCases()

	for _, testCase := range testCases {
		fmt.Println("Input:", testCase.arg)
		fmt.Printf("Output: %v\n\n", GetLetterCombinations(testCase.arg))
	}
}
