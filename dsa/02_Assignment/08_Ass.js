function minDifference(nums, k) {
  const n = nums.length;
  
  if (n <= 4) {
    return 0;
  }
  
  nums.sort((a, b) => a - b);
  
  let minScore = nums[n - 1] - nums[0];
  
  for (let i = 0; i < 4; i++) {
    const low = nums[i];
    const high = nums[n - (4 - i)];
    
    minScore = Math.min(minScore, high - low);
  }
  
  return minScore;
}

// Example usage:
const nums = [5, 3, 2, 4];
const k = 1;
const result = minDifference(nums, k);
console.log(result); // Output: 0 (The minimum score is 0 after adjusting the elements)
