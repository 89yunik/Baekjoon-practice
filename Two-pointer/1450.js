let [[N, C], I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [[N, C], I] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const [A, B] = [[], []]
function F(I, O, n, c) {
  if (c < 0) return 0
  if (n == 0) return O.push(C - c)
  return F(I, O, n - 1, c) + F(I, O, n - 1, c - I[n - 1])
}
const mid = ~~(N / 2)
F(I.slice(0, mid), A, mid, C)
F(I.slice(mid), B, N - mid, C)
A.sort((a, b) => a - b)
B.sort((a, b) => a - b)
let [o, j] = [0, B.length - 1]
for (let i = 0; i < A.length; i++) {
  while (A[i] + B[j] > C) j--
  o += j + 1
}
console.log(o)
