let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
I = I.map(e => e.split('').map(Number))
const A = []
for (let i = 0; i < 9; i++)
  for (let j = 0; j < 9; j++) !I[i][j] && A.push([i, j])
function possible(x, y) {
  const A = Array(10).fill(1)
  for (let i = 0; i < 9; i++) {
    A[I[x][i]] = 0
    A[I[i][y]] = 0
  }
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) A[I[~~(x / 3) * 3 + i][~~(y / 3) * 3 + j]] = 0
  return A.reduce((a, b, i) => {
    b && a.push(i)
    return a
  }, [])
}
let o
function dfs(i) {
  if (o) return
  if (i == A.length) return (o = I.map(e => e.join('')).join('\n'))
  const [x, y] = A[i]
  const cand = possible(x, y)
  for (const c of cand) {
    I[x][y] = c
    dfs(i + 1)
    if (!o) I[x][y] = 0
  }
}
dfs(0)
console.log(o)
