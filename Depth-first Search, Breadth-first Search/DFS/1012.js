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
  const L = M * N
  const [A, V] = [Array(L).fill(0), Array(L).fill(0)]
  for (let j = 0; j < K; j++) {
    const [x, y] = I[i + j].split(' ').map(Number)
    A[x * N + y]++
  }
  function dfs(x) {
    if (V[x] || !A[x]) return
    V[x] = 1
    const [next, rest] = [[x - N, x + N], x % N]
    rest && next.push(x - 1)
    rest != N - 1 && next.push(x + 1)
    for (let i = 0; i < next.length; i++)
      if (next[i] >= 0 && next[i] < L) dfs(next[i])
  }
  let o = 0
  for (let j = 0; j < L; j++) if (!V[j] && A[j] && ++o) dfs(j)
  O.push(o)
  i += K
  // const A = Array.from({length: M}, _ => Array(N).fill(0))
  // const V = Array.from({length: M}, _ => Array(N).fill(0))
  // function dfs(x, y) {
  //   if (V[x][y] || !A[x][y]) return
  //   V[x][y] = 1
  //   x && dfs(x - 1, y)
  //   y && dfs(x, y - 1)
  //   x < M - 1 && dfs(x + 1, y)
  //   y < N - 1 && dfs(x, y + 1)
  // }
  // for (j = 0; j < K; j++) {
  //   const [x, y] = I[i + j].split(' ')
  //   A[x][y] = 1
  // }
  // let o = 0
  // for (let i = 0; i < M; i++)
  //   for (let j = 0; j < N; j++) if (!V[i][j] && A[i][j] && ++o) dfs(i, j)
  // O.push(o)
  // i += K
}
console.log(O.join('\n'))
