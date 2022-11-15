const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [[N, M], A, O] = [I[0].split(' ').map(Number), [], []]
for (let i = 1; i <= N; i++) A.push(I[i].split(' ').map(Number))
for (let i = 0; i < N; i++)
  for (let j = 0; j < N; j++) {
    if (i) A[i][j] += A[i - 1][j]
    if (j) A[i][j] += A[i][j - 1]
    if (i && j) A[i][j] -= A[i - 1][j - 1]
  }
for (let i = N + 1; i <= N + M; i++) {
  const [x1, y1, x2, y2] = I[i].split(' ').map(e => +e - 1)
  let x = A[x2][y2]
  if (x1) x -= A[x1 - 1][y2]
  if (y1) x -= A[x2][y1 - 1]
  if (x1 && y1) x += A[x1 - 1][y1 - 1]
  O.push(x)
}
console.log(O.join('\n'))
