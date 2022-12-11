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
