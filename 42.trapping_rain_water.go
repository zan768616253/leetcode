package main

func trap(height []int) int {
	count := 0

	for i := 0; i < len(height); i++ {
		var left int
		var right int
		cur := height[i]

		for m := i - 1; m > -1; m-- {
			if height[m] > cur && height[m] > left {
				left = height[m]
			}
		}

		for n := i + 1; n < len(height); n++ {
			if height[n] > cur && height[n] > right {
				right = height[n]
			}
		}

		if left > 0 && right > 0 {
			min := 0
			if left > right {
				min = right
			} else {
				min = left
			}
			count = count + min - cur
		}
	}

	return count
}
