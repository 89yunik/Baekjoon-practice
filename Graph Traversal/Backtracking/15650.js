const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(e => +e)
const stack = []
let answer = []
let start = 1
while (start <= N - M + 1) {
  stack.push([start])
  while (stack.length) {
    const curr = stack.pop()
    if (curr.length === M) {
      answer.push(curr.join(' '))
      continue
    }
    const max = Number(curr[curr.length - 1])
    for (let i = N; i >= max + 1; i--) {
      stack.push([...curr, i])
    }
  }
  start++
}
console.log(answer.join('\n'))
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
