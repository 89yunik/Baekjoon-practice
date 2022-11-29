let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const N = +I.shift()
I = I.map(Number)
const O = Array(N + 1).fill(0)
O[1] = I[0]
O[2] = I[0] + I[1]
for (let i = 3; i <= N; i++)
  O[i] = Math.max(O[i - 1], O[i - 2] + I[i - 1], O[i - 3] + I[i - 2] + I[i - 1])
console.log(O[N])
