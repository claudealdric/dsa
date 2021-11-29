package phoneLetter

func GetLetterCombinations(digits string) []string  {
	var combinations []string
	digitsToLetters := map[string][]string{
		"2": {"a", "b", "c"},
		"3": {"d", "e", "f"},
		"4": {"g", "h", "i"},
		"5": {"j", "k", "l"},
		"6": {"m", "n", "o"},
		"7": {"p", "q", "r", "s"},
		"8": {"t", "u", "v"},
		"9": {"w", "x", "y", "z"},
	}

	for i := 0; i < len(digits); i++ {
		digit := string(digits[i])
		lettersForDigit := digitsToLetters[digit]
		var newCombinationsAfterNewDigit []string

		digitIsTheFirst := i == 0

		if digitIsTheFirst {
			combinations = lettersForDigit
			continue
		} 

		for _, combination := range combinations {
			for _, letterForDigit := range lettersForDigit {
				newCombinationsAfterNewDigit = append(
					newCombinationsAfterNewDigit,
					combination + letterForDigit,
				)
			}
		}

		combinations = newCombinationsAfterNewDigit
	}

	return combinations
}