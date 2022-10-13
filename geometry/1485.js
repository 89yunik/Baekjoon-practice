const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function length([a, b], [c, d]) {
  return Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2))
}

let answer = []
const T = Number(input[0])
for (let i = 1; i <= 4 * T; i += 4) {
  const dot = []
  for (let j = 0; j < 4; j++) dot.push(input[i + j].split(' ').map(e => +e))
  const line = []
  for (let j = 0; j < 4; j++) {
    for (let k = j + 1; k < 4; k++) line.push(length(dot[j], dot[k]))
  }
  line.sort((a, b) => a - b)
  if (
    line[0] === line[1] &&
    line[1] === line[2] &&
    line[2] === line[3] &&
    line[4] === line[5]
  )
    answer.push(1)
  else answer.push(0)
}
console.log(answer.join('\n'))
