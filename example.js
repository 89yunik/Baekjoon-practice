let n = +require('fs').readFileSync('./dev/stdin').toString()
// .trim()
// .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const dp = Array(n + 1).fill(0)
dp[1] = 1
for (let i = 2; i <= n; i++) {
  let min = 4
  for (let j = 1; j * j <= i; j++) min = Math.min(min, dp[i - j * j])
  dp[i] = min + 1
}
console.log(dp[n])
// const m = new Array(4).fill().map(_ => new Set())
// for (let i = 1; i <= max; i++) m[0].add(i * i)
// let i = 0
// for (; i < 3; i++) {
//   if (m[i].has(n)) break
//   for (const x of m[i]) for (const y of m[0]) m[i + 1].add(x + y)
// }
// console.log(i + 1)
