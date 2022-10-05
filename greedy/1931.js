const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()
input = input
  .map(e => e.split(' ').map(e => +e))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0])
let [answer, used] = [0, 0]
for (const [start, end] of input) {
  if (used > start) continue
  used = end
  answer++
}
console.log(answer)
