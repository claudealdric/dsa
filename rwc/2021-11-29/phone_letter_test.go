package phoneLetter

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetLetterCombinations(t *testing.T) {
	testCases := GetTestCases()

	for _, testCase := range testCases {
		t.Run(
			fmt.Sprintf(`phoneLetter.GetLetterCombinations("%v")`, testCase.arg),
			func(t *testing.T) {
				assert := assert.New(t)
				actual := GetLetterCombinations(testCase.arg)
				expected := testCase.expected
				assert.Equal(actual, expected, "The two slices should be the same")
			},
		)
	}
}
