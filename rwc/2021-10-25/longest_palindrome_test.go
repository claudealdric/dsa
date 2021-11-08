package longestPalindrome

import (
	"fmt"
	"testing"
)

func TestLongestPalindrome(t *testing.T) {
	testCases := []struct {
		arg      string
		expected string
	}{
		{"da_", "dad"},
		{"_ad", "dad"},
		{"abcb_cbcbafg", "abcbccbcba"},
		{"xyzi_iizy", "yziiiizy"},
	}

	for _, testCase := range testCases {
		t.Run(fmt.Sprintf(`LongestPalingrome("%s")`, testCase.arg), func(t *testing.T) {
			if LongestPalindrome(testCase.arg) != testCase.expected {
				t.Fatalf(`expected: "%s", actual: "%s"`,
					testCase.expected,
					LongestPalindrome(testCase.arg),
				)
			}
		})
	}
}
