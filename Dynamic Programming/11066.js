let [[T], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
let O = []
for (let i = 0; i < T; i++) {
  const [[K], A] = [I[i * 2], I[i * 2 + 1]]
  let [S, dp] = [
    Array(K).fill(0),
    [...Array(K)].map((_, i) =>
      [...Array(K)].map((_, j) => (i == j ? 0 : Infinity)),
    ),
  ]
  S[0] = A[0]
  for (let j = 1; j < K; j++) S[j] = S[j - 1] + A[j]
  for (let j = 1; j < K; j++)
    for (let k = 0; k < K - j; k++)
      for (let l = k; l < k + j; l++)
        dp[k][k + j] = Math.min(
          dp[k][k + j],
          dp[k][l] + dp[l + 1][k + j] + S[k + j] - (k ? S[k - 1] : 0),
        )
  O.push(dp[0][K - 1])
}
console.log(O.join('\n'))
