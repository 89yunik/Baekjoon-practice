let [[n], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
const R = [...Array(n)].map((_, i) => i)
const root = x => (x == R[x] ? x : (R[x] = root(R[x])))
let o = 0
for (const i in I) {
  const [a, b] = I[i]
  const [x, y] = [root(a), root(b)]
  if (x == y) {
    o = +i + 1
    break
  }
  x > y ? (R[x] = y) : (R[y] = x)
}
console.log(o)
