const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function distancePow([a, b], [c, d]) {
  return Math.pow(a - c, 2) + Math.pow(b - d, 2)
}
const coordinate = []
for (const e of input) {
  const [x, y] = e.split(' ').map(e => +e)
  coordinate.push([x, y])
}
const line = []
line.push(distancePow(coordinate[0], coordinate[1]))
line.push(distancePow(coordinate[0], coordinate[2]))
line.push(distancePow(coordinate[1], coordinate[2]))
line.sort((a, b) => a - b)
let answer = ''
if (Math.sqrt(line[2]) === Math.sqrt(line[0]) + Math.sqrt(line[1])) answer = 'X'
else if (line[0] === line[1] && line[1] === line[2]) answer = 'JungTriangle'
else if (line[0] === line[1] || line[1] === line[2]) {
  const num1 = line[0] + line[1]
  const num2 = line[2]
  if (num1 < num2) answer = 'Dunkak2Triangle'
  else if (num1 === num2) answer = 'Jikkak2Triangle'
  else answer = 'Yeahkak2Triangle'
} else {
  const num1 = line[0] + line[1]
  const num2 = line[2]
  if (num1 < num2) answer = 'DunkakTriangle'
  else if (num1 === num2) answer = 'JikkakTriangle'
  else answer = 'YeahkakTriangle'
}

console.log(answer)
