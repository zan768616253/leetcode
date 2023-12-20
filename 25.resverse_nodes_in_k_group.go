package main

import "fmt"

/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/

func testReverseKGroup() {
	head := &ListNode{Val: 1}
	head.Next = &ListNode{Val: 2}
	// head.Next.Next = &ListNode{Val: 3}
	// head.Next.Next.Next = &ListNode{Val: 4}
	// head.Next.Next.Next.Next = &ListNode{Val: 5}

	result := reverseKGroup(head, 2)
	fmt.Println(result.Val)
}

func reverseKGroup(head *ListNode, k int) *ListNode {

	dummy := &ListNode{}
	dummy.Next = head
	slow := dummy
	fast := dummy

	count := k
	for fast.Next != nil || count == 0 {
		if count > 0 {
			fast = fast.Next
			count--
		} else {
			start := slow.Next
			next := fast.Next
			fast.Next = nil
			cur := reverseLinkedList(start)
			slow.Next = cur
			start.Next = next

			fast = start
			slow = start
			count = k
		}
		if fast == nil {
			break
		}
	}

	return dummy.Next
}

func reverseLinkedListRecursive(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	newHead := reverseLinkedListRecursive(head.Next)
	head.Next.Next = head
	head.Next = nil

	return newHead
}

func reverseLinkedList(head *ListNode) *ListNode {
	var prev, next *ListNode
	current := head

	for current != nil {
		next = current.Next
		current.Next = prev
		prev = current
		current = next
	}

	return prev
}
