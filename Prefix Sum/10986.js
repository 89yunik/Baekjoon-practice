const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = I[0].split(' ').map(Number)
const A = I[1].split(' ').map(Number)
const [B, C] = [Array(N).fill(0), Array(M).fill(0n)]
for (let i = 0; i < N; i++) B[i] = ((B[i - 1] ?? 0) + A[i]) % M
B.forEach(e => C[e]++)
const o = C[0] + C.reduce((a, b) => a + (b * (b - 1n)) / 2n, 0n)
console.log(o.toString())
