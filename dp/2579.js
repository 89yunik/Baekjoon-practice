const fs = require('fs')
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => +e)
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[0]
const max = new Array(n + 1).fill(0)
max[1] = input[1]
max[2] = input[1] + input[2]
for (let i = 3; i <= n; i++) {
  max[i] = Math.max(max[i - 3] + input[i - 1] + input[i], max[i - 2] + input[i])
}
console.log(max[n])
