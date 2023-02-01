let [n, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
n = +n
I.sort((a, b) => a[0] - b[0])
const dp = Array(n).fill(0)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++)
    if (I[i][1] > I[j][1]) dp[i] = Math.max(dp[i], dp[j])
  dp[i]++
}
console.log(n - Math.max(...dp))
