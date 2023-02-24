let [[N, K], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
const dp = [...Array(N)].map(_ => Array(K + 1).fill(Infinity))
const l = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
dp[0][0] = 0
for (let i = 1; i < N; i++)
  for (let j = 0; j <= K; j++)
    for (let k = 0; k < i && k <= j; k++)
      dp[i][j] = Math.min(
        dp[i][j],
        dp[i - k - 1][j - k] + l(I[i - k - 1], I[i]),
      )
console.log(dp[N - 1][K])
