let N = +require('fs').readFileSync('./dev/stdin').toString().trim()
// .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let A = new Array(10).fill(1n)
A[0] = 0n
while (--N) {
  const B = [...A]
  for (let i = 0; i < 10; i++) B[i] = (A[i - 1] ?? 0n) + (A[i + 1] ?? 0n)
  A = B
}
const o = A.reduce((a, b) => a + b, 0n) % 1000000000n
console.log(o.toString())
