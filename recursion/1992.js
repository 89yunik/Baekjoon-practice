let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
function check(x, y, n) {
  for (let i = x; i < x + n; i++)
    for (let j = y; j < y + n; j++) if (I[i][j] != I[x][y]) return null
  return I[x][y]
}
function F(x, y, n) {
  const num = check(x, y, n)
  if (num != null) return num
  return `(${F(x, y, n / 2)}${F(x, y + n / 2, n / 2)}${F(
    x + n / 2,
    y,
    n / 2,
  )}${F(x + n / 2, y + n / 2, n / 2)})`
}
console.log(F(0, 0, N))
