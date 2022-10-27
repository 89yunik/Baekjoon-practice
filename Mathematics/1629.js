const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
function pow(A, B, C) {
  if (B === 0n) return 1n
  const D = pow(A, B / 2n, C)
  return B % 2n ? (D * D * A) % C : (D * D) % C
}

let [A, B, C] = input[0].split(' ').map(BigInt)
console.log(Number(pow(A, B, C)))
