function isMonotonic(nums) {
  const n = nums.length;
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
const result = isMonotonic(nums);
console.log(result); // Output: true (The array [1, 2, 3, 4, 5] is monotonic increasing)
