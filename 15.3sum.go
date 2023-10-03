package main

import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	x := 0
	y := 1
	z := len(nums) - 1
	result := make([][]int, 0)
	for x < y && y < z {
		if x > 0 && nums[x-1] == nums[x] {
			x++
			y = x + 1
			z = len(nums) - 1
			continue
		}
		for y < z {
			if y > x+1 && nums[y-1] == nums[y] {
				y++
				continue
			}
			if z < len(nums)-1 && nums[z+1] == nums[z] {
				z--
				continue
			}
			if nums[x]+nums[y]+nums[z] == 0 {
				result = append(result, []int{nums[x], nums[y], nums[z]})
				y++
				z--
				continue
			} else if nums[x]+nums[y]+nums[z] < 0 {
				y++
				continue
			} else if nums[x]+nums[y]+nums[z] > 0 {
				z--
				continue
			}
		}
		x++
		y = x + 1
		z = len(nums) - 1
	}
	return result
}
