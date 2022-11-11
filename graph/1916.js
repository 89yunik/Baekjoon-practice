const fs = require('fs')
let [N, M, ...I] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let [N, M, ...I] = fs
// .readFileSync('/dev/stdin')
// .toString()
// .trim()
// .split('\n')
N = +N
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

let [x, y] = I.pop().split(' ').map(Number)
let G = Array.from({length: N + 1}, _ => [])
for (const i in I) {
  const [a, b, cost] = I[i].split(' ').map(Number)
  G[a].push([b, cost])
}
G = G.map(e => e.sort((a, b) => a[1] - b[1]))
const O = new Array(N + 1).fill(Infinity)
O[x] = 0
// const Q = [[x, 0]]
// while (Q.length) {
//   const [c, cost] = Q.shift()
//   if (cost > O[c]) continue
//   for (const [n, nCost] of G[c])
//     if (O[c] + nCost < O[n]) {
//       O[n] = O[c] + nCost
//       Q.push([n, O[n]])
//     }
// }
const H = new Heap()
H.mk([x, 0])
while (H.A.length > 1) {
  const [c, cost] = H.rm()
  if (cost > O[c]) continue
  for (const [n, nCost] of G[c])
    if (O[c] + nCost < O[n]) {
      O[n] = O[c] + nCost
      H.mk([n, O[n]])
    }
}

console.log(O[y])
