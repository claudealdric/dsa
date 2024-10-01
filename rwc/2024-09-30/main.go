package main

func Split(str string, sep string) []string {
	var splits []string

	if sep == "" {
		for _, char := range str {
			splits = append(splits, string(char))
		}
		return splits
	}

	var counter int
	remainingChars := []rune(str)

	for i := 0; i <= len(str)-len(sep); i++ {
		window := str[i : i+len(sep)]
		if window != sep {
			counter++
			continue
		}
		word := remainingChars[0:counter]
		splits = append(splits, string(word))
		remainingChars = remainingChars[counter+len(sep):]
		counter = 0
		i += len(sep) - 1
	}
	splits = append(splits, string(remainingChars))

	return splits
}
