function trap(height: number[]): number {
  let count: number = 0;
  const leftMax: number[] = [];
  const rightMax: number[] = [];

  for (let i = 1; i < height.length; i++) {
    if (i === 1) {
      const [firstHeight] = height;
      leftMax[i] = firstHeight;
    } else {
      leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }
  }

  for (let i = height.length - 2; i >= 0; i--) {
    if (i === height.length - 2) {
      rightMax[i] = height[height.length - 1];
    } else {
      rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }
  }

  for (let i = 1; i < height.length - 1; i++) {
    if (leftMax[i] > height[i] && rightMax[i] > height[i]) {
      count = count + Math.min(leftMax[i], rightMax[i]) - height[i];
    }
  }

  return count;
}
