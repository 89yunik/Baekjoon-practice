let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
let [A, x] = [Array(26).fill(0), 9]
for (let e of I)
  for (let i = 0; i < e.length; i++)
    A[e[e.length - 1 - i].charCodeAt() - 65] += 10 ** i
console.log(
  A.filter(e => e)
    .sort((a, b) => b - a)
    .reduce((a, b) => a + b * x--, 0),
)
