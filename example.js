let [[n, k], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
I = I.flat()
const dp = [...Array(n)].map(_ => Array(k + 1).fill(0))
for (let i = 0; i <= k; i += I[0]) dp[0][i]++
for (let i = 1; i < n; i++)
  for (let j = 0; j <= k; j++)
    for (let x = 0; x <= j; x += I[i]) dp[i][j] += dp[i - 1][j - x]
console.log(dp[n - 1][k])
