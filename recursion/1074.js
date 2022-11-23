const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, r, c] = I[0].split(' ').map(Number)
function quartered(N, r, c) {
  if (N == 1) return (r % 2) * 2 + (c % 2)
  let x = 0
  const l = Math.pow(2, N - 1)
  if (r >= l) {
    x += 2
    r -= l
  }
  if (c >= l) {
    x += 1
    c -= l
  }
  return x * Math.pow(4, N - 1) + quartered(N - 1, r, c)
}
console.log(quartered(N, r, c))
