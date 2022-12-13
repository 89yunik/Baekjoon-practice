let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [T, O] = [+I.shift(), []]
for (let i = 0; i < T; i++) {
  const [n, A] = [+I[3 * i], []]
  for (let j = 1; j < 3; j++) A.push(I[3 * i + j].split(' ').map(Number))
  A[0][1] += A[1][0]
  A[1][1] += A[0][0]
  for (let j = 2; j < n; j++)
    for (let k = 0; k < 2; k++)
      A[k][j] += Math.max(A[+!k][j - 1], A[+!k][j - 2])
  O.push(Math.max(A[0][n - 1], A[1][n - 1]))
}
console.log(O.join('\n'))
