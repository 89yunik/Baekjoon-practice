let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\r\n`.map(Number)
class Heap {
  constructor(e) {
    this.A = []
    this.check = e
  }
  push(e) {
    const A = this.A
    A.push(e)
    let c = A.length - 1
    while (c) {
      const p = ~~((c - 1) / 2)
      if (this.check(A[p], A[c])) break
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
      const c = this.check(A[r], A[l]) ? r : l
      if (this.check(A[p], A[c])) break
      ;[A[p], A[c]] = [A[c], A[p]]
      p = c
    }
    return x
  }
}
let O = []
const H = new Heap((a, b) => {
  const [A, B] = [Math.abs(a), Math.abs(b)]
  return A < B || (A == B && a < b)
})
for (let n of I)
  if (n) H.push(n)
  else O.push(H.pop() ?? 0)
console.log(O.join`\n`)
