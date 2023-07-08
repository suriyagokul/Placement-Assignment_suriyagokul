function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }

  while (n % 3 === 0) {
    n = n / 3;
  }

  return n === 1;
}

let n = 27;
let result = isPowerOfThree(n);
console.log(result);

