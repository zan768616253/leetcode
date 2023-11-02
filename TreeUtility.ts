/* eslint-disable no-use-before-define */
/**
 *                  8  root = 10 | root = <- deleteNode(10) ->
 *               /     \
 *             6        25
 *           /   \    /    \
 *          4    8   15    30
 *           \
 *            5
 *
 */

export default class TreeNode<T> {
  public value: T;

  public left?: TreeNode<T>;

  public right?: TreeNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}
