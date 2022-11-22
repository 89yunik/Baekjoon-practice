const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [T, O] = [+I[0], []]
let i = 1
while (i < I.length) {
  const [M, N, K] = I[i++].split(' ').map(Number)
  const A = Array.from({length: M}, _ => Array(N).fill(0))
  const V = Array.from({length: M}, _ => Array(N).fill(0))
  function dfs(x, y) {
    if (V[x][y] || !A[x][y]) return
    V[x][y] = 1
    x && dfs(x - 1, y)
    y && dfs(x, y - 1)
    x < M - 1 && dfs(x + 1, y)
    y < N - 1 && dfs(x, y + 1)
  }
  for (j = 0; j < K; j++) {
    const [x, y] = I[i + j].split(' ')
    A[x][y] = 1
  }
  let o = 0
  for (let i = 0; i < M; i++)
    for (let j = 0; j < N; j++)
      if (!V[i][j] && A[i][j]) {
        o++
        dfs(i, j)
      }
  O.push(o)
  i += K
}
console.log(O.join('\n'))
