let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
N = +N
I = I.map(e => e.split(' ').map(Number))
let [Q, o, size, cnt] = [[], 0, 2, 0]
const [V, next, isIdx] = [
  [...Array(N)].map(_ => Array(N).fill(0)),
  [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ],
  x => x >= 0 && x < N,
]
for (let i = 0; i < N; i++)
  for (let j = 0; j < N; j++)
    if (I[i][j] == 9) {
      Q.push([i, j, 0])
      V[i][j] = 1
      I[i][j] = 0
    }
while (Q.length) {
  let [x, y, num] = Q.shift()
  if (I[x][y] && I[x][y] < size) {
    Q.push([x, y, num])
    Q = Q.filter(([i, j, n]) => I[i][j] && I[i][j] < size && n == num).sort(
      (a, b) => a[0] - b[0] || a[1] - b[1],
    )
    ;[x, y, num] = Q[0]
    Q = []
    I[x][y] = 0
    o += num
    num = 0
    V.forEach(e => e.fill(0))
    if (size == ++cnt) {
      size++
      cnt = 0
    }
  }
  for (const [dx, dy] of next) {
    const [nx, ny] = [x + dx, y + dy]
    if (isIdx(nx) && isIdx(ny) && !V[nx][ny] && size >= I[nx][ny]) {
      V[nx][ny] = 1
      Q.push([nx, ny, num + 1])
    }
  }
}
console.log(o)
