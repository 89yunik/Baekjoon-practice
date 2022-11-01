const fs = require('fs')
let A = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let A = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +A.shift()
A = A.map(Number).sort((a, b) => b - a)
const B = new Set()
for (let i = 0; i < N; i++)
  for (let j = i; j < N; j++) if (A[0] > A[i] + A[j]) B.add(A[i] + A[j])
A = new Set(A)
function sol() {
  for (const a of A) for (const b of A) if (B.has(a - b)) return a
}
console.log(sol())
