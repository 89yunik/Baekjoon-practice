const fs = require('fs')
let U = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let U = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +U.shift()
U = U.map(Number).sort((a, b) => b - a)
const S = new Set()
for (let x = 0; x < N; x++) for (let y = x; y < N; y++) S.add(U[x] + U[y])
function sol() {
  for (const k of U) for (const z of U) if (S.has(k - z)) return k
}
console.log(sol())
