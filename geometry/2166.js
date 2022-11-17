const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, A] = [+I[0], []]
for (let i = 1; i <= N; i++) A.push(I[i].split(' ').map(e => BigInt(e)))
A.push(A[0])
let O = 0n
for (let i = 0; i < N; i++) O += A[i][0] * A[i + 1][1] - A[i + 1][0] * A[i][1]
const x = O % 2n ? '.5' : '.0'
O = (O < 0n ? -1n * O : O) / 2n
console.log(O + x)
