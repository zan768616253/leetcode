export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function ArrayToTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]!);
    const queue: (TreeNode | null)[] = [root];
    let i = 1;

    while (i < arr.length) {
        const currentNode = queue.shift()!;

        if (currentNode !== null) {
            if (i < arr.length && arr[i] !== null) {
                currentNode.left = new TreeNode(arr[i]!);
                queue.push(currentNode.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null) {
                currentNode.right = new TreeNode(arr[i]!);
                queue.push(currentNode.right);
            }
            i++;
        }
    }

    return root;
}