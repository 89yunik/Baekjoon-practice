let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M, K] = I.shift().split(' ').map(Number)
I = I.map(r => r.split('').map(e => (e == 'B' ? 1 : 0)))
let min = Infinity
function prefixSum(A) {
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++)
      A[i][j] +=
        (i ? A[i - 1][j] : 0) +
        (j ? A[i][j - 1] : 0) -
        (i && j ? A[i - 1][j - 1] : 0)
}
function cut(A) {
  for (let i = K - 1; i < N; i++)
    for (let j = K - 1; j < M; j++) {
      min = Math.min(
        min,
        A[i][j] -
          (j < K ? 0 : A[i][j - K]) -
          (i < K ? 0 : A[i - K][j]) +
          (i < K || j < K ? 0 : A[i - K][j - K]),
      )
    }
}
function sol(x) {
  const A = new Array(N).fill().map(_ => Array(M).fill(0))
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) x ^ (I[i][j] == (i + j) % 2) && A[i][j]++
  prefixSum(A)
  cut(A)
}
sol(0)
sol(1)
console.log(min)
