let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [N, ...I] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(e => e.split(' ').map(Number))
const M = Math.min
for (let i = 1; i < +N; i++)
  for (let j = 0; j < 3; j++) {
    const T = [...I[i - 1]]
    T.splice(j, 1)
    I[i][j] += M(...T)
  }
console.log(M(...I[+N - 1]))
