package main

import "math"

/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3

	1 [3  -1  -3] 5  3  6  7       3
	1  3 [-1  -3  5] 3  6  7       5
	1  3  -1 [-3  5  3] 6  7       5
	1  3  -1  -3 [5  3  6] 7       6
	1  3  -1  -3  5 [3  6  7]      7

Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

// Solution 1
type maxSlidingWindowQueue struct {
	window []int
}

func (q *maxSlidingWindowQueue) push(value int) {
	if value > q.getMax() {
		q.window = []int{value}
	} else {
		i := len(q.window) - 1
		for i >= 0 {
			if value > q.window[i] {
				q.window = q.window[:i]
			} else {
				break
			}
			i--
		}
		q.window = append(q.window, value)
	}
}

func (q *maxSlidingWindowQueue) pop() {
	if len(q.window) > 1 {
		q.window = q.window[1:]
	} else {
		q.window = make([]int, 0)
	}

}

func (q *maxSlidingWindowQueue) getMax() int {
	if len(q.window) > 0 {
		return q.window[0]
	} else {
		return math.MinInt
	}
}

func maxSlidingWindow1(nums []int, k int) []int {
	result := make([]int, 0)
	if k == 1 {
		return nums
	}
	q := &maxSlidingWindowQueue{}
	for i := 0; i < len(nums); i++ {
		num := nums[i]
		if i < k {
			q.push(num)
			if i == k-1 {
				result = append(result, q.getMax())
			}
		} else {
			if nums[i-k] == q.getMax() {
				q.pop()
			}
			q.push(num)
			result = append(result, q.getMax())
		}
	}
	return result
}

// Solution 2
func maxSlidingWindow2(nums []int, k int) []int {
	result := make([]int, 0)
	return result
}
