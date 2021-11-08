package localPeaks

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLongestPeaks(t *testing.T) {
	testCases := GetTestCases()

	for _, testCase := range testCases {
		t.Run(fmt.Sprintf(`localPeaks.Get("%v")`, testCase.arg), func(t *testing.T) {
			assert := assert.New(t)
			actual := GetLocalPeaks(testCase.arg)
			expected := testCase.expected
			assert.Equal(actual, expected, "The two slices should be the same")
		})
	}
}
