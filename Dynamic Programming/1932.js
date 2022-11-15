const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const max = new Array(n).fill(0)
max[0] = Number(input[1])
for (let i = 2; i <= n; i++) {
  const curr = input[i].split(' ').map(e => +e)
  const temp = new Array(curr.length).fill(0)
  temp[0] = curr[0] + max[0]
  for (let j = 1; j < curr.length; j++)
    temp[j] = curr[j] + Math.max(max[j - 1], max[j])
  for (let j = 0; j < curr.length; j++) max[j] = temp[j]
}
console.log(Math.max(...max))
