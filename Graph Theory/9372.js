const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
//9372

const T = Number(input[0])
const length = input.length
let i = 1
let answer = []
while (i < length) {
  const [N, M] = input[i].split(' ').map(e => +e)
  const graph = new Array(N + 1).fill().map(_ => [])
  for (let j = 1; j <= M; j++) {
    const [a, b] = input[i + j].split(' ').map(e => +e)
    graph[a].push(b)
    graph[b].push(a)
  }
  const visited = new Array(N + 1).fill(false)
  visited[0] = true
  const stack = []
  stack.push(1)
  let num = 0
  while (stack.length) {
    const curr = stack.pop()
    if (visited[curr]) continue
    visited[curr] = true
    num++
    for (const next of graph[curr]) {
      if (!visited[next]) stack.push(next)
    }
  }
  answer.push(num - 1)
  i += M + 1
}
console.log(answer.join('\n'))
