let [[N, M], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [[N, M], I] = [[1000, 1000], [...Array(1000)].map(_ => Array(1000).fill(0))]
let [V, o] = [[...Array(N)].map(_ => Array(M).fill(0)), 0]
function dfs(sx, sy) {
  const stack = [[sx, sy]]
  while (stack.length) {
    const [x, y] = stack.pop()
    V[x][y]++
    const next = [
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y],
    ]
    for (let [nx, ny] of next) {
      if (nx == N) nx = 0
      if (nx == -1) nx = N - 1
      if (ny == M) ny = 0
      if (ny == -1) ny = M - 1
      if (!I[nx][ny] && !V[nx][ny]) stack.push([nx, ny])
    }
  }
}
for (let i = 0; i < N; i++)
  for (let j = 0; j < M; j++) if (!I[i][j] && !V[i][j] && ++o) dfs(i, j)
console.log(o)
