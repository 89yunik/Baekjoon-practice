let [[N], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
I.sort((a, b) => a[2] - b[2])
const R = [...Array(N)].map((_, i) => i)
const root = x => (x == R[x] ? x : (R[x] = root(R[x])))
let [o, max] = [0, 0]
for (const [A, B, C] of I) {
  const [x, y] = [root(A), root(B)]
  if (x == y) continue
  x > y ? (R[x] = y) : (R[y] = x)
  max = Math.max(max, C)
  o += C
}
console.log(o - max)
