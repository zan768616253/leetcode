/*
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  let left: number = 0;
  let right: number = p.length - 1;
  const pMap = new Map();
  for (let i = 0; i < p.length; i++) {
    const count: number = pMap.get(p[i]);
    if (count) {
      pMap.set(p[i], count + 1);
    } else {
      pMap.set(p[i], 1);
    }
  }

  const sMap = new Map();
  while (right < s.length) {
    if (left === 0) {
      for (let i = left; i <= right; i += 1) {
        const count: number = sMap.get(s[i]);
        if (count) {
          sMap.set(s[i], count + 1);
        } else {
          sMap.set(s[i], 1);
        }
      }
    } else {
      const removing: string = s[left - 1];
      const newCount: number = sMap.get(removing) - 1;
      sMap.set(removing, newCount);
      const count: number = sMap.get(s[right]);
      if (count) {
        sMap.set(s[right], count + 1);
      } else {
        sMap.set(s[right], 1);
      }
    }

    let Anagram: boolean = true;
    for (const [key, value] of pMap) {
      if (sMap.get(key) !== value) {
        Anagram = false;
        break;
      }
    }

    if (Anagram) {
      result.push(left);
    }
    left += 1;
    right += 1;
  }

  return result;
}

findAnagrams('cbaebabacd', 'abc');
