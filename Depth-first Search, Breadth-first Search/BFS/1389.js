let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = I[0].split(' ').map(Number)
const G = new Array(N).fill().map(_ => [])
let D = new Array(N).fill().map(_ => Array(N).fill(0))
for (let i = 1; i <= M; i++) {
  const [a, b] = I[i].split(' ').map(e => +e - 1)
  G[a].push(b)
  G[b].push(a)
}
function bfs(start) {
  const Q = [[start, 0]]
  while (Q.length) {
    const [curr, dist] = Q.shift()
    if (D[start][curr]) continue
    D[start][curr] = dist
    for (const next of G[curr]) Q.push([next, dist + 1])
  }
}
for (let i = 0; i < N; i++) bfs(i)
D = D.map(e => e.reduce((a, b) => a + b, 0))
const min = Math.min(...D)
console.log(D.indexOf(min) + 1)
