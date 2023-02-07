let [[N, M, R], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
// let [[N, M, R], I] = [
//   [100000, 200000, 1],
//   [...Array(200000)].map((_, i) => [1, ~~(i / 2)]),
// ]
let [V, G, Q, n, x] = [
  Array(N + 1).fill(0),
  [...Array(N + 1)].map(_ => []),
  [],
  1,
  0,
]
for (const [a, b] of I) {
  G[a].push(b)
  G[b].push(a)
}
G.forEach(e => e.sort((a, b) => b - a))
Q.push(R)
while (x < Q.length) {
  const i = Q[x++]
  if (V[i]) continue
  V[i] = n++
  for (const x of G[i]) if (!V[x]) Q.push(x)
}
V.shift()
console.log(V.join('\n'))
