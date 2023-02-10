let [[N, M], [r, c, d], ...I] = `${require('fs').readFileSync(
  './dev/stdin',
)}`.trim().split`\n`.map(e => e.split` `.map(Number))
// let [[N, M], [r, c, d], I] = [
//   [50, 50],
//   [0, 0, 0],
//   [...Array(50)].map(_ => Array(50).fill(0)),
// ]
let o = 0
while (1) {
  if (!I[r][c]) {
    I[r][c] = 2
    o++
  }
  const P = [
    [r - 1, c],
    [r, c + 1],
    [r + 1, c],
    [r, c - 1],
  ]
  let [nx, ny] = [r, c]
  if (P.every(([x, y]) => !I[x] || I[x][y] || I[x][y] == undefined)) {
    ;[nx, ny] = P[(d + 2) % 4]
    if (!I[nx] || I[nx][ny] == 1 || I[nx][ny] == undefined) break
  } else {
    do {
      d = (d + 3) % 4
      ;[nx, ny] = P[d]
    } while (!I[nx] || I[nx][ny] || I[nx][ny] == undefined)
  }
  r = nx
  c = ny
}
console.log(o)
