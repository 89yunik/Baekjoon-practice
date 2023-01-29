let [[N, K], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [N, K] = [300000, 300000]
// let I = [
//   ...[...Array(N)].map(_ => Array(2).fill(1)),
//   ...[...Array(K)].map(_ => [1]),
// ]
class Heap {
  constructor() {
    this.A = []
  }
  push(e) {
    const A = this.A
    A.push(e)
    let c = A.length - 1
    while (c) {
      const p = ~~((c - 1) / 2)
      if (A[p] > A[c]) break
      ;[A[p], A[c]] = [A[c], A[p]]
      c = p
    }
  }
  pop() {
    const A = this.A
    const [x, last] = [A[0], A.pop()]
    const len = A.length
    if (len) A[0] = last
    let p = 0
    while (p < (len - 1) / 2) {
      const [l, r] = [p * 2 + 1, p * 2 + 2]
      const c = A[r] > A[l] ? r : l
      if (A[p] > A[c]) break
      ;[A[p], A[c]] = [A[c], A[p]]
      p = c
    }
    return x
  }
}
const [A, B, H] = [I.slice(0, N), I.slice(N).flat(), new Heap()]
A.sort((a, b) => a[0] - b[0])
B.sort((a, b) => a - b)
let [o, i] = [0, 0]
for (const b of B) {
  while (i < N && A[i][0] <= b) H.push(A[i++][1])
  const x = H.pop()
  if (x) o += x
}
console.log(o)
