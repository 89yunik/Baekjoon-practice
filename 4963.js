// baekjoon 4963
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

while (input.length) {
  const [w, h] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  if (h > 0) {
    let map = new Array(h).fill().map((e) =>
      input
        .shift()
        .split(" ")
        .map((e) => Number(e))
    );
    let visited = new Array(h).fill().map((e) => Array(w).fill(false));
    let [stack, cnt] = [[], 0];
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (!visited[i][j] && map[i][j]) {
          cnt++;
          stack.push([i, j]);
          while (stack.length) {
            const [x, y] = stack.pop();
            visited[x][y] = true;
            const xNextArr = [x - 1, x, x + 1].filter((e) => e >= 0 && e < h);
            const yNextArr = [y - 1, y, y + 1].filter((e) => e >= 0 && e < w);
            for (let xNext of xNextArr) {
              for (let yNext of yNextArr) {
                if (!visited[xNext][yNext] && map[xNext][yNext])
                  stack.push([xNext, yNext]);
              }
            }
          }
        }
      }
    }
    console.log(cnt);
  } // 입력값 정리 ex: map = [ [ '0', '1' ], [ '1', '0' ] ] [ [ '1', '1', '1' ], [ '1', '1', '1' ] ]
}
