let [T, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const O = []
for (e of I) {
  const [M, N, x, y] = e.split(' ').map(Number)
  const max = M * N
  let [i, j] = [x, y]
  while (i != j && i <= max && j <= max) i < j ? (i += M) : (j += N)
  const o = i == j ? i : -1
  O.push(o)
}
console.log(O.join('\n'))
