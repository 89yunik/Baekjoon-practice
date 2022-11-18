const fs = require('fs')
let I = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let I = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [[R, C], A] = [I.shift().split(' '), new Array(26).fill(0)]
I = I.map(r => r.split('').map(e => e.charCodeAt() - 65))
let O = 0
function dfs(i, j, x) {
  A[I[i][j]]++
  if (x > O) O = x
  if (i >= 1 && !A[I[i - 1][j]]) dfs(i - 1, j, x + 1)
  if (j >= 1 && !A[I[i][j - 1]]) dfs(i, j - 1, x + 1)
  if (i < +R - 1 && !A[I[i + 1][j]]) dfs(i + 1, j, x + 1)
  if (j < +C - 1 && !A[I[i][j + 1]]) dfs(i, j + 1, x + 1)
  A[I[i][j]]--
}
dfs(0, 0, 1)
console.log(O)
// const visited = new Set()
// let O = 0
// function dfs(i, j) {
//   visited.add(I[i][j])
//   O = Math.max(O, visited.size)
//   if (i >= 1 && !visited.has(I[i - 1][j])) dfs(i - 1, j)
//   if (j >= 1 && !visited.has(I[i][j - 1])) dfs(i, j - 1)
//   if (i < R - 1 && !visited.has(I[i + 1][j])) dfs(i + 1, j)
//   if (j < C - 1 && !visited.has(I[i][j + 1])) dfs(i, j + 1)
//   visited.delete(I[i][j])
// }
// dfs(0, 0)
// console.log(O)
