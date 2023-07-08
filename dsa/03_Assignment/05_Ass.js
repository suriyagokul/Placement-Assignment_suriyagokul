function plusOne(digits) {
  const n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  // If all digits are 9, add an additional digit 1 at the beginning
  digits.unshift(1);
  return digits;
}

// Example usage:
const digits = [1, 2, 9];
const result = plusOne(digits);
console.log(result); // Output: [1, 3, 0] (Incremented array of digits)
