import ListNode from './LinkedListUtility.ts';

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]
*/

function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  let count = 0;

  // Helper function to recursively find and remove the nth node from the end
  function removeNode(current: ListNode | null): ListNode | null {
    if (current === null) {
      return null;
    }

    // Recursive call to move to the end of the list
    current.next = removeNode(current.next);

    // Increment the count as we backtrack
    count++;

    // Check if the current node is the nth node from the end
    if (count === n) {
      return current.next; // Remove the nth node
    }

    return current;
  }

  // Add a dummy node to handle cases where the head needs to be removed
  const dummy = new ListNode(0);
  dummy.next = head;

  // Start the recursive process
  removeNode(dummy);

  return dummy.next;
}

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  const dmy = new ListNode(0, head);
  let slow: ListNode | null = dmy;
  let fast: ListNode | null = dmy;

  // fast 向后移动 n 个位置
  while (n-- > 0) {
    if (!fast) {
      return dmy.next;
    }
    fast = fast.next;
  }

  // fast 走到最后，slow 此时是 倒数第 n 个元素的前一个
  while (fast !== null && fast.next !== null && slow !== null && slow.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // slow 的下一个节点就是要删除的节点
  if (slow.next != null) {
    slow.next = slow.next.next;
  }

  return dmy.next;
}

function testRemoveNthFromEnd() {
  // const head = new ListNode(1);
  // head.next = new ListNode(2);
  // head.next.next = new ListNode(3);
  // head.next.next.next = new ListNode(4);
  // head.next.next.next.next = new ListNode(5);

  const head = new ListNode(1);
  const result = removeNthFromEnd1(head, 1);
}

testRemoveNthFromEnd();
