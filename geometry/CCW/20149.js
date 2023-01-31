let [[x1, y1, x2, y2], [x3, y3, x4, y4]] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
const ccw = (a, b, c) =>
  (a[0] - b[0]) * (a[1] - c[1]) - (a[1] - b[1]) * (a[0] - c[0])
const [a, b, c, d] = [
  ccw([x1, y1], [x2, y2], [x3, y3]),
  ccw([x1, y1], [x2, y2], [x4, y4]),
  ccw([x3, y3], [x4, y4], [x1, y1]),
  ccw([x3, y3], [x4, y4], [x2, y2]),
]
const i = a * b
const j = c * d
let o = '0'
if ((i <= 0 && j < 0) || (i < 0 && j <= 0)) {
  let x =
    ((y3 - y1) * (x1 - x2) * (x3 - x4) +
      x1 * (y1 - y2) * (x3 - x4) -
      x3 * (y3 - y4) * (x1 - x2)) /
    ((y1 - y2) * (x3 - x4) - (y3 - y4) * (x1 - x2))
  let y =
    ((x3 - x1) * (y1 - y2) * (y3 - y4) +
      y1 * (x1 - x2) * (y3 - y4) -
      y3 * (x3 - x4) * (y1 - y2)) /
    ((x1 - x2) * (y3 - y4) - (x3 - x4) * (y1 - y2))
  o = `1\n${x} ${y}`
}
if (i == 0 && j == 0) {
  const A = [x1, x2, x3, x4].sort((a, b) => a - b)
  const B = [y1, y2, y3, y4].sort((a, b) => a - b)
  const [mx1, mx2, Mx1, Mx2, my1, my2, My1, My2] = [
    Math.min(x1, x2),
    Math.min(x3, x4),
    Math.max(x1, x2),
    Math.max(x3, x4),
    Math.min(y1, y2),
    Math.min(y3, y4),
    Math.max(y1, y2),
    Math.max(y3, y4),
  ]
  if (
    ((A[0] == mx1 && A[1] == mx2) || (A[0] == mx2 && A[1] == mx1)) &&
    ((B[0] == my1 && B[1] == my2) || (B[0] == my2 && B[1] == my1))
  ) {
    o = '1'
    if (a == 0 && b == 0 && c == 0 && d == 0)
      ((A[0] == mx1 && A[1] == Mx1 && A[2] == mx2 && A[3] == Mx2) ||
        (A[0] == mx2 && A[1] == Mx2 && A[2] == mx1 && A[3] == Mx1)) &&
        A[1] == A[2] &&
        ((B[0] == my1 && B[1] == My1 && B[2] == my2 && B[3] == My2) ||
          (B[0] == my2 && B[1] == My2 && B[2] == my1 && B[3] == My1)) &&
        B[1] == B[2] &&
        (o += `\n${A[1]} ${B[1]}`)
    else {
      const [C, S] = [
        [
          [x1, y1],
          [x2, y2],
          [x3, y3],
          [x4, y4],
        ],
        new Set(),
      ]
      C.forEach(([x, y]) => {
        if (S.has(`${x} ${y}`)) o += `\n${x} ${y}`
        S.add(`${x} ${y}`)
      })
    }
  }
}
console.log(o)
