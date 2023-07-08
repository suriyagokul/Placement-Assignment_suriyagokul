function findLHS(nums) {
  const frequencyMap = new Map();
  let maxLen = 0;

  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  for (let [num, count] of frequencyMap) {
    if (frequencyMap.has(num + 1)) {
      maxLen = Math.max(maxLen, count + frequencyMap.get(num + 1));
    }
  }

  return maxLen;
}

// Example usage:
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findLHS(nums);
console.log(result); // Output: 5 (The longest harmonious subsequence is [3, 2, 2, 2, 3])
