//baekjoon 10828

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [commands, result] = [[], ""];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    commands.push(input[i].split(" "));
  }
} //commands에 행별로 명령 나눠 담기
let stack = [];
for (command of commands) {
  switch (command[0]) {
    case "push":
      stack.push(parseInt(command[1]));
      break;
    case "pop":
      stack.length !== 0 ? (result += stack.pop()) : (result += -1);
      result += "\n";
      break;
    case "size":
      result += stack.length + "\n";
      break;
    case "empty":
      stack.length === 0 ? (result += 1) : (result += 0);
      result += "\n";
      break;
    case "top":
      stack.length !== 0 ? (result += stack[stack.length - 1]) : (result += -1);
      result += "\n";
      break;
    default:
      result += "\n";
  }
} //switch문 사용하여 stack 명령 실행하여 result에 저장
console.log(result);
