let [n, I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
n = +n
const A = []
for (let i = 0; i < n; i++)
  if (A[A.length - 1] >= I[i]) {
    let [l, r] = [0, A.length - 1]
    while (l < r) {
      const mid = ~~((l + r) / 2)
      A[mid] < I[i] ? (l = mid + 1) : (r = mid)
    }
    A[l] = I[i]
  } else A.push(I[i])
console.log(A.length)
