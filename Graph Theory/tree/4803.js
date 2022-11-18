const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
function value(i, num) {
  return num == 0
    ? `Case ${i}: No trees.`
    : num == 1
    ? `Case ${i}: There is one tree.`
    : `Case ${i}: A forest of ${num} trees.`
}
let [i, t, output] = [0, 0, []]
while (i < input.length - 1) {
  const [n, m] = input[i].split(' ').map(Number)
  const graph = Array.from({length: n + 1}, _ => [])
  for (let j = i + 1; j <= i + m; j++) {
    const [a, b] = input[j].split(' ').map(Number)
    graph[a].push(b)
    graph[b].push(a)
  }
  function dfs(p, c) {
    if (visited[c]) return 0
    visited[c]++
    let cnt = 1
    for (const n of graph[c]) if (+n != p) cnt *= dfs(c, +n)
    return cnt
  }
  // function dfs(s) {
  //   const stack = [s]
  //   let isTree = 1
  //   while (stack.length) {
  //     const c = stack.pop()
  //     if (visited[c]) isTree = 0
  //     visited[c]++
  //     for (const n of graph[c]) if (!visited[+n]) stack.push(+n)
  //   }
  //   return isTree
  // }
  let [visited, num] = [new Array(n + 1).fill(0), 0]
  for (let j = 1; j <= n; j++) if (!visited[j]) num += dfs(0, j)
  // for (let j = 1; j <= n; j++) if (!visited[j]) num += dfs(j)
  output.push(value(++t, num))
  i += m + 1
}
console.log(output.join('\n'))
