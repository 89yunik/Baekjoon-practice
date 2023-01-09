const [N, r, c] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number)
function Q(N, r, c) {
  if (N == 1) return (r % 2) * 2 + (c % 2)
  const l = Math.pow(2, N - 1)
  const [a, b] = [~~(r / l), ~~(c / l)]
  const x = 2 * a + b
  if (a) r -= l
  if (b) c -= l
  return x * l * l + Q(N - 1, r, c)
}
console.log(Q(N, r, c))
