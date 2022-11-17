const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = I.shift().split(' ').map(Number)
let O = Infinity
function F(x, a, b) {
  const y = x == 'B' ? 'W' : 'B'
  let n = 0
  for (let i = a; i < a + 8; i++)
    for (let j = b; j < b + 8; j++)
      if (((i + j) % 2 && I[i][j] == x) || (!((i + j) % 2) && I[i][j] == y)) n++
  return n
}
for (let i = 0; i < N - 7; i++)
  for (let j = 0; j < M - 7; j++) O = Math.min(O, F('B', i, j), F('W', i, j))
console.log(O)
