package localPeaks

import "fmt"

func GetLocalPeaks(ints []int) []int {
	localPeaks := []int{}

	for i := 1; i < len(ints)-1; i++ {
		currentValue := ints[i]
		leftValue := ints[i-1]
		rightValue := ints[i+1]

		if currentValue > leftValue && currentValue > rightValue {
			localPeaks = append(localPeaks, i)
		}
	}

	return localPeaks
}

func GetTestCases() []struct {
	arg      []int
	expected []int
} {
	testCases := []struct {
		arg      []int
		expected []int
	}{
		{[]int{}, []int{}},
		{[]int{1}, []int{}},
		{[]int{1, 2}, []int{}},
		{[]int{1, 2, 3}, []int{}},
		{[]int{1, 3, 2}, []int{1}},
		{[]int{1, 2, 3, 1}, []int{2}},
		{[]int{1, 3, 2, 3, 5, 6, 4}, []int{1, 5}},
	}

	return testCases
}

func RunTestCases() {
	testCases := GetTestCases()

	for _, testCase := range testCases {
		fmt.Println(GetLocalPeaks(testCase.arg))
	}
}
