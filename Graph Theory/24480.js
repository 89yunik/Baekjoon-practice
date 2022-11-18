const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function dfs(R) {
  visited[R] = num
  for (let i = 0; i < graph[R].length; i++) {
    const x = graph[R][i]
    if (!visited[x]) dfs(x, ++num)
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
graph.forEach(e => e.sort((a, b) => b - a))
dfs(R, num)
visited.shift()
console.log(visited.join('\n'))
