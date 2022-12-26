let n = BigInt(require('fs').readFileSync('./dev/stdin').toString()) % 1500000n
// .trim()
// .split('\r\n')
// .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let A = [0, 1]
for (let i = 2; i <= n; i++) A = [A[1], (A[0] + A[1]) % 1000000]
console.log(A[1])
