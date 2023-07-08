function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage:
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);
console.log(result); // Output: 4 (Index of the target value 9 in the array)
