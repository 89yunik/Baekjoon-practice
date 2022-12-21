let [[V], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
I.sort((a, b) => a[2] - b[2])
let [o, R] = [0, [...Array(V + 1)].map((_, i) => i)]
const root = x => (x == R[x] ? x : (R[x] = root(R[x])))
for (const [a, b, c] of I) {
  const [x, y] = [root(a), root(b)]
  if (x == y) continue
  x > y ? (R[x] = y) : (R[y] = x)
  o += c
}
console.log(o)
// I.sort((a, b) => a[2] - b[2])
// let [n, o, R] = [0, 0, [...Array(V + 1)].map((_, i) => i)]
// for (const [a, b, c] of I)
//   if (R[a] != R[b]) {
//     const min = Math.min(R[a], R[b])
//     const max = Math.max(R[a], R[b])
//     R = R.map(e => (e == max ? (e = min) : e))
//     o += c
//     if (++n == V - 1) break
//   }
// console.log(o)
