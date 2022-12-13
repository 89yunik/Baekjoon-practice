let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, K] = I[0].split(' ').map(Number)
let dp = Array(K + 1).fill(0)
for (let i = 1; i <= N; i++) {
  const [W, V] = I[i].split(' ').map(Number)
  for (let j = K; j >= W; j--) dp[j] = Math.max(dp[j], dp[j - W] + V)
}
console.log(dp[K])
// function F(i, K) {
//   if (i == -1) return 0
//   const [W, V] = A[i]
//   let x = F(i - 1, K)
//   if (K >= W) x = Math.max(x, F(i - 1, K - W) + V)
//   return x
// }
// console.log(F(A.length - 1, K))
