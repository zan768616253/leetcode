package main

/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true
*/

func isPalindrome0(head *ListNode) bool {
	cache := make([]int, 0)
	for head != nil {
		cache = append(cache, head.Val)
		head = head.Next
	}

	if len(cache)%2 != 0 {
		return false
	}

	max := len(cache) - 1
	for i := 0; i < len(cache)/2; i++ {
		if cache[i] != cache[max-i] {
			return false
		}
	}
	return true
}

func isPalindrome1(head *ListNode) bool {
	tmp := head

	var recursivelyCheck func(*ListNode) bool
	recursivelyCheck = func(curNode *ListNode) bool {
		if curNode != nil {
			if !recursivelyCheck(curNode.Next) {
				return false
			}
			if curNode.Val != head.Val {
				return false
			}
			head = head.Next
		}
		return true
	}

	return recursivelyCheck(tmp)
}

func testIsPalindrome() bool {
	head := &ListNode{Val: 1}
	head.Next = &ListNode{Val: 2}
	head.Next.Next = &ListNode{Val: 2}
	head.Next.Next.Next = &ListNode{Val: 1}
	return isPalindrome1(head)
}
