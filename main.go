package main

func subarraySum(nums []int, k int) int {
    ans,sum:=0,0
    m:=map[int]int{}
    m[0]=1
    for i:=0;i<len(nums);i++{
        sum+=nums[i]
        ans+=m[sum-k]
        m[sum]++
    }
    return ans
}


func main() {
	subarraySum([]int{1, 1, 1}, 2)
}
