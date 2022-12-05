let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, O] = [+I.shift(), [0, 0, 0]]
function check(x, y, k) {
  for (let i = x; i < x + k; i++)
    for (let j = y; j < y + k; j++) if (I[i][j] != I[x][y]) return 0
  return 1
}
I = I.map(e => e.split(' ').map(Number))
function F(x, y, k) {
  if (check(x, y, k)) {
    O[I[x][y] + 1]++
    return
  }
  const n = k / 3
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) F(x + i * n, y + j * n, n)
}
F(0, 0, N)
console.log(O.join('\n'))
