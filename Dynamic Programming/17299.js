let [[N], A] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
const B = new Map()
A.forEach(e => B.set(e, (B.get(e) ?? 0) + 1))
const dp = Array(N).fill(-1)
for (let i = N - 2; i >= 0; i--) {
  let j = i + 1
  while (B.get(A[i]) >= B.get(A[j])) j = dp[j]
  dp[i] = j
}
console.log(dp.map(e => (e > 0 ? A[e] : e)).join(' '))
