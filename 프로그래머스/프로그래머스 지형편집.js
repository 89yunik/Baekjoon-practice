const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
function solution(land, P, Q) {
  const [N, A] = [land.length, []]
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) A.push(land[i][j])
  A.sort((a, b) => a - b)
  const block = A.reduce((p, c) => p + c, 0)
  const l = A.length
  const dp = new Array(l)
  dp[0] = (block - A[0] * l) * Q
  for (let i = 1; i < l; i++) {
    if (A[i] == A[i - 1]) dp[i] = dp[i - 1]
    else dp[i] = dp[i - 1] + (A[i] - A[i - 1]) * (P * i - Q * (l - i))
    if (dp[i] > dp[i - 1]) return dp[i - 1]
  }
  return Math.min(...dp)
}
const land = input.map(e => e.split(' ').map(Number))
console.log(solution(land, 5, 3))
