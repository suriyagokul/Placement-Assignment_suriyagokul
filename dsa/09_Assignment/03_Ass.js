function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

let n = 4;
let result = factorial(n);
console.log(result);
