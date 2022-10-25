const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input.shift())
let answer = 0
input = input.map(e => +e)
const positive = input.filter(e => e > 0).sort((a, b) => b - a)
const negative = input.filter(e => e <= 0).sort((a, b) => a - b)
for (let i = 0; i < positive.length; i += 2) {
  if (i === positive.length - 1) answer += positive[i]
  else {
    answer +=
      positive[i] * positive[i + 1] > positive[i] + positive[i + 1]
        ? positive[i] * positive[i + 1]
        : positive[i] + positive[i + 1]
  }
}
for (let i = 0; i < negative.length; i += 2) {
  if (i === negative.length - 1) answer += negative[i]
  else {
    answer +=
      negative[i] * negative[i + 1] > negative[i] + negative[i + 1]
        ? negative[i] * negative[i + 1]
        : negative[i] + negative[i + 1]
  }
}
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
