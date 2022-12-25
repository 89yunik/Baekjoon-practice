let [[N], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
const graph = [...Array(N + 1)].map(_ => [])
I.forEach(([a, b]) => graph[a].push(b))
const [O, visited] = [[], Array(N + 1).fill(0)]
function dfs(curr) {
  visited[curr] = 1
  for (const next of graph[curr]) if (!visited[next]) dfs(next)
  O.push(curr)
}
for (let i = 1; i <= N; i++) !visited[i] && dfs(i)
console.log(O.reverse().join(' '))
// const [graph, prev] = [[...Array(N + 1)].map(_ => []), Array(N + 1).fill(0)]
// I.forEach(([a, b]) => {
//   graph[a].push(b)
//   prev[b]++
// })
// const [O, visited] = [[], Array(N + 1).fill(0)]
// for (let i = 1; i <= N; i++)
//   if (!prev[i] && !visited[i]) {
//     let Q = [i]
//     while (Q.length) {
//       const curr = Q.shift()
//       visited[curr]++
//       O.push(curr)
//       for (const next of graph[curr]) if (!--prev[next]) Q.push(next)
//     }
//   }
// console.log(O.join(' '))
