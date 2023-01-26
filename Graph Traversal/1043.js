let [[N], [, ...A], ...B] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
const G = [...Array(N + 1)].map(_ => [])
B.forEach(e => e.shift())
for (const i in B) for (const j in B[i]) G[B[i][j]].push(+i)
// function dfs(c) {
//   for (const i of G[c]) for (const n of B[i]) if (!V[n] && ++V[n]) dfs(n)
// }
const dfs = c => G[c].forEach(i => B[i].forEach(n => !V[n] && ++V[n] && dfs(n)))
const V = Array(N + 1).fill(0)
A.forEach(e => ++V[e] && dfs(e))
// const [stack, V] = [[...A], Array(N + 1).fill(0)]
// A.forEach(e => V[e]++)
// while (stack.length) {
//   const c = stack.pop()
//   for (const i of G[c]) for (const j of B[i]) if (!V[j] && ++V[j]) stack.push(j)
// }
let o = 0
for (const e of B) e.every(x => !V[x]) && o++
console.log(o)
