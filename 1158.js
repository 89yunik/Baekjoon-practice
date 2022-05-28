//baekjoon 1158

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [commands, result] = [[], []];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    commands.push(input[i].split(" ").map((el) => parseInt(el)));
  }
} //입력값 정수로 변환하여 commands에 저장

let [arr, current] = [
  new Array(commands[0][0]).fill().map((arr, i) => i + 1),
  commands[0][1] - 1,
];
while (arr.length) {
  result.push(...arr.splice(current, 1));
  current = (current + commands[0][1] - 1) % arr.length;
} //current를 이동시키며 배열 요소 제거 - result에 저장
console.log("<" + result.join(", ") + ">");
