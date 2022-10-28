const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [L, R] = input[0].split(' ')
let output = 0
if (L.length == R.length)
  for (let i = 0; i < L.length; i++) {
    if (L[i] != R[i]) break
    if (L[i] == '8') output++
  }
console.log(output)
