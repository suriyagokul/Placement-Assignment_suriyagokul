function containsDuplicate(nums) {
  const numSet = new Set();

  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

// Example usage:
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true (1 appears twice in the array)
