const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function line(dot1, dot2) {
  return Math.sqrt(
    Math.pow(dot1[0] - dot2[0], 2) + Math.pow(dot1[1] - dot2[1], 2),
  )
}
input = input.map(e => e.split(' ').map(e => +e))
const a = line(input[0], input[1])
const b = line(input[1], input[2])
const c = line(input[2], input[0])

let answer = []
const max = Math.max(a, b, c)
switch (max) {
  case a:
    for (let i = 0; i <= 1; i++)
      answer[i] = input[0][i] + input[1][i] - input[2][i]
    break
  case b:
    for (let i = 0; i <= 1; i++)
      answer[i] = input[1][i] + input[2][i] - input[0][i]
    break
  case c:
    for (let i = 0; i <= 1; i++)
      answer[i] = input[2][i] + input[0][i] - input[1][i]
    break
}

console.log(answer.join(' '))
