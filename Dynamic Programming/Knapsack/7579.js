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
// let dp = new Map()
// dp.set(0, 0)
// for (let i = 0; i < N; i++)
//   for (const [m1, c1] of [...dp])
//     dp.set(m1 + m[i], Math.min(dp.get(m1 + m[i]) ?? Infinity, c1 + c[i]))
// dp = [...dp].sort((a, b) => a[0] - b[0])
// console.log(dp.find(([m1, c1]) => m1 >= M)[1])
