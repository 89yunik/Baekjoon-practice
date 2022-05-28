//baekjoon 10845

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [commands, queue, result] = [[], [], ""];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    commands.push(input[i].split(" "));
  }
}

//commands에 행별로 명령 나눠 담기

for (command of commands) {
  switch (command[0]) {
    case "push":
      queue.push(parseInt(command[1]));
      break;
    case "pop":
      queue.length !== 0 ? (result += queue.shift()) : (result += -1);
      result += "\n";
      break;
    case "size":
      result += queue.length + "\n";
      break;
    case "empty":
      queue.length === 0 ? (result += 1) : (result += 0);
      result += "\n";
      break;
    case "front":
      queue.length !== 0 ? (result += queue[0]) : (result += -1);
      result += "\n";
      break;
    case "back":
      queue.length !== 0 ? (result += queue[queue.length - 1]) : (result += -1);
      result += "\n";
      break;
    default:
      result += "\n";
  } //switch문 사용하여 queue 명령 실행하여 result에 저장
}
console.log(result);
