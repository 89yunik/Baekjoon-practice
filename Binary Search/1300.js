let [N, k] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(Number)
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let [x, i, j] = [0, 1, 2]
while (x + i < k)
  if (i < N) {
    x += i++
    j++
  } else {
    x += i--
    j++
  }
const A = [...Array(j)]
console.log(x, i, j)
