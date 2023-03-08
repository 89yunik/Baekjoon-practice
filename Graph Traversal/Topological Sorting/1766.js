let [[N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
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
      if (A[p] < A[c]) break
      ;[A[p], A[c]] = [A[c], A[p]]
      c = p
    }
  }
  pop() {
    const A = this.A
    const [x, last, len] = [A[0], A.pop(), A.length]
    if (len) A[0] = last
    let p = 0
    while (2 * p + 1 < len) {
      const [l, r] = [2 * p + 1, 2 * p + 2]
      const c = A[r] < A[l] ? r : l
      if (A[p] < A[c]) break
      ;[A[p], A[c]] = [A[c], A[p]]
      p = c
    }
    return x
  }
}
const [G, deg, H, O] = [
  [...Array(N + 1)].map(_ => []),
  Array(N + 1).fill(0),
  new Heap(),
  [],
]
I.forEach(([a, b]) => G[a].push(b) && ++deg[b])
deg.forEach((e, i) => i && !e && H.push(i))
while (H.A.length) {
  const c = H.pop()
  O.push(c)
  G[c].forEach(n => !--deg[n] && H.push(n))
}
console.log(O.join` `)
