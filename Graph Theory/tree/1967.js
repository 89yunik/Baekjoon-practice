const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = +input[0]
const tree = Array.from({length: n + 1}, _ => [])
for (let i = 1; i <= n - 1; i++) {
  const [p, c, l] = input[i].split(' ').map(Number)
  tree[p].push([c, l])
  tree[c].push([p, l])
}
function dfs(curr, l) {
  if (visited.has(curr)) return
  visited.add(curr)
  if (l > max) [node, max] = [curr, l]
  for ([next, nextL] of tree[curr]) dfs(next, l + nextL)
}
let [node, max] = [0, 0]
const visited = new Set()
dfs(1, 0)
visited.clear()
dfs(node, 0)
console.log(max)
