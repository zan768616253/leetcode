package main

func getIntersectionNode1(headA, headB *ListNode) *ListNode {
	headAMap := make(map[*ListNode]bool)
	for tmp := headA; tmp != nil; tmp = tmp.Next {
		headAMap[tmp] = true
	}

	for tmp := headB; tmp != nil; tmp = tmp.Next {
		if headAMap[tmp] {
			return tmp
		}
	}
	return nil
}

func getIntersectionNode2(headA, headB *ListNode) *ListNode {
	la, lb := length(headA), length(headB)
	first, last := headA, headB
	if la > lb {
		step := la - lb
		for i := 0; i < step; i++ {
			first = first.Next
		}
	} else {
		step := lb - la
		for i := 0; i < step; i++ {
			last = last.Next
		}
	}

	for first != nil {
		if first == last {
			return first
		}

		first = first.Next
		last = last.Next
	}

	return nil
}

func length(head *ListNode) int {
	count := 0
	tmp := head
	for tmp != nil {
		count++
		tmp = tmp.Next
	}
	return count
}
