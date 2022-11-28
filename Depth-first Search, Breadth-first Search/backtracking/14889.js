const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, S] = [+I[0], []]
for (let i = 1; i <= N; i++) S.push(I[i].split(' ').map(Number))
const A = new Set()
let o = Infinity
function stat(A) {
  let x = 0
  for (let i = 0; i < A.length; i++)
    for (let j = 0; j < A.length; j++) x += S[A[i]][A[j]]
  return x
}
function dfs(max) {
  if (A.size == N / 2) {
    const B = []
    for (let i = 0; i < N; i++) if (!A.has(i)) B.push(i)
    o = Math.min(o, Math.abs(stat([...A]) - stat(B)))
    return
  }
  for (let i = max; i < N; i++)
    if (!A.has(i)) {
      A.add(i)
      dfs(i)
      A.delete(i)
    }
}
dfs(0)
console.log(o)
