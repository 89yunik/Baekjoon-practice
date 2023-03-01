let [[N, M], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
// let [[N, M], I] = [[300, 300], [...Array(300)].map(_ => Array(300).fill(1))]
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
function F() {
  let [Q, o] = [new Queue(), 0]
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) if (I[i][j]) Q.push([i, j])
  let [cnt, A] = [Q.size, I.map(e => [...e])]
  while (Q.size) {
    const [x, y] = Q.pop()
    if (!cnt-- && ++o) {
      I = A.map(e => [...e])
      const V = [...Array(N)].map(_ => Array(M).fill(0))
      let n = 0
      function dfs(x, y) {
        V[x][y]++
        n++
        const next = [
          [x - 1, y],
          [x, y - 1],
          [x, y + 1],
          [x + 1, y],
        ]
        next.forEach(
          ([nx, ny]) => I[nx] && I[nx][ny] && !V[nx][ny] && dfs(nx, ny),
        )
      }
      dfs(x, y)
      if (n - 1 != Q.size) return o
      cnt = Q.size
    }
    const next = [
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y],
    ]
    next.forEach(([nx, ny]) => I[nx] && !I[nx][ny] && A[x][y] > 0 && A[x][y]--)
    if (A[x][y] > 0) Q.push([x, y])
  }
  return 0
}

console.log(F())
