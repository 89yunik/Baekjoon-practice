let [[N], I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
let dp = Array(N).fill(0)
for (let i = 1; i < N; i++) {
  let j = i - 1
  while (I[i] > I[j] && j >= 0) j = dp[j] - 1
  dp[i] = j + 1
}
console.log(dp.join(' '))

// let fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().split("\r\n");

// let commands = [];

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== "") {
//     commands = input[i].split(" ").map((el) => parseInt(el));
//   }
// } //commands에 높이 정보 저장 ex: [6, 9, 5, 7, 4]

// let result = new Array(commands.length).fill(0); //results는 탑의 개수만큼 0으로 초기화 ex: [0, 0, 0, 0, 0]

// for (let i = 0; i < commands.length - 1; i++) {
//   let cnt = i; //i번째 탑부터 높이를 확인할 탑의 index인 cnt를 초기화
//   while (commands[i + 1] > commands[cnt] && cnt !== -1) {
//     cnt = result[cnt] - 1;
//   } //이전 탑들의 도착 정보를 참조, i+1번째 탑보다 높은 탑을 찾을 때까지 좌측으로 이동
//   result[i + 1] = cnt + 1; //i+1번째 탑의 결과 값을 구함
// }

// console.log(result.join(" "));
