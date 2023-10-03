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


function lengthOfLongestSubstring(s: string): number {
	let max: number = 0
	let left: number = 0

	for (let right = 0; right < s.length; right++) {
		for (let i = left; i < right; i++) {
			if (s[i] == s[right]) {
				left = i + 1
				break
			}
		}

		if (max < right - left + 1) {
			max = right - left + 1
		}
	}

	return max
}