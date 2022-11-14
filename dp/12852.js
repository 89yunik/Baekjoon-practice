// const fs = require('fs')
// const I = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +require('fs').readFileSync('./dev/stdin')
const [D, R] = [Array(N + 1), Array(N + 1)]
D[0] = Infinity
D[1] = 0
for (let i = 2; i <= N; i++) {
  let n = [i - 1]
  if (!(i % 2)) n.push(i / 2)
  if (!(i % 3)) n.push(i / 3)
  n = n.reduce((a, b) => (D[a] < D[b] ? a : b), 0)
  D[i] = D[n] + 1
  R[i] = n
}
let O = N
for (let i = R[N]; i > 0; i = R[i]) O += ` ${i}`
console.log(D[N] + '\n' + O)
