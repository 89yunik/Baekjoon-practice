const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = I[0].split(' ').map(Number)
let A = I[1]
  .split(' ')
  .map(Number)
  .reduce(
    (a, b) => {
      a.push(a[a.length - 1] + b)
      return a
    },
    [0],
  )
const O = []
for (let i = 2; i < M + 2; i++) {
  const [s, e] = I[i].split(' ').map(Number)
  O.push(A[e] - A[s - 1])
}
console.log(O.join('\n'))
// const [N, S] = [+I[0], []]
// for (let i = 1; i <= N; i++) S.push(I[i].split(' ').map(Number))
// const [A, B] = [new Set(), new Set()]
// let o = Infinity
// function dfs(i, diff) {
//   if (A.size + B.size == N) {
//     o = Math.min(o, Math.abs(diff))
//     return
//   }
//   for (let j = i; j < N; j++)
//     if (!A.has(j) && !B.has(j)) {
//       if (A.size < N / 2) {
//         let x = 0
//         for (let n of A) x += S[n][j] + S[j][n]
//         A.add(j)
//         dfs(i + 1, diff + x)
//         A.delete(j)
//       }
//       if (B.size < N / 2) {
//         let x = 0
//         for (let n of B) x += S[n][j] + S[j][n]
//         B.add(j)
//         dfs(i + 1, diff - x)
//         B.delete(j)
//       }
//     }
// }
// dfs(0, 0)
// console.log(o)
