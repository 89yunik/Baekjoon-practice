let [N, k] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(Number)
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let [l, r] = [1, k]
while (l < r) {
  const mid = ~~((l + r) / 2)
  let x = 0
  for (let i = 1; i <= N; i++) x += Math.min(~~(mid / i), N)
  x < k ? (l = mid + 1) : (r = mid)
}
console.log(l)
