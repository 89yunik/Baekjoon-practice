let [[N], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
let o = 0
function dfs(i, n) {
  if (i > N) return
  o = Math.max(o, n)
  if (i == N) return
  const [T, P] = I[i]
  dfs(i + T, n + P)
  dfs(i + 1, n)
}
dfs(0, 0)
console.log(o)
