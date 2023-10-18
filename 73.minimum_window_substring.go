package main

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
