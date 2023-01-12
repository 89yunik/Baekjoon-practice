let [[M, N], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
let V = [...Array(M)].map(_ => Array(N).fill(-1))
function dfs(x, y) {
  if (x == M - 1 && y == N - 1) return 1
  let next = [
    [x - 1, y],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y],
  ]
  if (V[x][y] == -1) {
    V[x][y]++
    for (const [nx, ny] of next)
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && I[x][y] > I[nx][ny])
        if (V[nx][ny] != -1) V[x][y] += V[nx][ny]
        else V[x][y] += dfs(nx, ny)
  }
  return V[x][y]
}
dfs(0, 0)
console.log(V[0][0])
