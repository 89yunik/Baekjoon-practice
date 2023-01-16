const {timeStamp} = require('console')

const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
class Node {
  constructor(e) {
    this.value = e
    this.next = null
  }
}
class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  push(e) {
    const node = new Node(e)
    this.tail ? (this.tail.next = node) : (this.head = node)
    this.tail = node
    this.size++
  }
  pop() {
    if (!this.head) return null
    const x = this.head.value
    this.head = this.head.next
    if (!this.head) this.tail = null
    this.size--
    return x
  }
}
const [[N, K], V, Q] = [
  I[0].split(' ').map(Number),
  Array(100001).fill(0),
  new Queue(),
]
Q.push(N)
let [cnt, x] = [1, 0]
while (Q.size) {
  const c = Q.pop()
  if (!cnt--) {
    cnt = Q.size
    x++
  }
  if (V[c]) continue
  V[c] = 1
  if (c == K) break
  c && Q.push(c - 1)
  c < 100000 && Q.push(c + 1)
  c <= 50000 && Q.push(c * 2)
}
console.log(x)
