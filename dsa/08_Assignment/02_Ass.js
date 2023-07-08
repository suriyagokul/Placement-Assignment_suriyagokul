function checkValidString(s) {
  let leftStack = [];
  let asteriskStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftStack.push(i);
    } else if (s[i] === '*') {
      asteriskStack.push(i);
    } else {
      if (leftStack.length > 0) {
        leftStack.pop();
      } else if (asteriskStack.length > 0) {
        asteriskStack.pop();
      } else {
        return false;
      }
    }
  }

  while (leftStack.length > 0 && asteriskStack.length > 0) {
    if (leftStack.pop() > asteriskStack.pop()) {
      return false;
    }
  }

  return leftStack.length === 0;
}

let s = "()";
let result = checkValidString(s);
console.log(result);
