package main

import (
	"fmt"

	phoneLetter "github.com/claudealdric/dsa/rwc/2021-11-29"
)

func main() {
	result := phoneLetter.GetLetterCombinations("9")
	fmt.Println(result) // prints [w x y z]

	result = phoneLetter.GetLetterCombinations("23")
	fmt.Println(result) // prints [ad ae af bd be ce cf]
}
