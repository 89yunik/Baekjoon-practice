const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, r, c] = I[0].split(' ').map(Number)
function quartered(N, r, c) {
  if (N == 1) return (r % 2) * 2 + (c % 2)
  const l = Math.pow(2, N - 1)
  const [a, b] = [parseInt(r / l), parseInt(c / l)]
  const x = 2 * a + b
  if (a) r -= l
  if (b) c -= l
  return x * l * l + quartered(N - 1, r, c)
}
console.log(quartered(N, r, c))
