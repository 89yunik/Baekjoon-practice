let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +I.shift()
I = I.map(e => e.split(' ').map(Number))
const [O, V] = [
  Array(N)
    .fill()
    .map(_ => Array(N).fill(0)),
  Array(N).fill(0),
]
function dfs(s, c) {
  for (const i in I[c])
    if (I[c][i] && V[i] <= s) {
      V[i]++
      O[s][i] = 1
      dfs(s, +i)
    }
}
for (let i = 0; i < N; i++) dfs(i, i)
console.log(O.map(e => e.join(' ')).join('\n'))
