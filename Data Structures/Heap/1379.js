let [[N], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
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
      if (A[p][0] < A[c][0]) break
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
      const [l, r] = [2 * p + 1, 2 * p + 2]
      const c = A[r] ? (A[r][0] < A[l][0] ? r : l) : l
      if (A[p][0] < A[c][0]) break
      ;[A[p], A[c]] = [A[c], A[p]]
      p = c
    }
    return x
  }
}
I.sort((a, b) => a[1] - b[1])
let [H, used, A] = [new Heap(), Array(N).fill(0), Array(N).fill(0)]
I.forEach(([i, s, e]) => {
  if (H.A.length && H.A[0][0] <= s) {
    const [, j] = H.pop()
    used[j] = 0
  }
  const x = used.indexOf(0)
  A[i] = x + 1
  H.push([e, x])
  used[x] = 1
})
A.shift()
console.log(H.A.length, A.join(' '))
