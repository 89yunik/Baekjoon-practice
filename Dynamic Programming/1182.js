const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, S] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)

function dp(i, S) {
  if (i == 0) return S == A[0] ? 1 : 0
  const n = A[i] == S ? 1 : 0
  return dp(i - 1, S) + dp(i - 1, S - A[i]) + n
}

console.log(dp(N - 1, S))
