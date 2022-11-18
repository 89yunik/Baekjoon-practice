const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function dfs(i, l) {
  visited[i] = 1
  if (l > output) [output, start] = [l, i]
  for (let j = 0; j < edge[i].length - 1; j += 2) {
    const [next, nextL] = [edge[i][j], edge[i][j + 1]]
    if (!visited[next]) dfs(next, l + nextL)
  }
}

const v = +input[0]
const edge = Array.from({length: v + 1})
edge[0] = []
for (let i = 1; i <= v; i++) {
  const [num, ...info] = input[i].split(' ').map(Number)
  edge[num] = info
}
let visited = new Array(v + 1).fill(0)
let [output, start] = [0, 0]
dfs(1, 0)
visited.fill(0)
dfs(start, 0)
console.log(output)
