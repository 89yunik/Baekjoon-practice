let [[N], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
// let [[N], I] = [[16], [...Array(16)].map(_ => Array(16).fill(1000000))]
// for (let i = 0; i < N; i++) I[i][i] = 0
let dp = [...Array(N)].map(_ => Array(1 << N).fill(Infinity))
let o = Infinity
function dfs(V, i) {
  if (V == (1 << N) - 1 && I[i][0]) o = Math.min(o, dp[i][V] + I[i][0])
  for (let j = 1; j < N; j++) {
    const n = 1 << j
    if (!(V & n) && I[i][j] && dp[i][V] + I[i][j] < dp[j][V + n]) {
      dp[j][V + n] = dp[i][V] + I[i][j]
      dfs(V + n, j)
    }
  }
}
dp[0][1] = 0
dfs(1, 0)
console.log(o)
