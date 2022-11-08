const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
const P = new Array(10000).fill(1)
for (let i = 2; i <= 10000; i++)
  if (P[i]) for (let j = 2; i * j <= 10000; j++) P[i * j] = 0
const A = []
for (const N of input)
  for (let i = Math.floor(N / 2); i >= 0; i--)
    if (P[i] && P[N - i]) {
      A.push(`${i} ${N - i}`)
      break
    }
console.log(A.join('\n'))
