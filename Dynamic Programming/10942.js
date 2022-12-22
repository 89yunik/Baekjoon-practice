let [[N], A, [M], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
const B = [...Array(N)].map((_, i) => new Set())
for (let i = 0; i < N; i++) {
  let j = 0
  while (i + j < N && i >= j && A[i + j] == A[i - j]) B[i - j].add(i + j++)
  j = 0
  while (i + j + 1 < N && i >= j && A[i + j + 1] == A[i - j])
    B[i - j].add(i + j++ + 1)
}
let O = []
for (let [S, E] of I) O.push(B[--S].has(--E) ? 1 : 0)
console.log(O.join('\n'))
// const B = [...Array(N)].map((_, i) => {
//   const C = new Set()
//   C.add(i)
//   loop: for (let j = i + 1; j < N; j++) {
//     let [S, E] = [i, j]
//     while (S < E) if (A[S++] != A[E--]) continue loop
//     C.add(j)
//   }
//   return C
// })
// let O = []
// for (let [S, E] of I) O.push(B[--S].has(--E) ? 1 : 0)
// console.log(O.join('\n'))
