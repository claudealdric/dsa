package main

func IncreasingSubsequence(nums []int) int {
	if len(nums) < 2 {
		return len(nums)
	}

	bestIncSub := []int{}

	for _, num := range nums {
		subIdx := binarySearch(bestIncSub, num)
		if subIdx < len(bestIncSub) {
			bestIncSub[subIdx] = num
		} else {
			bestIncSub = append(bestIncSub, num)
		}
	}

	return len(bestIncSub)
}

func binarySearch(nums []int, target int) int {
	left, right := 0, len(nums)

	for left < right {
		mid := (left + right) / 2

		if nums[mid] < target {
			left = mid + 1
		} else if target < nums[mid] {
			right = mid - 1
		} else {
			return mid
		}
	}

	return left
}
