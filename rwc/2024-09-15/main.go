package main

import (
	"fmt"
	"strings"
)

var Cases = []struct {
	input int
	want  int
}{
	{input: 5, want: 1},
	{input: 12, want: 6},
	{input: 6, want: 3},
}

func main() {
	for _, c := range Cases {
		var sb strings.Builder
		sb.WriteString(fmt.Sprintf("> waysToScore(%d)", c.input))
		sb.WriteString("\n")
		sb.WriteString(fmt.Sprintf("> %d", WaysToScore(c.input)))
		sb.WriteString("\n")

		fmt.Println(sb.String())
	}
}

func WaysToScore(target int) int {
	// The underlying equation is 6x + 3y + 2z = n
	count := 0

	// Loop over possible values for x
	for x := 0; x <= target/6; x++ {
		remainingAfterX := target - 6*x

		// Loop over possible values for y
		for y := 0; y <= remainingAfterX/3; y++ {
			remainingAfterY := remainingAfterX - 3*y

			if remainingAfterY%2 == 0 {
				count++
			}
		}
	}

	return count
}
