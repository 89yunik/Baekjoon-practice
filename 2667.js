// baekjoon 2667
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
input = input.map((e) => e.split("").map((e) => Number(e)));
let visited = new Array(N).fill().map((e) => new Array(N).fill(false));
let [stack, num] = [[], []];
// 입력값 정리 ex: N=7, input=[[0, 1, 1, 0, 1, 0, 0], [0, 1, 1, 0, 1, 0, 1], ...],
// visited=[[false, false, false, false, false, false, false], ...]
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && input[i][j]) {
      stack.push([i, j]);
      num.push(0); //단지 수 0으로 초기화
      while (stack.length) {
        const [x, y] = stack.pop();
        if (!visited[x][y]) {
          visited[x][y] = true;
          num[num.length - 1]++;
        }
        //방문하지 않았던 좌표이면 visited에 표시, 단지 수 증가
        const xNexts = [x - 1, x + 1].filter((e) => e >= 0 && e < N); //현재 지점의 상하 지점 ex: x=0 -> xNexts=[1]
        const yNexts = [y - 1, y + 1].filter((e) => e >= 0 && e < N); //현재 지점의 좌우 지점 ex: y=0 -> yNexts=[0,2]
        xNexts.forEach((xNext) => {
          if (!visited[xNext][y] && input[xNext][y]) stack.push([xNext, y]);
        });
        //조건에 맞는 값이면 stack에 push ex: [x,y]=[0,1] -> [1,1] push
        yNexts.forEach((yNext) => {
          if (!visited[x][yNext] && input[x][yNext]) stack.push([x, yNext]);
        });
        //조건에 맞는 값이면 stack에 push ex: [x,y]=[0,1] -> [0,2] push
      } //dfs 사용
    }
  }
}

num.sort((a, b) => a - b); // ex: num=[7, 8, 9]
console.log(num.length); // ex: 3
num.forEach((n) => console.log(n));
