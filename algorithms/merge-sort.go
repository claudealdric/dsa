package algorithms

func MergeSort(nums []int) []int {
	if len(nums) <= 1 {
		return nums
	}

	mid := len(nums) / 2
	left := nums[:mid]
	right := nums[mid:]

	left = MergeSort(left)
	right = MergeSort(right)

	return merge(left, right)
}

func merge(s1, s2 []int) []int {
	var combined []int

	for len(s1) > 0 && len(s2) > 0 {
		if s1[0] < s2[0] {
			combined = append(combined, s1[0])
			s1 = s1[1:]
		} else {
			combined = append(combined, s2[0])
			s2 = s2[1:]
		}
	}

	for len(s1) > 0 {
		combined = append(combined, s1[0])
		s1 = s1[1:]
	}

	for len(s2) > 0 {
		combined = append(combined, s2[0])
		s2 = s2[1:]
	}

	return combined
}
