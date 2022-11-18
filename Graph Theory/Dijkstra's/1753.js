const fs = require('fs')
const I = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [V, E] = I[0].split(' ').map(Number)
const K = +I[1]
let G = Array.from({length: V + 1}, _ => [])
for (let i = 2; i < E + 2; i++) {
  const [u, v, w] = I[i].split(' ').map(Number)
  G[u].push([v, w])
}
G = G.map(e => e.sort((a, b) => a[1] - b[1]))
let O = new Array(V + 1).fill(Infinity)
const visited = new Array(V + 1).fill(0)
visited[0] = 1
O[K] = 0
const Q = [[K, 0]]
while (Q.length) {
  const [c, l] = Q.shift()
  visited[c] = 1
  for (const [v, w] of G[c]) if (l + w < O[v]) O[v] = l + w
  const n = O.reduce((p, _, c) => (O[c] < O[p] && !visited[c] ? c : p), 0)
  if (n) Q.push([n, O[n]])
}
O.shift()
O = O.map(e => (e == Infinity ? 'INF' : e))
console.log(O.join('\n'))
// const swap = (A, a, b) => ([A[a], A[b]] = [A[b], A[a]])
// class Heap {
//   constructor() {
//     this.A = [0]
//   }
//   up(C) {
//     const A = this.A
//     const P = Math.floor(C / 2)
//     if (C < 2 || A[C][1] > A[P][1]) return
//     swap(A, P, C)
//     this.up(P)
//   }
//   down(P) {
//     const A = this.A
//     if (2 * P > A.length - 1) return
//     let C = 2 * P
//     if (2 * P + 1 < A.length && A[2 * P + 1][1] < A[2 * P][1]) C = 2 * P + 1
//     if (C > A.length - 1 || A[C][1] > A[P][1]) return
//     swap(A, P, C)
//     this.down(C)
//   }
//   mk(x) {
//     const A = this.A
//     A.push(x)
//     this.up(A.length - 1)
//   }
//   rm() {
//     const A = this.A
//     if (A.length < 2) return 0
//     const end = A.pop()
//     if (A.length == 1) return end
//     const [min] = A.splice(1, 1, end)
//     this.down(1)
//     return min
//   }
// }
// const [V, E] = I[0].split(' ').map(Number)
// const K = +I[1]
// let G = Array.from({length: V + 1}, _ => [])
// for (let i = 2; i < E + 2; i++) {
//   const [u, v, w] = I[i].split(' ').map(Number)
//   G[u].push([v, w])
// }
// G = G.map(e => e.sort((a, b) => a[1] - b[1]))
// const O = new Array(V + 1).fill('INF')
// O[K] = 0
// const H = new Heap()
// H.mk([K, 0])
// while (H.A.length > 1) {
//   const [c, l] = H.rm()
//   if (l > O[c]) continue
//   for (const [v, w] of G[c])
//     if (l + w < O[v] || O[v] == 'INF') {
//       O[v] = l + w
//       H.mk([v, O[v]])
//     }
// }
// O.shift()
// console.log(O.join('\n'))
