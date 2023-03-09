const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +input[0]
const A = input[1].split(' ').map(Number)
function C(x) {
  if (x <= 1) return 0
  for (let i = 2; i <= Math.sqrt(x); i++) if (!(x % i)) return 0
  return 1
}
const n = A.reduce((p, c) => p + C(c), 0)
console.log(n)
