const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, A] = [+I[0], []]
for (let i = 1; i < N + 1; i++) A.push(I[i].split(' ').map(Number))
const B = Array.from({length: N}, _ => Array(N).fill(0))
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
