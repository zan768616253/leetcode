import TreeNode from './TreeUtility.ts';

class BST {
  root: TreeNode<number>;

  len: number;

  constructor(root: TreeNode<number>) {
    this.root = root;
    this.len = 1;
  }

  public InOrderTraversal(): void {
    this.inOrderTraversal(this.root);
  }

  private inOrderTraversal(root: TreeNode<number> | undefined): void {
    if (root === undefined) {
      return;
    }
    this.inOrderTraversal(root.left);
    console.log(root.value);
    this.inOrderTraversal(root.right);
  }

  public PreOrderTraversal(): void {
    this.preOrderTraversal(this.root);
  }

  private preOrderTraversal(root: TreeNode<number> | undefined): void {
    if (root === undefined) {
      return;
    }
    console.log(root.value);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  }

  public Add(value: number): void {
    this.root = this.add(this.root, value);
    this.len++;
  }

  private add(root: TreeNode<number> | undefined, value: number): TreeNode<number> {
    if (root === undefined) {
      return new TreeNode<number>(value);
    }
    if (value > root.value) {
      root.right = this.add(root.right, value);
    } else if (value < root.value) {
      root.left = this.add(root.left, value);
    }
    return root;
  }

  public Remove(value: number): void {
    const node: TreeNode<number> | undefined = this.remove(this.root, value);
    if (node != undefined) {
      this.len--;
    }
  }

  private remove(node: TreeNode<number> | undefined, value: number): TreeNode<number> | undefined {
    if (node == undefined) {
      return node;
    } if (value > node.value) {
      node.right = this.remove(node.right, value);
    } else if (value < node.value) {
      node.left = this.remove(node.left, value);
    } else if (node.left == undefined) {
      node = node.right;
    } else {
      let tmp: TreeNode<number> | undefined = node.left;
      while (tmp.right != undefined) {
        tmp = tmp.right;
      }
      node.value = tmp.value;
      node.left = this.remove(node.left, node.value);
    }
    return node;
  }

  public Search(value: number): TreeNode<number> | undefined {
    return this.search(this.root, value);
  }

  private search(root: TreeNode<number> | undefined, value: number): TreeNode<number> | undefined {
    if (root === undefined) {
      return root;
    } if (value > root.value) {
      return this.search(root.right, value);
    } if (value < root.value) {
      return this.search(root.left, value);
    }
    return root;
  }
}

function playBSTree() {
  const n: TreeNode<number> = new TreeNode<number>(1);
  n.left = new TreeNode<number>(0);
  n.right = new TreeNode<number>(2);

  const bst: BST = new BST(n);
  bst.InOrderTraversal();
  console.log('**********');
  bst.PreOrderTraversal();
  console.log('**********');
  bst.Add(5);
  bst.Add(4);
  bst.Add(6);
  bst.InOrderTraversal();
  console.log('**********');
  bst.Remove(5);
  bst.InOrderTraversal();
  console.log('**********');
  const node: TreeNode<number> | undefined = bst.Search(5);
  if (node) {
    console.log('found 5');
  } else {
    console.log('not found 5');
  }
  console.log('**********');
}

playBSTree();
