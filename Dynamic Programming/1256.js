let [N, M, K] = `${require('fs').readFileSync('./dev/stdin')}`.split` `.map(
  Number,
)
let dp = [...Array(N + 1)].map(_ => Array(M + 1).fill(0n))
for (let i = 1; i <= N; i++) dp[i][0] = 1n
for (let i = 1; i <= M; i++) dp[0][i] = 1n
for (let i = 1; i <= N; i++)
  for (let j = 1; j <= M; j++) dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
let [o, x, y] = ['', N, M]
if (dp[N][M] < K) o = -1
else {
  while (x && y)
    if (dp[x - 1][y] < K) {
      o += 'z'
      K -= Number(dp[x - 1][y])
      y--
    } else {
      o += 'a'
      x--
    }
  x ? (o += 'a'.repeat(x)) : (o += 'z'.repeat(y))
}
console.log(o)
