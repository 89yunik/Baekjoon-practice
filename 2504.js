//baekjoon 2504

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [stack, result] = [[], 0];

let command = input[0].split("");
for (next of command) {
  if (next === "(" || next === "[") stack.push(next);
  else {
    let temp = 0;
    while (typeof stack[stack.length - 1] === "number") temp += stack.pop();
    if (temp === 0) temp = 1;
    if (stack.length) {
      let prev = stack.pop();
      if (prev === "(" && next === ")") stack.push(temp * 2);
      else if (prev === "[" && next === "]") stack.push(temp * 3);
      else {
        result = 0;
        stack = [];
        break;
      }
    } else {
      result = 0;
      stack = [];
      break;
    }
  }
}

for (let subtotal of stack) {
  if (typeof subtotal === "number") result += subtotal;
  else {
    result = 0;
    break;
  }
}

console.log(result);
