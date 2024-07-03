/* 
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: [] 
*/


import { TreeNode, ArrayToTree } from './TreeOfNumber';

function levelOrder1(root: TreeNode | null): number[][] {
    const result: number[][] = []

    function iterate(root: TreeNode | null, level: number) {
        if (root == null) {
            return
        }
        if (level == result.length) {
            result[level] = [root.val]
        } else {
            result[level].push(root.val)
        }

        iterate(root.left, level + 1)
        iterate(root.right, level + 1)

        return
    }

    iterate(root, 0)

    return result
};

function levelOrder2(root: TreeNode | null): number[][] {
    if (root == null) {
        return []
    }

    const result: number[][] = []

    const dequeue: TreeNode[] = []

    dequeue.push(root)

    while (dequeue.length) {
        const temp: number[] = [];

        const tempQ: TreeNode[] = [];
        while (dequeue.length) {
            const node = dequeue.shift()
            temp.push(node!.val)

            if (node!.left != null) {
                tempQ.push(node!.left)
            }
            if (node!.right != null) {
                tempQ.push(node!.right)
            }
        }

        result.push(temp)
        dequeue.push(...tempQ)
    }

    return result
};



const root = ArrayToTree([3, 9, 20, null, null, 15, 7])

levelOrder2(root)