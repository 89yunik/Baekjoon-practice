let [[x1, y1, x2, y2], [x3, y3, x4, y4]] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
const ccw = (a, b, c) =>
  (a[0] - b[0]) * (a[1] - c[1]) - (a[1] - b[1]) * (a[0] - c[0])
const x = ccw([x1, y1], [x2, y2], [x3, y3]) * ccw([x1, y1], [x2, y2], [x4, y4])
const y = ccw([x3, y3], [x4, y4], [x1, y1]) * ccw([x3, y3], [x4, y4], [x2, y2])
let o = 0
if ((x <= 0 && y < 0) || (x < 0 && y <= 0)) ++o
if (x == 0 && y == 0) {
  const A = [x1, x2, x3, x4].sort((a, b) => a - b)
  const B = [y1, y2, y3, y4].sort((a, b) => a - b)
  if (
    ((A[0] == Math.min(x1, x2) && A[1] == Math.min(x3, x4)) ||
      (A[0] == Math.min(x3, x4) && A[1] == Math.min(x1, x2))) &&
    ((B[0] == Math.min(y1, y2) && B[1] == Math.min(y3, y4)) ||
      (B[0] == Math.min(y3, y4) && B[1] == Math.min(y1, y2)))
  )
    ++o
}
console.log(o)
