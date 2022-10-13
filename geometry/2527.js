const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let answer = []
for (let tCase of input) {
  const [x1, y1, x2, y2, x3, y3, x4, y4] = tCase.split(' ').map(e => +e)
  if (x3 > x2 || y3 > y2 || x4 < x1 || y4 < y1) {
    answer.push('d')
  } else if (
    ((x3 === x2 || x4 === x1) && y4 > y1 && y3 < y2) ||
    ((y3 === y2 || y4 === y1) && x4 > x1 && x3 < x2)
  )
    answer.push('b')
  else if ((x3 === x2 || x4 === x1) && (y3 === y2 || y4 === y1))
    answer.push('c')
  else answer.push('a')
}
console.log(answer.join('\n'))
