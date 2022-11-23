const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, A, O] = [+I[0], [], [0, 0]]
for (let i = 1; i <= N; i++) A.push(I[i].split(' ').map(Number))
function same(x, y, N) {
  const s = A[x][y]
  for (let i = x; i < x + N; i++)
    for (let j = y; j < y + N; j++) if (A[i][j] != s) return null
  return s
}
function quartered(x, y, N) {
  const i = same(x, y, N)
  if (i != null) {
    O[i]++
    return
  }
  const n = [
    [x, y],
    [x, y + N / 2],
    [x + N / 2, y],
    [x + N / 2, y + N / 2],
  ]
  for ([nX, nY] of n) quartered(nX, nY, N / 2)
}
quartered(0, 0, N)
console.log(O.join('\n'))
