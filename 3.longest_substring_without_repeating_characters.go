package main

/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

func lengthOfLongestSubstring(s string) int {
	max := 0
	left := 0
	for i := 0; i < len(s); i++ {
		for j := left; j < i; j++ {
			if s[j] == s[i] {
				left = j + 1
				break
			}
		}
		tmp := i - left + 1
		if tmp > max {
			max = tmp
		}
	}
	return max
}
