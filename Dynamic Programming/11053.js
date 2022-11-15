const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +input[0]
const A = input[1].split(' ').map(e => +e)
const dp = new Array(N).fill(0)
for (let i = 0; i < N; i++) {
  let max = 0
  for (let j = 0; j < i; j++) if (A[i] > A[j] && dp[j] > max) max = dp[j]
  dp[i] = max + 1
}
console.log(Math.max(...dp))
