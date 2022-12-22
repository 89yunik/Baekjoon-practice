let [[n], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
const [A, dist] = [
  [],
  (a, b) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2),
]
for (let i = 0; i < n; i++)
  for (let j = i + 1; j < n; j++) A.push([i, j, dist(I[i], I[j])])
A.sort((a, b) => a[2] - b[2])
let [R, root, o] = [
  [...Array(n)].map((_, i) => i),
  x => (x == R[x] ? x : (R[x] = root(R[x]))),
  0,
]
for (const [a, b, c] of A) {
  const [x, y] = [root(a), root(b)]
  if (x == y) continue
  x > y ? (R[x] = y) : (R[y] = x)
  o += c
}
console.log(o.toFixed(2))
