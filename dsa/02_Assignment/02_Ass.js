function distributeCandies(candyType) {
  const uniqueCandyTypes = new Set(candyType);
  const maxCandies = candyType.length / 2;
  
  return Math.min(uniqueCandyTypes.size, maxCandies);
}

// Example usage:
const candyType = [1, 1, 2, 2, 3, 3];
const result = distributeCandies(candyType);
console.log(result); // Output: 3 (Alice can eat at most 3 different types of candies)
