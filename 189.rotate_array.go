package main

import (
	"fmt"
	"log"
)

/*
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

// 数组反转: 注意 go 的Slice和 Map 是浅拷贝，其余（如 Array，Struct，Int, Bool, String）均为深拷贝
func rotate1(nums []int, k int) {
	k = k % len(nums)
	// nums = append(nums[len(nums)-k:], nums[0:len(nums)-k]...)
	copy(nums, append(nums[len(nums)-k:], nums[0:len(nums)-k]...))
	fmt.Print(nums)
}

// nums = append(nums[len(nums)-k:], nums[0:len(nums)-k]...)
// copy(nums, append(nums[len(nums)-k:], nums[0:len(nums)-k]...))

func sliceCopy() {
	// reslicing创建的新切片append是什么行为,会产生什么结果
	s := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	log.Println(len(s), cap(s), "s:", s)

	s1 := s[2:5]
	log.Println(len(s1), cap(s1), "s1:", s1)
	s1 = append(s1, 100)
	log.Println(len(s1), cap(s1), "s1:", s1)
	log.Println(len(s), cap(s), "s:", s)

	/*s1通过reslicing创建,和s共享一个底层数组,append后修改了共同的数组值
	 *2022/07/31 15:27:37 10 10 s:  [0 1 2 3 4 5 6 7 8 9]
	 *2022/07/31 15:27:38 3 8   s1: [2 3 4]
	 *2022/07/31 15:27:38 4 8   s1: [2 3 4 100]
	 *2022/07/31 15:29:19 10 10 s:  [0 1 2 3 4 100 6 7 8 9]
	 */

	// append到原有的底层数组不够装的时候,会与原数组脱离,s1的底层数组不再是s的底层数组
	s1 = append(s1, 200, 300, 400, 500, 600, 700, 800, 900, 1000)
	log.Println(len(s1), cap(s1), "s1:", s1)
	log.Println(len(s), cap(s), "s:", s)
	/*
	 *2022/07/31 16:09:29 13 16 s1: [2 3 4 100 200 300 400 500 600 700 800 900 1000]
	 *2022/07/31 16:09:49 10 10 s:  [0 1 2 3 4 100 6 7 8 9]
	 */
}

/*
nums = "----->-->"; k=3
result = "-->----->";

reverse "----->-->" we can get "<--<-----"
reverse "<--" we can get "--><-----"
reverse "<-----" we can get "-->----->"
this visualization help me figure it out :)
*/

func rotate2(nums []int, k int) {
	sz := len(nums)
	k = k % sz // 因为k可能大于sz

	reverse(nums)
	reverse(nums[:k])
	reverse(nums[k:])
}

func reverse(nums []int) {
	sz := len(nums)
	for i := 0; i < sz/2; i++ {
		nums[i], nums[sz-1-i] = nums[sz-1-i], nums[i]
	}
}
