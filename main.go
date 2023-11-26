package main

func main() {
	target := &ListNode{Val: 1}
	isPalindrome(target)
}

func isPalindrome(head *ListNode) bool {
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
