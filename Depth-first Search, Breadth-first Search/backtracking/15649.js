const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = I[0].split(' ').map(Number)
const [O, V] = [[], Array(N + 1).fill(0)]
function dfs(arr) {
  const l = arr.length
  if (l == M) return O.push(arr.join(' '))
  V[arr[l - 1]]++
  for (let i = 1; i <= N; i++) if (!V[i]) dfs([...arr, i])
  V[arr[l - 1]]--
}
dfs([])
console.log(O.join('\n'))
