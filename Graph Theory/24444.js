const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class Node {
  constructor(e) {
    this.element = e
    this.next = null
  }
}
class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(e) {
    const node = new Node(e)
    if (!this.length) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }
  pop() {
    let result = -1
    if (this.head) {
      result = this.head.element
      this.head = this.head.next
      if (!this.head) this.tail = null
      this.length--
    }
    return result
  }
  size() {
    return this.length
  }
}

function bfs(R) {
  const queue = new Queue()
  queue.push(R)
  while (queue.length) {
    const curr = queue.pop()
    if (visited[curr]) continue
    visited[curr] = num++
    for (let i = 0; i < graph[curr].length; i++) {
      const x = graph[curr][i]
      if (!visited[x]) queue.push(x)
    }
  }
}
const [N, M, R] = input[0].split(' ').map(e => +e)
const visited = new Array(N + 1).fill(0)
const graph = new Array(N + 1).fill().map(_ => [])
let num = 1
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(e => +e)
  graph[a].push(b)
  graph[b].push(a)
}
graph.forEach(e => e.sort((a, b) => a - b))
bfs(R)
visited.shift()
console.log(visited.join('\n'))
