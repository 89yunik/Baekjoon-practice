const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +input[0]
if (N < 8) console.log(-1)
else {
  let output = N % 2 ? [2, 3, 2, N - 7] : [2, 2, 2, N - 6]
  const P = new Set()
  const visited = new Array(N + 1).fill(0)
  for (let i = 2; i <= N - 6; i++) {
    if (visited[i]) continue
    P.add(i)
    for (let j = i; j <= N; j += i) visited[j] = 1
  }
  if (!P.has(output[3])) {
    for (let i = 1; i < output[3]; i++)
      if (P.has(output[2] + i) && P.has(output[3] - i)) {
        output[2] += i
        output[3] -= i
        break
      }
  }
  console.log(output.join(' '))
}
