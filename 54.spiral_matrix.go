package main

/*
Given an m x n matrix, return all elements of the matrix in spiral order.



Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

func spiralOrder(matrix [][]int) []int {
	result := make([]int, 0)

	top := 0
	bottom := len(matrix) - 1
	left := 0
	right := len(matrix[0]) - 1

	const (
		Right int = 0
		Down      = 1
		Left      = 2
		Up        = 3
	)

	round := 0
	var cur [2]int
	cur[0] = 0
	cur[1] = 0

	for top <= bottom && left <= right {
		switch round % 4 {
		case Right:
			tmp := cur[0]
			for tmp <= right {
				result = append(result, matrix[cur[1]][tmp])
				tmp += 1
			}
			cur[0] = right
			cur[1] += 1
			top += 1
		case Down:
			tmp := cur[1]
			for tmp <= bottom {
				result = append(result, matrix[tmp][cur[0]])
				tmp += 1
			}
			cur[0] -= 1
			cur[1] = bottom
			right -= 1
		case Left:
			tmp := cur[0]
			for tmp >= left {
				result = append(result, matrix[cur[1]][tmp])
				tmp -= 1
			}
			cur[0] = left
			cur[1] -= 1
			bottom -= 1
		case Up:
			tmp := cur[1]
			for tmp >= top {
				result = append(result, matrix[tmp][cur[0]])
				tmp -= 1
			}
			cur[0] += 1
			cur[1] = top
			left += 1
		}
		round++
	}

	return result
}
