function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return []; // No two numbers sum up to the target
}

// Example usage:
const nums = [2, 9, 7, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (nums[0] + nums[1] = 2 + 7 = 9)
