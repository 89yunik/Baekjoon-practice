let [A, B] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt)
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(BigInt))
function F(X) {
  const x = X.toString(2)
  const l = x.length
  let dp = Array(l).fill(0n)
  if (l > 1) dp[1] = 1n
  for (let i = 2; i < l; i++) dp[i] = dp[i - 1] * 2n + 2n ** BigInt(i - 1)
  dp = dp.reverse().map(e => e + 1n)
  let [o, j] = [0n, 0n]
  for (const i in x) if (+x[i]) o += dp[i] + 2n ** BigInt(l - 1 - i) * j++
  return o
}
console.log((F(B) - F(A - 1n)).toString())
