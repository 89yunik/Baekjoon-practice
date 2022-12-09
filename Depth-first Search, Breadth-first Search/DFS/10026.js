let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
N = +N
I = I.join('').replaceAll('R', 0).replaceAll('G', 2).replaceAll('B', 1)
const [V1, V2] = [Array(N * N).fill(0), Array(N * N).fill(0)]
function dfs(V, F, c) {
  if (V[c]) return
  V[c] = 1
  const next = [c + N]
  c < N * (N - 1) && next.push(c + N)
  c >= N && next.push(c - N)
  c % N && next.push(c - 1)
  c % N != N - 1 && next.push(c + 1)
  for (const n of next) F(c, n) && dfs(V, F, n)
}
let O = [0, 0]
for (let i = 0; i < N * N; i++) {
  if (!V1[i]) ++O[0] && dfs(V1, (c, n) => I[c] == I[n], i)
  if (!V2[i]) ++O[1] && dfs(V2, (c, n) => I[c] % 2 == I[n] % 2, i)
}
console.log(O.join(' '))
