let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, dist, cost] = [
  +I[0],
  I[1].split(' ').map(BigInt),
  I[2].split(' ').map(BigInt),
]
let [o, i] = [0n, 0]
while (i < N - 1) {
  let [x, j] = [dist[i], i + 1]
  for (; j < N - 1 && cost[i] < cost[j]; j++) x += dist[j]
  o += cost[i] * x
  i = j
}
console.log(o.toString())
// const [N, M] = I.shift().split(' ').map(Number)
// I = I.map(e => e.split(' ').map(Number))
// function dfs(curr, cnt, num) {
//   num = num + I[curr[0]][curr[1]]
//   if (cnt == 4) {
//     max = Math.max(max, num)
//     return
//   }
//   curr[0] < N - 1 && dfs([curr[0] + 1, curr[1]], cnt + 1, num)
//   curr[1] < M - 1 && dfs([curr[0], curr[1] + 1], cnt + 1, num)
// }
// let max = 0
// for (let i = 0; i < N - 1; i++)
//   for (let j = 0; j < M - 1; j++) {
//     dfs([i, j], 1, 0)
//   }
// console.log(max)
