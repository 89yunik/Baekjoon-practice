const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// class Node {
//   constructor(e) {
//     this.value = e
//     this.prev = null
//     this.next = null
//   }
// }
// class Deque {
//   constructor() {
//     this.front = null
//     this.back = null
//     this.size = 0
//   }
//   push_front(e) {
//     const node = new Node(e)
//     if (this.front) {
//       node.next = this.front
//       node.next.prev = node
//     } else this.back = node
//     this.front = node
//     this.size++
//   }
//   push_back(e) {
//     const node = new Node(e)
//     if (this.back) {
//       node.prev = this.back
//       node.prev.next = node
//     } else this.front = node
//     this.back = node
//     this.size++
//   }
//   pop_front() {
//     if (!this.front) return -1
//     const n = this.front.value
//     this.front = this.front.next
//     this.front ? (this.front.prev = null) : (this.back = null)
//     this.size--
//     return n
//   }
//   pop_back() {
//     if (!this.back) return -1
//     const n = this.back.value
//     this.back = this.back.prev
//     this.back ? (this.back.next = null) : (this.front = null)
//     this.size--
//     return n
//   }
// }
// const [N, D, O] = [+I[0], new Deque(), []]
const [N, D, O] = [+I[0], [], []]
for (let i = 1; i <= N; i++) {
  const [c, n] = I[i].split(' ')
  const l = D.length
  if (c == 'push_back') D.push(n)
  if (c == 'push_front') D.unshift(n)
  if (c == 'pop_back') O.push(l ? D.pop(n) : -1)
  if (c == 'pop_front') O.push(l ? D.shift(n) : -1)
  if (c == 'size') O.push(l)
  if (c == 'empty') O.push(+!l)
  if (c == 'front') O.push(l ? D[0] : -1)
  if (c == 'back') O.push(l ? D[l - 1] : -1)
}
console.log(O.join('\n'))
