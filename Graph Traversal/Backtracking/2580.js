let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
function possible(x, y) {
  let A = new Array(10).fill(1)
  for (let i = 0; i < 9; i++) A[I[x][i]] = 0
  for (let i = 0; i < 9; i++) A[I[i][y]] = 0
  const [xs, ys] = [3 * Math.floor(x / 3), 3 * Math.floor(y / 3)]
  for (let i = xs; i < xs + 3; i++)
    for (let j = ys; j < ys + 3; j++) A[I[i][j]] = 0
  A = A.reduce((a, b, i) => {
    if (b) a.push(i)
    return a
  }, [])
  return A
}
I = I.map(e => e.split(' ').map(Number))
let o
const P = []
for (const i in I) for (const j in I[i]) if (!I[i][j]) P.push([+i, +j])
function dfs(i) {
  if (o) return
  if (i == P.length) {
    o = I.map(e => e.join(' ')).join('\n')
    return
  }
  const [x, y] = P[i]
  const A = possible(x, y)
  for (const n of A) {
    I[x][y] = n
    dfs(i + 1)
    if (!o) I[x][y] = 0
  }
}
dfs(0)
console.log(o)
