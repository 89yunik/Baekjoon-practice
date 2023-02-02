let [[N], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
let [dp1, dp2] = [
  [0, 0, 0],
  [0, 0, 0],
]
for (const [a, b, c] of I) {
  dp1 = [
    Math.max(dp1[0], dp1[1]) + a,
    Math.max(dp1[0], dp1[1], dp1[2]) + b,
    Math.max(dp1[1], dp1[2]) + c,
  ]
  dp2 = [
    Math.min(dp2[0], dp2[1]) + a,
    Math.min(dp2[0], dp2[1], dp2[2]) + b,
    Math.min(dp2[1], dp2[2]) + c,
  ]
}
console.log(Math.max(...dp1), Math.min(...dp2))
