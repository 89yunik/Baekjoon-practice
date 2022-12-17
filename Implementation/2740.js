let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(e => e.split(' ').map(Number))
const [N, M] = I[0]
const [A, B] = [[], []]
for (let i = 1; i <= N; i++) A.push(I[i])
const [_, K] = I[N + 1]
for (let i = N + 2; i < N + M + 2; i++) B.push(I[i])
const C = [...Array(N)].map(_ => Array(K).fill(0))
for (let i = 0; i < N; i++)
  for (let j = 0; j < K; j++)
    for (let k = 0; k < M; k++) C[i][j] += A[i][k] * B[k][j]
console.log(C.map(e => e.join(' ')).join('\n'))
