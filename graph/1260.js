const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M, V] = input[0].split(' ').map(e => +e)
const graph = new Array(N + 1).fill().map(_ => [])
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(e => +e)
  graph[a].push(b)
  graph[b].push(a)
}
let visited = new Array(N + 1).fill(false)
graph.forEach(info => info.sort((a, b) => b - a))
visited[0] = true
let answer = [[], []]
const stack = []
stack.push(V)
while (stack.length) {
  const curr = stack.pop()
  if (visited[curr]) continue
  visited[curr] = true
  answer[0].push(curr)
  for (const next of graph[curr]) {
    if (!visited[next]) stack.push(next)
  }
}
graph.forEach(info => info.sort((a, b) => a - b))
visited = new Array(N + 1).fill(false)
visited[0] = true
const queue = []
queue.push(V)
while (queue.length) {
  const curr = queue.shift()
  if (visited[curr]) continue
  visited[curr] = true
  answer[1].push(curr)
  for (const next of graph[curr]) {
    if (!visited[next]) queue.push(next)
  }
}
answer.forEach(e => console.log(e.join(' ')))
