let [T, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// const O = []
// t: for (let i = 0; i < T; i++) {
//   let [p, x, r, j] = [I[i * 3], I[i * 3 + 2], 0, 0]
//   x = x
//     .slice(1, x.length - 1)
//     .split(',')
//     .filter(e => e)
//     .map(Number)
//   for (const c of p)
//     if (c == 'R') r = +!r
//     else {
//       if (x.length > j) r ? x.pop() : j++
//       else {
//         O.push('error')
//         continue t
//       }
//     }
//   x = x.slice(j)
//   if (r) x = x.reverse()
//   O.push(`[${x.join(',')}]`)
// }
// console.log(O.join('\n'))
class Node {
  constructor(e) {
    this.value = e
    this.next = null
    this.prev = null
  }
}
class Deque {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  hPush(e) {
    const node = new Node(e)
    if (this.head) {
      this.head.prev = node
      node.next = this.head
    } else this.tail = node
    this.head = node
    this.size++
  }
  tPush(e) {
    const node = new Node(e)
    if (this.tail) {
      node.prev = this.tail
      this.tail.next = node
    } else this.head = node
    this.tail = node
    this.size++
  }
  hPop() {
    let x = null
    if (this.head) {
      x = this.head.value
      this.head = this.head.next
      if (this.head) this.head.prev = null
      else this.tail = null
      this.size--
    }
    return x
  }
  tPop() {
    let x = null
    if (this.tail) {
      x = this.tail.value
      this.tail = this.tail.prev
      if (this.tail) this.tail.next = null
      else this.head = null
      this.size--
    }
    return x
  }
}
const O = []
t: for (let i = 0; i < T; i++) {
  let [p, x, d, r, o] = [I[i * 3], I[i * 3 + 2], new Deque(), 0, []]
  x = x
    .slice(1, x.length - 1)
    .split(',')
    .filter(e => e.length)
    .map(Number)
  for (const n of x) d.tPush(n)
  for (const c of p)
    if (c == 'R') r = +!r
    else if (c == 'D') {
      const n = r ? d.tPop() : d.hPop()
      if (n == null) {
        O.push('error')
        continue t
      }
    }
  while (d.size) r ? o.push(d.tPop()) : o.push(d.hPop())
  O.push(`[${o.join(',')}]`)
}
console.log(O.join('\n'))
