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
  const [[M, N], A, Q] = [I[0].split(' ').map(Number), [], new Queue()]
  for (let i = 1; i <= N; i++) A.push(I[i].split(' ').map(Number))
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++)
      if (A[i][j] == 1) {
        A[i][j] = 0
        Q.push([i, j, 0])
      }
  let [cnt, x] = [Q.size, -1]
  while (Q.size) {
    const [i, j] = Q.pop()
    if (!cnt--) {
      cnt = Q.size
      x++
    }
    if (A[i][j]) continue
    A[i][j] = 1
    i && Q.push([i - 1, j])
    j && Q.push([i, j - 1])
    i + 1 < N && Q.push([i + 1, j])
    j + 1 < M && Q.push([i, j + 1])
  }
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) if (!A[i][j]) return -1
  return x
}
console.log(sol())
