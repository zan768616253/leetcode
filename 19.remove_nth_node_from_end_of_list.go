package main

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

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	fake := &ListNode{Val: -1}
	fake.Next = head

	count := 0
	var remove func(current *ListNode) *ListNode
	remove = func(current *ListNode) *ListNode {
		if current == nil {
			return current
		}
		current.Next = remove(current.Next)
		count++
		if count == n {
			return current.Next
		}
		return current
	}

	fake = remove(fake)

	return fake.Next
}
