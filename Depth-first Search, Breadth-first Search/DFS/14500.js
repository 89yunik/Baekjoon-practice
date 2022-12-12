let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// const [N, M] = I.shift().split(' ').map(Number)
// I = I.map(e => e.split(' ').map(Number))
// let [o, next] = [
//   0,
//   [
//     [-1, 0],
//     [0, -1],
//     [0, 1],
//     [1, 0],
//   ],
// ]
// function dfs(cnt, n, C, p) {
//   if (cnt == 4) return (o = Math.max(o, n))
//   for (const i in next) {
//     const [x, y] = [C[0] + next[i][0], C[1] + next[i][1]]
//     if (x < N && x >= 0 && y < M && y >= 0 && i != p)
//       dfs(cnt + 1, n + I[x][y], [x, y], 3 - i)
//   }
// }
// for (let i = 0; i < N; i++)
//   for (let j = 0; j < M; j++) {
//     dfs(1, I[i][j], [i, j])
//     const A = []
//     for ([di, dj] of next) {
//       const [x, y] = [i + di, j + dj]
//       if (x < N && x >= 0 && y < M && y >= 0) A.push(I[x][y])
//     }
//     let n = A.reduce((a, b) => a + b, 0) + I[i][j]
//     if (A.length == 4) n -= Math.min(...A)
//     o = Math.max(o, n)
//   }
// console.log(o)
const [N, M] = I.shift().split(' ').map(Number)
I = I.map(e => e.split(' ').map(Number))
const V = new Array(N).fill().map(_ => Array(M).fill(0))
const next = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
]
let o = 0
function dfs(n, num, x, y) {
  if (n == 4) {
    o = Math.max(o, num)
    return
  }
  for (const [dx, dy] of next) {
    const [nx, ny] = [x + dx, y + dy]
    if (nx < N && nx >= 0 && ny < M && ny >= 0 && !V[nx][ny]) {
      if (n == 2) {
        V[nx][ny] = 1
        dfs(n + 1, num + I[nx][ny], x, y)
        V[nx][ny] = 0
      }
      V[nx][ny] = 1
      dfs(n + 1, num + I[nx][ny], nx, ny)
      V[nx][ny] = 0
    }
  }
}
for (let i = 0; i < N; i++)
  for (let j = 0; j < M; j++) {
    V[i][j] = 1
    dfs(1, I[i][j], i, j)
    V[i][j] = 0
  }
console.log(o)
