let [N, A] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
N = +N
A = A.split(' ').map(Number)
const [dp1, dp2] = [Array(N).fill(0), Array(N).fill(0)]
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) if (A[i] > A[j]) dp1[i] = Math.max(dp1[i], dp1[j])
  const k = N - 1 - i
  for (let j = N - 1; j > k; j--)
    if (A[k] > A[j]) dp2[k] = Math.max(dp2[k], dp2[j])
  dp1[i]++
  dp2[k]++
}
let o = 0
for (let i = 0; i < N; i++) o = Math.max(o, dp1[i] + dp2[i] - 1)
console.log(o)
