/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/no-unresolved

import ListNode from './LinkedListUtility';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const dummy = new ListNode();
  if (lists.length === 0) {
    return null;
  }

  let tmp1: ListNode | null = lists.pop() ?? null;
  while (lists.length > 0) {
    let tmp2 = lists.pop();
    let tmpResult = new ListNode();
    const tmpHead = tmpResult;
    while (tmp1 != null && tmp2 != null) {
      if (tmp1.val <= tmp2.val) {
        tmpResult.next = tmp1;
        tmp1 = tmp1.next;
      } else {
        tmpResult.next = tmp2;
        tmp2 = tmp2.next;
      }
      tmpResult = tmpResult.next;
    }
    if (tmp1 != null) {
      tmpResult.next = tmp1;
    } else if (tmp2 != null) {
      tmpResult.next = tmp2;
    }
    tmp1 = tmpHead.next;
  }

  return tmp1;
}

function test() {
  const head1 = new ListNode(1);
  head1.next = new ListNode(4);
  head1.next.next = new ListNode(5);

  const head2 = new ListNode(1);
  head2.next = new ListNode(3);
  head2.next.next = new ListNode(4);

  const head3 = new ListNode(2);
  head3.next = new ListNode(6);

  const headList = [head1, head2, head3];

  const result = mergeKLists(headList);

  return true;
}

test();
