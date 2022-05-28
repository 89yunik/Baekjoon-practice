// baekjoon 2470
const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\r\n");

const N = input[0];
const solutions = input[1]
  .split(" ")
  .map((solution) => Number(solution))
  .sort((a, b) => a - b);
let [alkaline, acid] = [
  solutions.filter((solution) => solution < 0),
  solutions.filter((solution) => solution > 0),
];
//입력값 정리 ex: N = 5, solutions = [-99, -2, -1, 4, 98], alkaline = [-99, -2, -1], acid = [4, 98]

const alMin =
  alkaline.length >= 2
    ? Math.abs(alkaline[alkaline.length - 2] + alkaline[alkaline.length - 1])
    : undefined; //두 알칼리성 용액으로 만든 최솟값 ex: |(-2)+(-1)|= 3
const acMin = acid.length >= 2 ? acid[0] + acid[1] : undefined; //두 산성 용액으로 만든 최솟값 ex: 4+98= 103
let sum = Math.min(...[alMin, acMin].filter((e) => e !== undefined));
let result =
  sum === alMin
    ? [alkaline[alkaline.length - 2], alkaline[alkaline.length - 1]]
    : [acid[0], acid[1]];
//alMin, acMin 중 최솟값을 sum에 저장하고 결과값을 초기화 ex: result = [-2, -1]
let alkalineIndex = alkaline.length - 1;
acid.forEach((solution) => {
  while (
    Math.abs(solution + alkaline[alkalineIndex]) >
      Math.abs(solution + alkaline[alkalineIndex - 1]) &&
    alkalineIndex > 0
  )
    alkalineIndex--; //산성 용액을 기준으로 절대값이 가장 낮아지는 알칼리성 용액의 index를 찾음 ex: 4 -> -2의 index:1
  const mix = Math.abs(solution + alkaline[alkalineIndex]);
  if (sum > mix) {
    //찾은 값을 기존 최솟값과 비교하여 더 작은 경우 결과값을 변경 ex: sum=|-2-1|=3, mix=|4-2|=2
    result = [alkaline[alkalineIndex], solution];
    sum = mix;
  }
});
console.log(result[0], result[1]);
