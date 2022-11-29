let N = +require('fs').readFileSync('./dev/stdin').toString().trim()
// .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let dp = new Array(10).fill(1n)
dp[0] = 0n
while (--N) {
  const temp = [...dp]
  for (let i = 0; i < 10; i++) temp[i] = (dp[i - 1] ?? 0n) + (dp[i + 1] ?? 0n)
  dp = temp
}
const o = dp.reduce((a, b) => a + b, 0n) % 1000000000n
console.log(o.toString())
