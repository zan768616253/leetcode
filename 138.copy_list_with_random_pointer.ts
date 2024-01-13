/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */

class RandomNode {
  val: number;

  next: RandomNode | null;

  random: RandomNode | null;

  constructor(val?: number, next?: RandomNode, random?: RandomNode) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.random = (random === undefined ? null : random);
  }
}

function copyRandomList2(head: RandomNode | null): RandomNode | null {
  if (!head) {
    return null;
  }

  const dummy = new RandomNode();
  const newDummy = new RandomNode();
  dummy.next = head;
  let current: RandomNode | null = head;
  let newHead: RandomNode | null = newDummy;
  const nodeMap = new Map();

  while (current) {
    newHead.next = new RandomNode(current.val);
    newHead = newHead.next;
    nodeMap.set(current, newHead);
    current = current.next;
  }

  current = dummy.next;
  newHead = newDummy.next;

  while (current && newHead) {
    const { random } = current;
    const newRandom = nodeMap.get(random);
    newHead.random = newRandom;

    newHead = newHead?.next;
    current = current.next;
  }

  return newDummy.next;
}

function copyRandomList1(head: RandomNode | null): RandomNode | null {
  const dummy = new RandomNode();
  const nodeList: RandomNode[] = [];
  const oriNodeMap = new Map();
  dummy.next = head;

  let index = 0;
  function copyList(headNode: RandomNode | null): RandomNode | null {
    if (headNode == null) {
      return headNode;
    }
    headNode.next = copyList(headNode.next);
    const newNode = new RandomNode(headNode.val);
    oriNodeMap.set(headNode, index);

    if (nodeList.length > 0) {
      const [firstNode, ...restNodes] = nodeList;
      newNode.next = firstNode;
    }
    nodeList.unshift(newNode);
    index++;

    return nodeList[0];
  }

  if (head == null) {
    return null;
  } if (head.next == null) {
    return new RandomNode(head.val);
  }

  const newHead = copyList(head);
  const dummy2 = new RandomNode();
  dummy2.next = newHead;

  head = dummy.next;
  let i = 0;
  while (head) {
    const { random } = head;
    if (random) {
      const oriIndex = oriNodeMap.get(random);
      nodeList[i].random = nodeList[oriIndex];
    } else {
      nodeList[i].random = null;
    }
    head = head.next;
    i++;
  }
  head = dummy.next;
  return newHead;
}

function testCopyRandomList() {
  const nodeList: RandomNode[] = [];
  const head = new RandomNode(7);
  nodeList.push(head);
  head.next = new RandomNode(13);
  nodeList.push(head.next);
  head.next.next = new RandomNode(11);
  nodeList.push(head.next.next);
  head.next.next.next = new RandomNode(10);
  nodeList.push(head.next.next.next);
  head.next.next.next.next = new RandomNode(1);
  nodeList.push(head.next.next.next.next);

  head.random = null;
  head.next.random = nodeList[0];
  head.next.next.random = nodeList[4];
  head.next.next.next.random = nodeList[2];
  head.next.next.next.next.random = nodeList[0];

  const result = copyRandomList1(head);
}

testCopyRandomList();
