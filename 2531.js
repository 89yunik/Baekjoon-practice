// baekjoon 2531
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, d, k, c] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
input = input.map((e) => Number(e));
//입력값 정리 ex: N=8, d=30, k=4, c=30, input=[7, 9, 7, 30, 2, 7, 9, 25]

let [answer, answerSet] = [0, []];

for (let i = 0; i < N; i++) {
  const [start, end] = [i, i + k];
  const dishes =
    end <= N
      ? input.slice(start, end)
      : [...input.slice(start, N), ...input.slice(0, end % N)];
  //input을 i부터 i+k번째까지 잘라 dish에 저장 ex:dishes=[7,9,7,30],...,[25,7,9,7]
  const dishSet = [...new Set(dishes)];
  //dish의 중복 제거 ex:dishSet=[7,9,30],...,[25,7,9]
  if (
    dishSet.length > answer ||
    (!dishSet.includes(c) && dishSet.length === answer)
  ) {
    answer = dishSet.length;
    answerSet = dishSet;
  } //dishSet의 length가 answer보다 크거나 answer와 같고 c를 포함하지 않을 경우 answer과 answerSet을 변경
}

answer = answerSet.includes(c) ? answer : answer + 1; // answerSet이 c를 포함할 경우 그대로, 아닐 경우 1을 더한 값으로 변경

console.log(answer);
