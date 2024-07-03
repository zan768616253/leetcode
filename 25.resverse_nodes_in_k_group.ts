import ListNode from './LinkedListUtility';

/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/
function reverseGroup(head: ListNode | null): ListNode | null {
    if (head == null || head?.next == null) {
        return head;
    }

    const newHead = reverseGroup(head.next);

    const prev = head;
    const cur = head.next;
    cur.next = prev;
    prev.next = null;

    return newHead;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;
    let slow: ListNode | null = dummy;

    while (head !== null) {
        let fast: ListNode | null = null;
        let start: ListNode | null = null;
        let end: ListNode | null = null;
        for (let i = 0; i < k; i++) {
            if (head === null) {
                return dummy.next;
            }
            if (i === 0) {
                start = head;
            } else if (i === k - 1) {
                end = head;
                fast = end.next;
            }
            head = head?.next;
        }
        if (end != null && start != null) {
            end.next = null;
            const newStart = reverseGroup(start);
            slow.next = newStart;
            start.next = fast;
            slow = start;
        }
    }

    return dummy.next;
}

function testReverseKGroup() {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const result = reverseKGroup(head, 2);
    return result;
}

function testReverseGroup() {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    const result = reverseGroup(head);
    return result;
}

// function reverseGroup2(head, tail) {
//   if (head == null) {
//     return head;
//   }
//   let pre = null; let
//     cur = head;
//   while (cur !== tail) {
//     const { next } = cur;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   return pre;
// }

testReverseKGroup();
