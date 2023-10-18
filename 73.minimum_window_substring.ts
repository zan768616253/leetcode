function minWindow1(s: string, t: string): string {
	let result: string = ""
	const sMap: Record<string, number> = {}
	const tMap: Record<string, number> = {}
	let left: number = 0
	let right: number = 0

	for (let i: number = 0; i < t.length; i++) {
		if (tMap[t[i]]) {
			tMap[t[i]] = tMap[t[i]] + 1
		} else {
			tMap[t[i]] = 1
		}
	}

	while (right <= s.length) {
		if (check(sMap, tMap)) {
			if (right - left < result.length || result == "") {
				result = s.substring(left, right)
			}
			sMap[s[left]] = sMap[s[left]] - 1
			left++
		} else {
			if (right < s.length) {
				if (sMap[s[right]]) {
					sMap[s[right]] = sMap[s[right]] + 1
				} else {
					sMap[s[right]] = 1
				}
			}
			right++
		}
	}

	return result
};

function check(sMap: Record<string, number>, tMap: Record<string, number>): boolean {
	for (const [key, value] of Object.entries(tMap)) {
		if (!sMap[key]) {
			return false
		} else if (sMap[key] < tMap[key]) {
			return false
		}
	}
	return true
}

function minWindow2(s: string, t: string): string {
	const map = {};
	for (let i = 0; i < t.length; i++) {
		const curStr = t[i];
		if (!map[curStr]) {
			map[curStr] = 1;
		} else {
			map[curStr]++;
		}
	}

	let start = 0;
	let end = 0;
	let currWinLength = 0;
	let minResLength = -1;
	let res = '';

	while (end < s.length) {
		const curStr = s[end];
		if (!map[curStr]) {
			map[curStr]--;
		} else {
			map[curStr]--;
		}
		if (map[curStr] >= 0) currWinLength++;
		while (currWinLength === t.length) {
			if (minResLength === -1 || minResLength > end - start + 1) {
				res = s.slice(start, end + 1);
				minResLength = end - start + 1;
			}
			const curStr = s[start];
			map[curStr]++;
			if (map[curStr] >= 1) currWinLength--;
			start++;
		}
		end++;
	}
	return res;
};


minWindow2("ADOBECODEBANC", "ABC")