const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [M, N] = [+input[0], +input[1]]
const [V, P] = [new Array(N + 1).fill(0), []]
for (let i = 2; i <= N; i++) {
  if (V[i]) continue
  if (i >= M) P.push(i)
  for (let j = 1; i * j <= N; j++) V[i * j] = 1
}
const A = P.length ? P.reduce((a, b) => a + b, 0) + '\n' + P[0] : '-1'
console.log(A)
