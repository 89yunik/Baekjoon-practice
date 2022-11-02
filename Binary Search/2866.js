const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [R, C] = input[0].split(' ').map(Number)
const A = new Array(C).fill('')
for (let i = 0; i < C; i++) for (let j = 1; j <= R; j++) A[i] += input[j][i]
let [first, last] = [1, R]
while (first <= last) {
  const mid = Math.ceil((first + last) / 2)
  const B = new Set(A.map(e => e.slice(mid)))
  B.size == C ? (first = mid + 1) : (last = mid - 1)
}
console.log(last)
