const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [S, q, O] = [I[0], +I[1], []]
const l = S.length
const A = Array(26)
  .fill()
  .map(_ => Array(l).fill(0))
for (let i = 0; i < 26; i++)
  for (let j = 0; j < l; j++)
    A[i][j] = (A[i][j - 1] ?? 0) + +(i == S[j].charCodeAt() - 97)
for (let i = 2; i < q + 2; i++) {
  const [a, l, r] = I[i].split(' ')
  const j = a.charCodeAt() - 97
  O.push(A[j][r] - (A[j][l - 1] ?? 0))
}
console.log(O.join('\n'))
