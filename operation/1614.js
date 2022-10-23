const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function max(num, cnt) {
  switch (num) {
    case 1:
      return cnt * 8
    case 2:
      num = cnt % 2 === 0 ? 1 : 3
      return cnt * 4 + num
    case 3:
      num = 2
      return cnt * 4 + num
    case 4:
      num = cnt % 2 === 0 ? 3 : 1
      return cnt * 4 + num
    case 5:
      return cnt * 8 + 4
  }
}
const [num, cnt] = input.map(e => +e)
const answer = max(num, cnt)
console.log(answer)
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// let input = []

// rl.on('line', function (line) {
//   input.push(line)
// }).on('close', function () {
//   process.exit()
// })
