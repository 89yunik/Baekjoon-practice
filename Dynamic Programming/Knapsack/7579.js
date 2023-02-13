let [[N, M], m, c] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
// let [[N, M], m, c] = [
//   [100, 10000000],
//   Array(100).fill(100000),
//   Array(100).fill(100000),
// ]
let dp = Array(10001).fill(0)
for (let i = 0; i < N; i++)
  for (let j = 10000; j >= c[i]; j--)
    dp[j] = Math.max(dp[j], dp[j - c[i]] + m[i])
console.log(dp.findIndex(e => e >= M))
