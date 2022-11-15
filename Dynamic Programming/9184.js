const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.pop()
const answer = []
const w = new Array(21)
  .fill()
  .map(_ => new Array(21).fill().map(_ => new Array(21)))
for (let a = 0; a < 21; a++) {
  for (let b = 0; b < 21; b++) {
    for (let c = 0; c < 21; c++) {
      if (a <= 0 || b <= 0 || c <= 0) w[a][b][c] = 1
      else if (a < b && b < c) {
        w[a][b][c] = w[a][b][c - 1] + w[a][b - 1][c - 1] - w[a][b - 1][c]
      } else {
        w[a][b][c] =
          w[a - 1][b][c] +
          w[a - 1][b - 1][c] +
          w[a - 1][b][c - 1] -
          w[a - 1][b - 1][c - 1]
      }
    }
  }
}

for (let tCase of input) {
  const [a, b, c] = tCase.split(' ').map(e => +e)
  let result = 0
  if (a <= 0 || b <= 0 || c <= 0) result = 1
  else if (a > 20 || b > 20 || c > 20) result = w[20][20][20]
  else result = w[a][b][c]
  answer.push(`w(${a}, ${b}, ${c}) = ${result}`)
}
console.log(answer.join('\n'))
