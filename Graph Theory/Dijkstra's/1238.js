let [[N, M, X], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
const [A, B] = [[...Array(N + 1)].map(_ => []), [...Array(N + 1)].map(_ => [])]
I.forEach(([s, e, d]) => {
  A[s].push([e, d])
  B[e].push([s, d])
})
function F(s, G) {
  const D = Array(N + 1).fill(Infinity)
  D[s] = 0
  const Q = [[s, 0]]
  while (Q.length) {
    const [c, d] = Q.shift()
    if (d > D[c]) continue
    for (const [n, nd] of G[c])
      if (D[c] + nd < D[n]) {
        D[n] = D[c] + nd
        Q.push([n, D[n]])
      }
  }
  return D
}
let [o, C, D] = [0, F(X, A), F(X, B)]
for (let i = 1; i <= N; i++) o = Math.max(o, C[i] + D[i])
console.log(o)
