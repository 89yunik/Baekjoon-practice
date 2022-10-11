const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
const min = input[1].split(' ').map(e => +e)
for (let i = 2; i <= N; i++) {
  const [R, G, B] = input[i].split(' ').map(e => +e)
  const temp1 = R + Math.min(min[1], min[2])
  const temp2 = G + Math.min(min[0], min[2])
  const temp3 = B + Math.min(min[0], min[1])
  min[0] = temp1
  min[1] = temp2
  min[2] = temp3
}
console.log(Math.min(...min))
