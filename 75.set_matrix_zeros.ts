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

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m: number = matrix.length;
    const n: number = (matrix[0] || []).length;

    const copyMatrix: number[][] = matrix.map((row: number[]) => ([...row]));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (copyMatrix[i][j] === 0) {
                matrix[i] = Array(n).fill(0);
                for (let x = 0; x < m; x++) {
                    matrix[x][j] = 0;
                }
            }
        }
    }
}
