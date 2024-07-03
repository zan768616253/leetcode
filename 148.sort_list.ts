/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/no-unresolved

import ListNode from './LinkedListUtility';

function getMiddleNode(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return head;
    }
    let slow = head;
    let fast = head.next.next;

    while (fast != null && fast.next != null) {
        if (slow.next) {
            slow = slow.next;
        }
        fast = fast.next.next;
    }

    return slow;
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dmy = new ListNode();
    let curr = dmy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1 != null) {
        curr.next = l1;
    } else {
        curr.next = l2;
    }
    return dmy.next;
}

function sortList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return head;
    }
    const middleNode: ListNode | null = getMiddleNode(head);
    const l1: ListNode | null = head;
    const l2: ListNode | null = middleNode == null ? null : middleNode.next;
    if (middleNode != null) {
        middleNode.next = null;
    }
    const left = sortList(l1);
    const right = sortList(l2);
    return mergeTwoLists(left, right);
}

function test() {
    const head = new ListNode(4);
    head.next = new ListNode(2);
    head.next.next = new ListNode(1);
    head.next.next.next = new ListNode(3);

    const result = sortList(head);
    return true;
}

test();
