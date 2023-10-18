package main

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/

func subarraySum1(nums []int, k int) int {
	// No need to save all the index, but save the count of apparence
	tmp := map[int][]int{
		0: {0},
	}
	sum := 0
	count := 0
	for i, num := range nums {
		sum = sum + num
		target := sum - k
		if v, ok := tmp[target]; ok {
			count = count + len(v)
		}
		if tmp[sum] != nil {
			tmp[sum] = append(tmp[sum], i)
		} else {
			tmp[sum] = []int{i}
		}
	}
	return count
}

// minimum memory
func subarraySum2(nums []int, k int) int {
	count := 0

	for right := 0; right < len(nums); right++ {
		if nums[right] == k {
			count++
		}
		sum := nums[right]
		for left := right - 1; left >= 0; left-- {
			sum = sum + nums[left]
			if sum == k {
				count++
			}
		}
	}

	return count
}

// minimum time
func subarraySum3(nums []int, k int) int {
	count := 0
	hash := map[int]int{0: 1}
	preSum := 0

	for i := 0; i < len(nums); i++ {
		preSum += nums[i]
		if hash[preSum-k] > 0 {
			count += hash[preSum-k]
		}
		hash[preSum]++
	}
	return count
}

/*
function subarraySum(nums: number[], k: number): number {
    let count: number = 0;
    const sumCountMap: Map<number, number> = new Map();
    sumCountMap.set(0, 1);

    let sum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const target: number = sum - k;
        const targetCount: number | undefined = sumCountMap.get(target);

        if (targetCount !== undefined) {
            count += targetCount;
        }

        const sumCount: number = (sumCountMap.get(sum) ?? 0) + 1;
        sumCountMap.set(sum, sumCount);
    }

    return count;
}
*/
