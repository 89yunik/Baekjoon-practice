let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
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
    let x = null
    if (this.head) {
      x = this.head.value
      this.head = this.head.next
      if (!this.head) this.tail = null
      this.size--
    }
    return x
  }
}
function sol() {
  const [[M, N, H], A, Q] = [I[0].split(' ').map(Number), [], new Queue()]
  for (let i = 1; i <= N * H; i++) {
    if (i % N == 1) A.push([])
    A[A.length - 1].push(I[i].split(' ').map(Number))
  }
  for (let i = 0; i < H; i++)
    for (let j = 0; j < N; j++)
      for (let k = 0; k < M; k++) if (A[i][j][k] == 1) Q.push([i, j, k])
  let [cnt, x] = [Q.size, 0]
  while (Q.size) {
    const [i, j, k] = Q.pop()
    if (!cnt--) {
      cnt = Q.size
      x++
    }
    const next = [
      [i - 1, j, k],
      [i + 1, j, k],
      [i, j - 1, k],
      [i, j + 1, k],
      [i, j, k - 1],
      [i, j, k + 1],
    ]
    for (const [a, b, c] of next)
      if (
        a < H &&
        a >= 0 &&
        b < N &&
        b >= 0 &&
        c < M &&
        c >= 0 &&
        !A[a][b][c]
      ) {
        A[a][b][c] = 1
        Q.push([a, b, c])
      }
  }
  for (let i = 0; i < H; i++)
    for (let j = 0; j < N; j++)
      for (let k = 0; k < M; k++) if (!A[i][j][k]) return -1
  return x
}
console.log(sol())
