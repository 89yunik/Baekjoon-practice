const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function stars(N, [x, y]) {
  if (N === 3) {
    for (let i = x; i <= x + 2; i++) {
      for (let j = y; j <= y + 2; j++) {
        if (i === x + 1 && j === y + 1) continue
        arr[i][j] = '*'
      }
    }
  } else {
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        if (i === 1 && j === 1) continue
        stars(N / 3, [x + (N / 3) * i, y + (N / 3) * j])
      }
    }
  }
}
const N = Number(input[0])
const arr = new Array(N).fill().map(_ => new Array(N).fill(' '))
stars(N, [0, 0])
let answer = ''
for (let row of arr) answer += row.join('') + '\n'
answer = answer.replace(/\n$/, '')
console.log(answer)
