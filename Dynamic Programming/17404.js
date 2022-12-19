let [n, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
n = +n
const M = Math.min
function F(x) {
  const dp = [...Array(3)].map((_, i) => (i == x ? I[0][x] : Infinity))
  for (let i = 1; i < n; i++) {
    const A = [...dp]
    for (let j = 0; j < 3; j++) {
      const B = [...A]
      B.splice(j, 1)
      dp[j] = I[i][j] + M(...B)
      if (i == n - 1 && j == x) dp[j] = Infinity
    }
  }
  return M(...dp)
}

console.log(M(F(0), F(1), F(2)))
