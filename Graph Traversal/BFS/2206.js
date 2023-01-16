let [X, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// .map(e => e.split(' '))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [[N, M], D] = [
  X.split(' ').map(Number),
  [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ],
]
let [Q, V, o, i] = [
  [[0, 0, 0]],
  [...Array(N)].map(_ => [...Array(M)].map(_ => [0, 0])),
  -1,
  0,
]
V[0][0][0] = 1
while (Q.length > i) {
  const [x, y, z] = Q[i++]
  if (x == N - 1 && y == M - 1 && (o = V[x][y][z])) break
  for (const [dx, dy] of D) {
    let [nx, ny, nz] = [x + dx, y + dy, z]
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
    if (I[nx][ny] == 1)
      if (z) continue
      else nz++
    if (V[nx][ny][nz]) continue
    V[nx][ny][nz] = V[x][y][z] + 1
    Q.push([nx, ny, nz])
  }
}
console.log(o)
// const [[N, M], D] = [X.split(' ').map(Number), [[-1, 0], [0, -1], [0, 1], [1, 0]]]
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
// let [Q, V, o] = [new Queue(), [...Array(N)].map(_ => [...Array(M)].map(_ => [0, 0])), -1]
// Q.push([0, 0, 0])
// V[0][0][0] = 1
// while (Q.size) {
//   const [x, y, z] = Q.pop()
//   if (x == N - 1 && y == M - 1 && (o = V[x][y][z])) break
//   for (const [dx, dy] of D) {
//     let [nx, ny, nz] = [x + dx, y + dy, z]
//     if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue
//     if (I[nx][ny] == 1)
//       if (z) continue
//       else nz++
//     if (V[nx][ny][nz]) continue
//     V[nx][ny][nz] = V[x][y][z] + 1
//     Q.push([nx, ny, nz])
//   }
// }
// console.log(o)
