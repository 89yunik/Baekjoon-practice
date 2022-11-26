const N = +require('fs').readFileSync('./dev/stdin').toString().trim()
// .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const v = Array(N).fill(0)
function check(x) {
  for (let i = 0; i < x; i++)
    if (v[i] == v[x] || Math.abs(v[x] - v[i]) == x - i) return 0
  return 1
}
let o = 0
function dfs(c) {
  if ((c == N && ++o) || v[c]) return
  for (let i = 0; i < N; i++) {
    v[c] = i
    if (check(c)) dfs(c + 1)
    v[c] = 0
  }
}
dfs(0)
console.log(o)
