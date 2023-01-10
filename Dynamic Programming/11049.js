const [[N], ...A] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
const B = [...Array(N)].map(_ => Array(N).fill(0))
for (let x = 1; x < N; x++)
  for (let i = 0; i < N - x; i++) {
    let M = Infinity
    for (let j = i; j < i + x; j++)
      M = Math.min(
        M,
        B[i][j] + B[j + 1][i + x] + A[i][0] * A[j][1] * A[i + x][1],
      )
    B[i][i + x] = M
  }
console.log(B[0][N - 1])
