const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, C] = input.shift().split(' ').map(Number)
const X = input.map(Number).sort((a, b) => a - b)
let [L, R] = [1, Math.floor((X[N - 1] - X[0]) / (C - 1))]
function cnt(dist) {
  const A = [X[0]]
  for (let i = 1; i < N; i++) if (X[i] - A[A.length - 1] >= dist) A.push(X[i])
  return A.length
}
while (L < R) {
  const M = Math.ceil((L + R) / 2)
  cnt(M) < C ? (R = M - 1) : (L = M)
}
console.log(L)
