function moveZeroes(nums) {
  let insertPos = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos] = num;
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0] (All zeros moved to the end)
