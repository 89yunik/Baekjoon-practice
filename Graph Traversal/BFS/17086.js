let [[N, M], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
let [o, Q, V] = [0, [], [...Array(N)].map(_ => Array(M).fill(0))]
for (let i = 0; i < N; i++)
  for (let j = 0; j < M; j++) if (I[i][j]) Q.push([i, j])
let cnt = Q.length
while (Q.length) {
  const [x, y] = Q.shift()
  if (!cnt--) {
    cnt = Q.length
    o++
  }
  const next = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ]
  for (const [nx, ny] of next)
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !V[nx][ny] && !I[nx][ny]) {
      V[nx][ny]++
      Q.push([nx, ny])
    }
}
console.log(o)
