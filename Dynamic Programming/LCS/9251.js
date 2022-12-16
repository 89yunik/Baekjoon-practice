let [A, B] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [r, c] = [A.length, B.length]
const dp = [...Array(r)].map(_ => Array(c).fill(0))
for (let i = 0; i < r; i++)
  for (let j = 0; j < c; j++)
    if (A[i] == B[j]) dp[i][j] = (i && j ? dp[i - 1][j - 1] : 0) + 1
    else dp[i][j] = Math.max(i ? dp[i - 1][j] : 0, j ? dp[i][j - 1] : 0)

console.log(dp[r - 1][c - 1])
