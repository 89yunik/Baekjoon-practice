let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// class Node {
//   constructor(e) {
//     this.value = e
//     this.next = null
//   }
// }
// class Queue {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }
//   push(e) {
//     const node = new Node(e)
//     this.tail ? (this.tail.next = node) : (this.head = node)
//     this.tail = node
//     this.size++
//   }
//   pop() {
//     let x = null
//     if (this.head) {
//       x = this.head.value
//       this.head = this.head.next
//       !this.head && (this.tail = null)
//       this.size--
//     }
//     return x
//   }
// }
// const [N, K] = I[0].split(' ').map(Number)
// let [Q, V] = [new Queue(), Array(100001).fill(null)]
// Q.push(N)
// V[N] = 0
// while (Q.size) {
//   const c = Q.pop()
//   if (c == K) break
//   if (c)
//     for (let i = c * 2; i < 100001; i *= 2)
//       if (V[i] == null) {
//         V[i] = V[c]
//         Q.push(i)
//       }
//   const next = [c - 1, c + 1]
//   for (const n of next)
//     if (n >= 0 && n <= 100000 && V[n] == null) {
//       V[n] = V[c] + 1
//       Q.push(n)
//     }
// }
// console.log(V[K])
const [N, K] = I[0].split(' ').map(Number)
let [Q, V] = [[N], Array(100001).fill(null)]
V[N] = 0
while (Q.length) {
  const c = Q.shift()
  if (c == K) break
  if (c)
    for (let i = c * 2; i < 100001; i *= 2)
      if (V[i] == null) {
        V[i] = V[c]
        Q.push(i)
      }
  const next = [c - 1, c + 1]
  for (const n of next)
    if (n >= 0 && n <= 100000 && V[n] == null) {
      V[n] = V[c] + 1
      Q.push(n)
    }
}
console.log(V[K])
