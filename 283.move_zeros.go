package main

func moveZeroes(nums []int) {
	i := 0
	j := 0
	for i < len(nums) {
		if nums[i] == 0 {
			j = i
			for j < len(nums) {
				if nums[j] == 0 {
					j++
				} else {
					nums[i] = nums[j]
					nums[j] = 0
					break
				}
			}
		}
		i++
	}
}
