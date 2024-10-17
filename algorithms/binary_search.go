package algorithms

func BinarySearch(nums []int, target int) (int, bool) {
	left := 0
	right := len(nums) - 1
	for left <= right {
		mid := (left + right) / 2
		num := nums[mid]
		if target < num {
			right = mid - 1
		} else if target > num {
			left = mid + 1
		} else {
			return mid, true
		}
	}
	return -1, false
}
