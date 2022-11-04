const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [L, C] = input[0].split(' ').map(Number)
const [A, B] = [input[1].split(' ').sort(), []]
function T(S) {
  const v = S.split('').reduce((p, c) => p + +/[aeiou]/.T(c), 0)
  return v < 1 || L - v < 2 ? 0 : 1
}
function dfs(S, x) {
  if (S.length == L && T(S)) {
    B.push(S)
    return
  }
  for (let i = x + 1; i < C; i++) dfs(S + A[i], i)
}
for (let i = 0; i < C; i++) dfs(A[i], i)
console.log(B.join('\n'))
