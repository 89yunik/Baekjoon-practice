let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
N = +N
let [A, B] = [Array(26).fill(0), Array(26).fill(0)]
for (let i = 0; i < N; i++) for (let j = 0; j < I[i].length; j++) {}
