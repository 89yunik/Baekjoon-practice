const fs = require('fs')
const I = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
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
const [N, E] = I[0].split(' ').map(Number)
const G = Array.from({length: N + 1}, _ => [])
for (let i = 1; i <= E; i++) {
  const [a, b, c] = I[i].split(' ').map(Number)
  G[a].push([b, c])
  G[b].push([a, c])
}
const [v1, v2] = I[E + 1].split(' ').map(Number)
function dist(s, e) {
  const D = new Array(N + 1).fill(Infinity)
  D[s] = 0
  const Q = [[s, 0]]
  while (Q.length) {
    const [c, d] = Q.shift()
    if (d > D[c]) continue
    for (const [n, nD] of G[c])
      if (D[c] + nD < D[n]) {
        D[n] = D[c] + nD
        Q.push([n, D[n]])
      }
  }
  // const H = new Heap()
  // H.mk([s, 0])
  // while (H.A.length > 1) {
  //   const [c, d] = H.rm()
  //   if (d > D[c]) continue
  //   for (const [n, nD] of G[c])
  //     if (D[c] + nD < D[n]) {
  //       D[n] = D[c] + nD
  //       H.mk([n, D[n]])
  //     }
  // }
  return D[e]
}
const [a, b] = [
  dist(1, v1) + dist(v1, v2) + dist(v2, N),
  dist(1, v2) + dist(v2, v1) + dist(v1, N),
]
let o = Math.min(a, b)
if (o == Infinity) o = -1
console.log(o)
