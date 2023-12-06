import ListNode from './LinkedListUtility';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head == null) {
    return head;
  }
  let counter:number = 1;
  function remove(node: ListNode | null): ListNode | null {
    if (node == null || node.next == null) {
      return node;
    }
    node = node.next;
    node = remove(node);
    if (counter === n + 1) {
      const tmp = node.next;
      node.next = tmp.next;
    }
    counter++;
    return node;
  }

  const result = new ListNode(-1);
  result.next = head;
  remove(head);

  return result.next;
}

function testRemoveNthFromEnd() {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  const result = removeNthFromEnd(head, 2);
}
