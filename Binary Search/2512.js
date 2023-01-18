let [[N], I, [M]] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
let [l, r] = [0, Math.max(...I)]
while (l < r) {
  const mid = Math.ceil((l + r) / 2)
  I.reduce((a, b) => a + (b > mid ? mid : b), 0) > M ? (r = mid - 1) : (l = mid)
}
console.log(l)
