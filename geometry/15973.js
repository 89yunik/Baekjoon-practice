// const fs = require('fs')
// const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// //const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// function state(x1, y1, x2, y2, x3, y3, x4, y4) {
//   if ((x3 === x2 || x4 === x1) && (y3 === y2 || y4 === y1)) return 'POINT'
//   if (
//     ((x3 === x2 || x4 === x1) && y4 > y1 && y3 < y2) ||
//     ((y3 === y2 || y4 === y1) && x4 > x1 && x3 < x2)
//   )return 'LINE'
//   if (x3 > x2 || y3 > y2 || x4 < x1 || y4 < y1) return 'NULL'
//   return 'FACE'
// }
// const [x1, y1, x2, y2] = input[0].split(' ').map(e => +e)
// const [x3, y3, x4, y4] = input[1].split(' ').map(e => +e)
// const answer = state(x1, y1, x2, y2, x3, y3, x4, y4)
// console.log(answer)

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  function state(x1, y1, x2, y2, x3, y3, x4, y4) {
    if ((x3 === x2 || x4 === x1) && (y3 === y2 || y4 === y1)) return 'POINT'
    if (
      ((x3 === x2 || x4 === x1) && y4 > y1 && y3 < y2) ||
      ((y3 === y2 || y4 === y1) && x4 > x1 && x3 < x2)
    )
      return 'LINE'
    if (x3 > x2 || y3 > y2 || x4 < x1 || y4 < y1) return 'NULL'
    return 'FACE'
  }
  const [x1, y1, x2, y2] = input[0].split(' ').map(e => +e)
  const [x3, y3, x4, y4] = input[1].split(' ').map(e => +e)
  const answer = state(x1, y1, x2, y2, x3, y3, x4, y4)
  console.log(answer)
  process.exit()
})
