let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(Number)
class Heap {
  constructor(e) {
    this.arr = []
    this.check = e
  }
  push(e) {
    const A = this.arr
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
    const A = this.arr
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
let [max, min, O] = [new Heap((a, b) => a > b), new Heap((a, b) => a < b), []]
for (let i = 0; i < N; i++) {
  i % 2 ? min.push(I[i]) : max.push(I[i])
  if (max.arr[0] > min.arr[0]) {
    const [x, y] = [max.pop(), min.pop()]
    max.push(y)
    min.push(x)
  }
  O.push(max.arr[0])
}
console.log(O.join('\n'))
// console.log(min, max)
// let [A, O] = [[], []]
// I.forEach(e => {
//   let [l, r] = [0, A.length]
//   while (l < r) {
//     const mid = ~~((l + r) / 2)
//     A[mid] < e ? (l = mid + 1) : (r = mid)
//   }
//   A.splice(l, 0, e)
//   O.push(A[~~((A.length - 1) / 2)])
// })
// console.log(O.join('\n'))
