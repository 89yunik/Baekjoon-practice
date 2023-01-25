let [[N, M], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
function F(A) {
  let [V, o] = [[...Array(N)].map(_ => Array(M).fill(0)), 0]
  function dfs(x, y) {
    V[x][y]++
    A[x][y] = 2
    const next = [
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y],
    ]
    for (const [nx, ny] of next)
      if (nx < N && nx >= 0 && ny < M && ny >= 0 && !V[nx][ny] && !A[nx][ny])
        dfs(nx, ny)
  }
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) if (A[i][j] == 2) dfs(i, j)
  for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) if (!A[i][j]) o++
  return o
}
function C(A, r) {
  if (r == 1) return A.map(e => [e])
  const B = []
  for (let i = 0; i < A.length; i++)
    B.push(...C(A.slice(i + 1), r - 1).map(e => [A[i], ...e]))
  return B
}
const B = C(
  [...Array(N * M)].map((_, i) => i),
  3,
)
let o = 0
l: for (const e of B) {
  let A = I.map(r => [...r])
  for (const x of e) {
    const [i, j] = [~~(x / M), x % M]
    if (I[i][j]) continue l
    else A[i][j]++
  }
  o = Math.max(o, F(A))
}
console.log(o)
