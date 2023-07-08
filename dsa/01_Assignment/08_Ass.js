function findErrorNums(nums) {
  const n = nums.length;
  const numSet = new Set();
  let duplicate, missing;

  // Find the duplicate number
  for (let num of nums) {
    if (numSet.has(num)) {
      duplicate = num;
      break;
    }
    numSet.add(num);
  }

  // Find the missing number
  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}

// Example usage:
const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3] (2 is duplicated, 3 is missing)
