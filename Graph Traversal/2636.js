let [[N, M], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
function dfs(sx, sy) {
  const [S, V] = [[[sx, sy]], [...Array(N)].map(_ => Array(M).fill(0))]
  ++V[sx][sy]
  while (S.length) {
    const [x, y] = S.pop()
    const next = [
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y],
    ]
    for (const [nx, ny] of next)
      if (nx < N && nx >= 0 && ny < M && ny >= 0)
        if (I[nx][ny]) V[nx][ny]++
        else if (!V[nx][ny] && ++V[nx][ny]) S.push([nx, ny])
  }
  let x = 0
  for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) if (I[i][j]) x++
  O[1] = x
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) if (V[i][j]) I[i][j] = 0
}
let O = [0, 0]
while (!I.every(r => r.every(c => !c)) && ++O[0]) dfs(0, 0)
console.log(O.join(' '))
