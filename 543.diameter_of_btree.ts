/*
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them
*/

import { TreeNode, ArrayToTree } from './TreeOfNumber';



function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxLength = 0

    function loop(root: TreeNode | null): number {
        if (root == null) {
            return 0
        }
        let leftMax = loop(root.left)
        let rightMax = loop(root.right)

        let diameter = leftMax + rightMax
        maxLength = Math.max(diameter, maxLength)

        return Math.max(leftMax, rightMax) + 1
    }

    loop(root)
    return maxLength
};

// const root = ArrayToTree([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2])

const root = ArrayToTree([1, 2])

console.log(diameterOfBinaryTree(root))