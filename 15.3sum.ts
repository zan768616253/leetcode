function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  let x: number = 0;
  let y: number = 1;
  let z: number = nums.length - 1;

  while (x < y && y < z) {
    if (x > 0 && nums[x] === nums[x - 1]) {
      x++;
      y = x + 1;
      z = nums.length - 1;
      continue;
    }
    while (y < z) {
      if (y > x + 1 && nums[y] === nums[y - 1]) {
        y++;
        continue;
      }
      if (z < nums.length - 1 && nums[z] === nums[z + 1]) {
        z--;
        continue;
      }
      if (nums[x] + nums[y] + nums[z] === 0) {
        result.push([nums[x], nums[y], nums[z]]);
        z--;
        y++;
      } else if (nums[x] + nums[y] + nums[z] > 0) {
        z--;
      } else {
        y++;
      }
    }
    x++;
    y = x + 1;
    z = nums.length - 1;
  }

  return result;
}
