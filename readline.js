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
      if (A[p][1] < A[c][1]) break
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
      const c = A[r] ? (A[r][1] < A[l][1] ? r : l) : l
      if (A[p][1] < A[c][1]) break
      ;[A[p], A[c]] = [A[c], A[p]]
      p = c
    }
    return x
  }
}
const H = new Heap()
let N
require('readline')
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on('line', function (l) {
    const [s, e] = l.split(' ').map(Number)
    if (!e) N = s
    else H.push([s, e])
  })
  .on('close', function () {
    let o = 1
    let [, c] = H.pop()
    while (H.A.length) {
      const [s, e] = H.pop()
      if (c <= s) {
        c = e
        o++
      }
    }
    console.log(o)
    process.exit()
  })
