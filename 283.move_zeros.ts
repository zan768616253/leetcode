function moveZeroes(nums: number[]): void {
    let i: number = 0;
    let j: number = i;
    while (i < nums.length) {
        if (nums[i] == 0) {
            j = i
            while (j < nums.length) {
                if (nums[j] != 0) {
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
                j++;
            }
        }
        i++;
    }
    console.log(nums)
};

moveZeroes([0, 1, 0, 3, 12])