package main

/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.



Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

func setZeroes(matrix [][]int) {
	m, n := len(matrix), len(matrix[0])

	setZero := func(r, c int) {
		matrix[r][c] = 0
	}

	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			if matrix[r][c] == 0 {
				for R := 0; r < m; R++ {
					defer setZero(R, c)
				}
				for C := 0; C < n; C++ {
					defer setZero(r, C)
				}
			}
		}
	}
}
