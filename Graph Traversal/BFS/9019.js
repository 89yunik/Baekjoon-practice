let [T, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const O = []
I.forEach(e => {
  const [A, B] = e.split(' ').map(Number)
  const [V, Q] = [Array(10000).fill(0), [[A, '']]]
  V[A] = 1
  let i = 0
  while (i < Q.length) {
    const [curr, comm] = Q[i++]
    if (curr == B) {
      O.push(comm)
      break
    }
    const Next = [
      [(curr * 2) % 10000, comm + 'D'],
      [curr ? curr - 1 : 9999, comm + 'S'],
      [(curr % 1000) * 10 + ~~(curr / 1000), comm + 'L'],
      [(curr % 10) * 1000 + ~~(curr / 10), comm + 'R'],
    ]
    for (const [next, nComm] of Next)
      if (!V[next]) {
        V[next] = 1
        Q.push([next, nComm])
      }
  }
})
console.log(O.join('\n'))
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
//       if (!this.head) this.tail = null
//       this.size--
//     }
//     return x
//   }
// }
// const O = []
// I.forEach(e => {
//   const [A, B] = e.split(' ').map(Number)
//   const [V, Q] = [Array(10000).fill(0), new Queue()]
//   Q.push([A, ''])
//   while (Q.size) {
//     const [curr, comm] = Q.pop()
//     if (V[curr]) continue
//     V[curr] = 1
//     if (curr == B) {
//       O.push(comm)
//       break
//     }
//     Q.push([(curr * 2) % 10000, comm + 'D'])
//     Q.push([curr ? curr - 1 : 9999, comm + 'S'])
//     Q.push([(curr % 1000) * 10 + ~~(curr / 1000), comm + 'L'])
//     Q.push([(curr % 10) * 1000 + ~~(curr / 10), comm + 'R'])
//   }
// })
// console.log(O.join('\n'))
