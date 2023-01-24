let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(Number)
const dp = Array(N).fill(1)
for (let i = 0; i < N; i++)
  for (let j = 0; j < i; j++)
    if (I[i] > I[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
console.log(N - Math.max(...dp))
