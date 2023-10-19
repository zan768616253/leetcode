package main

/*
Given two strings s and t of lengths m and n respectively, return the minimum window
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.



Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

func minWindow(s string, t string) string {
	length := len(s)
	right := 0
	left := 0

	sHash := make(map[rune]int)
	tHash := make(map[rune]int)

	result := ""

	for _, v := range t {
		if value, ok := tHash[v]; ok {
			tHash[v] = value + 1
		} else {
			tHash[v] = 1
		}
	}

	for right <= length && left <= length {
		if check(sHash, tHash) {
			if result == "" || right-left < len(result) {
				result = s[left:right]
			}
			sHash[rune(s[left])] = sHash[rune(s[left])] - 1
			left++
		} else {
			if right < length {
				if count, ok := sHash[rune(s[right])]; ok {
					sHash[rune(s[right])] = count + 1
				} else {
					sHash[rune(s[right])] = 1
				}
			}
			right++
		}
	}

	return result
}

func check(sHash, tHash map[rune]int) bool {
	for key, tv := range tHash {
		sv, ok := sHash[key]
		if !ok {
			return false
		}
		if sv < tv {
			return false
		}
	}
	return true
}
