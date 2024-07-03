/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
*/

function searchTarget(row: number[], target: number): boolean {
    const mid: number = Math.floor(row.length / 2);
    if (row.length === 0) {
        return false;
    }
    if (row[mid] === target) {
        return true;
    } if (row[mid] > target) {
        return searchTarget(row.slice(0, mid), target);
    }
    return searchTarget(row.slice(mid + 1), target);
}

function searchMatrix2(matrix: number[][], target: number): boolean {
    let result: boolean = false;

    const mid: number = Math.floor(matrix[0].length / 2);

    let row: number = -1;
    for (let i: number = 0; i < matrix.length; i++) {
        if (matrix[i][mid] === target) {
            return true;
        } if (matrix[i][mid] > target) {
            row = i;
            break;
        }
    }

    if (row === 0) {
        const search = matrix[0].slice(0, mid);
        result = searchTarget(search, target);
    } else if (row === -1) {
        const search = matrix[matrix.length - 1].slice(mid + 1);
        result = searchTarget(search, target);
    } else {
        const search1 = matrix[row].slice(0, mid);
        const search2 = matrix[row - 1].slice(mid + 1);
        result = searchTarget(search1, target);
        if (!result) {
            result = searchTarget(search2, target);
        }
    }

    return result;
}

searchMatrix2([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5);
