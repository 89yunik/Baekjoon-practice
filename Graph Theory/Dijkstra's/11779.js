const fs = require('fs')
let [N, M, ...I] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let [N, M, ...I] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
N = +N
M = +M
const [s, e] = I.pop().split(' ').map(Number)
const G = Array.from({length: N + 1}, _ => [])
for (const i of I) {
  const [a, b, c] = i.split(' ').map(Number)
  G[a].push([b, c])
}
const D = Array.from({length: N + 1}, _ => [Infinity, []])
D[s] = [0, [s]]
// const Q = [[s, 0]]
// while (Q.length) {
//   const [c, d] = Q.shift()
//   if (d > D[c][0]) continue
//   for (const [n, nD] of G[c])
//     if (D[c][0] + nD < D[n][0]) {
//       D[n][0] = D[c][0] + nD
//       D[n][1] = [...D[c][1], n]
//       Q.push([n, D[n][0]])
//     }
// }
const swap = (A, a, b) => ([A[a], A[b]] = [A[b], A[a]])
class Heap {
  constructor() {
    this.A = [0]
  }
  up(C) {
    const A = this.A
    const P = Math.floor(C / 2)
    if (C < 2 || A[C][1] > A[P][1]) return
    swap(A, P, C)
    this.up(P)
  }
  down(P) {
    const A = this.A
    if (2 * P > A.length - 1) return
    let C = 2 * P
    if (2 * P + 1 < A.length && A[2 * P + 1][1] < A[2 * P][1]) C = 2 * P + 1
    if (C > A.length - 1 || A[C][1] > A[P][1]) return
    swap(A, P, C)
    this.down(C)
  }
  mk(x) {
    const A = this.A
    A.push(x)
    this.up(A.length - 1)
  }
  rm() {
    const A = this.A
    if (A.length < 2) return 0
    const end = A.pop()
    if (A.length == 1) return end
    const [min] = A.splice(1, 1, end)
    this.down(1)
    return min
  }
}
const H = new Heap()
H.mk([s, 0])
while (H.A.length > 1) {
  const [c, d] = H.rm()
  if (d > D[c][0]) continue
  for (const [n, nD] of G[c])
    if (D[c][0] + nD < D[n][0]) {
      D[n][0] = D[c][0] + nD
      D[n][1] = [...D[c][1], n]
      H.mk([n, D[n][0]])
    }
}
console.log([D[e][0], D[e][1].length, D[e][1].join(' ')].join('\n'))
