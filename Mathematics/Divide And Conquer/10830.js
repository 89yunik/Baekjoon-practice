let [[N, B], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(BigInt))
N = Number(N)
function mul(A, B) {
  const C = [...Array(N)].map(_ => Array(N).fill(0n))
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) C[i][j] += A[i][k] * B[k][j]
      C[i][j] %= 1000n
    }
  return C
}
let O = [...Array(N)].map((_, i) => [...Array(N)].map((_, j) => BigInt(i == j)))
while (B) {
  if (B % 2n) O = mul(I, O)
  I = mul(I, I)
  B = ~~(B / 2n)
}
console.log(O.map(e => e.join(' ')).join('\n'))
