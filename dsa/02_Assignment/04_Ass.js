function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  const length = flowerbed.length;
  let i = 0;

  while (i < length) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1;
      count++;
    }

    if (count >= n) {
      return true;
    }

    i++;
  }

  return false;
}

// Example usage:
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result); // Output: true (1 new flower can be planted in an empty plot)
