const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [V, P] = [new Array(246913).fill(0), []]
for (let i = 2; i <= 246912; i++) {
  if (V[i]) continue
  P.push(i)
  for (let j = 1; i * j <= 246912; j++) V[i * j] = 1
}
const A = []
input.pop()
for (const N of input)
  A.push(P.reduce((p, c) => p + +(c > +N && c <= 2 * +N), 0))
console.log(A.join('\n'))
