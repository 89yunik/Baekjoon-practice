const [L, R] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
// const [L, R] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
let o = 0
if (L.length == R.length)
  for (let i = 0; i < L.length; i++) {
    if (L[i] != R[i]) break
    if (L[i] == '8') o++
  }
console.log(o)
